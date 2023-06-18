import React, { useState, useRef } from 'react'
import {useRaiseEditor } from './lib';

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
