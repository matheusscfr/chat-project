import React from 'react'
import { UserAuth } from '../context/AuthContext'

const Message = ({message}) => {
  const {currentUser} = UserAuth();

  return (
    <div><div className={`chat ${message.id === currentUser.iud ? "chat-end" : "chat-start"} `}>
    <div className="chat-image avatar">
      <div className="w-10 rounded-full">
        <img alt="Chat Bubble" src={message.avatar} />
      </div>
    </div>
    <div className="chat-header">
    {message.name}
    </div>
    <div className="chat-bubble">{message.text}</div>

  </div>
 
  </div>
  )
}

export default Message