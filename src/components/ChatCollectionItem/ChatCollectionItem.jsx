import { useEffect, useState } from "react";
import "./ChatCollectionItem.scss"
import { FaFolder, FaRegFolder, FaEllipsisVertical  } from "react-icons/fa6";
import { chatOptions } from "../../utils/constants";
import useComponentVisible from "../../hooks/useComponentVisible";

const ChatCollectionItem = ({item}) => {
  const {
    ref,
    isComponentVisible,
    setIsComponentVisible
  } = useComponentVisible(true);

    useEffect(() => {
      setIsComponentVisible(false)
    }, [])
    const isItemHovered = isComponentVisible
    return (
      <li ref={ref} className={`chat-collection-item ${isItemHovered ? "color-white" : ""}` }  onClick={() => setIsComponentVisible(true)} >
        {
          item.isNew ? <FaFolder /> : <FaRegFolder />
        }
        <span className="chat-collection-item-chatTitle">{item.chatTitle}</span>
        <FaEllipsisVertical className={isItemHovered ? "display-icon" : "d-none"} />
        {
          isItemHovered ? (
            <div className="popup">
              <ul>
                {
                  chatOptions.map((option, i) => {
                    return(
                      <li key={i}>
                        {option.optionIcon}
                        {option.optionName}
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          ) : <></>
        }
      </li>
    );
  }
  
  export default ChatCollectionItem;