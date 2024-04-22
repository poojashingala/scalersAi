import ChatInput from "../ChatInput/ChatInput";
import ChatMessage from "../ChatMessage/ChatMessage";
import "./ChatContainer.scss"

const ChatContainer = () => {
  return (
    <main className="chat-container">
        <ChatMessage />
        <ChatInput />
    </main>
  );
}
  
export default ChatContainer;
  