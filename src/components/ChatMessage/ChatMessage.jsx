import React, { useEffect, useRef } from 'react'
import { chatConversation } from "../../utils/constants";
import "./ChatMessage.scss";
import chatLogo from "../../assets/images/chat-logo.png"

const getInitialsFromName = (name) => {
	let rgx = new RegExp(/(\p{L}{1})\p{L}+/, 'gu');

	let initials = [...name.matchAll(rgx)] || [];

	initials = (
	(initials.shift()?.[1] || '') + (initials.pop()?.[1] || '')
	).toUpperCase();

	return initials;
}

const ChatMessage = () => {
	const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
	messagesEndRef.current?.scrollIntoView(false)
  }

  useEffect(() => {
		scrollToBottom()
  }, []);

  return (
	<div className="chat-message">
		{
			chatConversation.map((conversation, i) => {
				return(
					<div key={i}>
						<div className="conversation-wrapper question">
							<span className="avatar">{getInitialsFromName(conversation.user.name)}</span>
							<span className="text">{conversation.question}</span>
						</div>
						<div className="conversation-wrapper">
							<img src={chatLogo} alt="Scalers ai logo" />
							<span className="text">{conversation.answer}</span>
						</div>
					</div>
				)
			})
		}
		<div ref={messagesEndRef} />
	</div>
  );
}
  
export default ChatMessage;
  