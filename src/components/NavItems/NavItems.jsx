import "./NavItems.scss"
import { navItems } from "../../utils/constants";
import NavItem from "../NavItem/NavItem";

const NavItems = () => {
	return (
	  <div className="nav-items">
			<ul>
				{
					navItems.map((item, i) => {
						return(
							<NavItem item={item} key={i} />
						)
					})
				}
			</ul>
	  </div>
	);
}
  
  export default NavItems;
  