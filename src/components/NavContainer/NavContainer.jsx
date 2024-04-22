import NavLogo from "../NavLogo/Navlogo";
import "./NavContainer.scss";
import { chatCollection } from "../../utils/constants";
import ChatCollection from "../ChatCollection/ChatCollection";
import NavItems from "../NavItems/NavItems";

const NavContainer = () => {
    return (
      <div className="nav-container">
				<NavLogo />
        {
          chatCollection.map((item, i) => {
            return(
              <ChatCollection key={i} title={item.title} chatCollectionItems={item.chatCollectionItems} />
            )
          })  
        }
        <NavItems />
      </div>
    );
  }
  
  export default NavContainer;
  