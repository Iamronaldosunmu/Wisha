import Logo from "./Logo";
import NavButton from "./NavButton";
import DesktopNav from "./DesktopNav";
export default function NavBar(props) {
  return (
    <div className="navBarContainer">
      <Logo />
      <NavButton history={props.history} />
      <DesktopNav />
    </div>
  );
}
