import "./NavItem.scss"

const NavItem = ({item}) => {
  
    return (
        <li className="nav-item">
            {item.optionIcon}
            {item.optionName}
        </li>
    );
  }
  
  export default NavItem;