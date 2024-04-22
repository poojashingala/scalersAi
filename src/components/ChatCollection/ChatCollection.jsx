import ChatCollectionItem from "../ChatCollectionItem/ChatCollectionItem";
import "./ChatCollection.scss"

const ChatCollection = ({title, chatCollectionItems}) => {
	return (
	  <div className="chat-collection">
			<h3>{title}</h3>
			<ul>
				{
					chatCollectionItems.map((item, i) => {
						return(
							<ChatCollectionItem key={i} item={item} />
						)
					})
				}
			</ul>
	  </div>
	);
}
  
  export default ChatCollection;
  