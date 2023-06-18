# <div align="center">

<div align="center" style="width: 100px;" >
<img src="" style="width: 100px;" alt="Title Image">
</div>
<h1 align="center">react-raise-editor</h1>

<p align="center">
Simple Editor Handler with textarea in react
</p>
</div>

## Install

    npm install react-raise-editor
    # or
    yarn add react-raise-editor

---

## Usage

### hooks

Load the useRaiseEditor and pass it to state and ref, respectively.
The hooks are hooks that provide the ability to **enter a textarea or to lengthen or decrease as much as the line is crossed** due to the amount of text is overflowing.

###### Kor
###### useRaiseEditor를 불러와 state와 ref에 각각 전달합니다.
###### 해당 hooks는 textarea에 enter를 하거나 text의 양이 넘쳐 줄이 넘어간 만큼 길어지거나 또는 줄어드는 기능을 제공하는 hooks 입니다.

```jsx
import React, { useState, useRef } from 'react'
import { useRaiseEditor } from 'react-raise-editor';

export default function App() {
  const textRef = useRef<HTMLTextAreaElement | null>(null); 
  const [text, setText] = useState<string>('');

  useRaiseEditor({
    state: text,
    ref: textRef,
  })

  return (
    <textarea ref={textRef} value={text} onChange={e => setText(e.target.value)}/>
  )
}
```

---

### handler

Load the useRaiseEditor and pass it to state and ref, respectively.
The hooks are hooks that provide the ability to **enter a textarea or to lengthen or decrease as much as the line is crossed** due to the amount of text is overflowing.

Enter handleLimitEnterEditor, 

**If you don't write the first text, you can't enter.**
<button disabled={text === ''}>제출하기</buton>.

When writing a post, the ender allows you to only do it once per line, limiting reckless spacing.

###### Kor
###### handleLimitEnterEditor를 입력합니다, 

###### 최초 text를 작성하지 않을 시 enter은 불가합니다. 
###### <button disabled={text === ''}>제출하기</button> 에 대한 설명입니다.

###### 게시글을 작성할때에 endter은 한줄에 한번만 가능하도록하여, 무분별한 띄어쓰기에 제한을 둡니다.

```jsx
import React, { useState, useRef } from 'react'
import { useRaiseEditor , handleLimitEnterEditor } from 'react-raise-editor';

export default function App() {
  const textRef = useRef<HTMLTextAreaElement | null>(null); 
  const [text, setText] = useState<string>('');

  useRaiseEditor({
    state: text,
    ref: textRef,
  })

  return (
   <form>
     <textarea ref={textRef} value={text} onChange={e => handleLimitEnterEditor({
      event:e,
      state:text,
      handler:(fx) => setText(fx)
    })}/>
    
    <button disabled={text === ''}>제출하기</button>
   </form>
  )
}
```