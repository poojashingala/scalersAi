import "./NavLogo.scss"
import Logo from "../../assets/images/logo.png"

const NavLogo = () => {
  return (
    <div className="nav-logo">
      <img src={Logo}  alt="Application logo" />
    </div>
  );
}

export default NavLogo;
  