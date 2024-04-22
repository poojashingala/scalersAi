import ChatInput from "../ChatInput/ChatInput";
import ChatMessage from "../ChatMessage/ChatMessage";
import "./ChatContainer.scss"

const ChatContainer = () => {
  return (
    <div className="chat-container">
        <ChatMessage />
        <ChatInput />
    </div>
  );
}
  
export default ChatContainer;
  