import React from 'react'
import '../App.css';

export default function ChatMessage({ message }) {
  return (
    <div className={`chat-message ${message.user === "gpt" && "chatgpt"}`}>
      <div className="chat-message-center">
        <div className={`avatar ${message.user === "gpt" && "chatgpt"}`}>
        
        </div>
        <div className="message">
          {message.message}
       </div>
      </div>
    </div>
  )
}
