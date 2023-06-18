# <div align="center">

<div align="center" style="width: 100px;" >
<img src="https://github.com/deep-hwan/react-raise-editor/blob/main/public/edit-img.png?raw=true" style="width: 100px;" alt="Title Image">
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

## Simple Usage

### hooks 
#### useRaiseEditor

Load the useRaiseEditor and pass it to state and ref, respectively.
The hooks are hooks that provide the ability to **enter a textarea or to lengthen or decrease as much as the line is crossed** due to the amount of text is overflowing.


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
#### handleLimitEnterEditor

Load the useRaiseEditor and pass it to state and ref, respectively.
The hooks are hooks that provide the ability to **enter a textarea or to lengthen or decrease as much as the line is crossed** due to the amount of text is overflowing.

Enter handleLimitEnterEditor, **If you don't write the first text, you can't enter.**
```jsx
<button disabled={text === ''}>submit</buton>.
```

When writing a post, the ender allows you to only do it once per line, limiting reckless spacing.
handleLimitEnterEditor delivers event, state, and handler.
**However, you must deliver fx to setState to hadler!**


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
    
    <button disabled={text === ''}>submit</button>
   </form>
  )
}
```