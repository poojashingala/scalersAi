import "./ChatInput.scss"
import { FiSend } from "react-icons/fi";


const ChatInput = () => {
  return (
    <div className="chat-input">
        <input placeholder="Hi! What do you want to ask?" name="question" />
        <button><FiSend color="#ffffff" /></button>
    </div>
  );
}
  
export default ChatInput;
  