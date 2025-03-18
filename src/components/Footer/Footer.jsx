//import Contacts from "../Contacts/Contacts";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Icons from "../Icons/Icons";
import Titlefooter from "../Titlefooter/Titlefooter";
import "./footer.scss";

export default function Footer() {
  return (
    <div className="wr_footer">
      
      <div className="container">
        <div className="container1">
          <Logo />
          <span className="footer_desc">
            Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh
            arcu id purus ullamcorper. Vel vel erat semper augue.
          </span>
          <Icons />
        </div>
        <Titlefooter />
      </div>
    </div>
  );
}
