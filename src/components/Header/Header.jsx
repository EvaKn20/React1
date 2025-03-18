
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import Sign from "../Sign/Sign";
import "./header.scss";

export default function Header() {
  return (
    <div className="wr_header">
      <div className="container">
        <Logo />

        <Nav />
        <Sign />

      </div>
    </div>
  );
}
