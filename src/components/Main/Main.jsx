import Button from "../Button/Button";
import "./main.scss";
import Description1 from "../Description1/Description1";
import Description2 from "../Description2/Description2";
import Items from "../Items/Items";
import Cards from "../Cards/Cards";
import Comments from "../Comments/Comments";
import Signals from "../Signals/Signals";
export default function Main() {
  return (
    <div className="wr_main">
      <div className="container">
        <div className="wrap">
          <Description1 />
          <div className="img1">
            <img src="/src/assets/avatar.png" alt="avatar" />
          </div>
        </div>
      </div>
      <div className="container2">
        <Items />
      </div>
      <div className="container3">
        <div className="wrap2">
          <div >
            <img src="/src/assets/avatar2.png" alt="avatar" />
          </div>
          <Description2 />
        </div>
      </div>
      <div className="container4">
        <div className="container41">
          <div className="choose_plan">
            <span className="plan">Choose your plan</span>
            <span className="plan_desc">
              Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh
              arcu id purus ullamcorper. Vel vel erat semper augue.
            </span>
          </div>
        </div>
        
        <Cards />
      </div>
      <div className="container5">
        <div className="container51">
          <div className="container52">
            <div className="map_desc">
              <div className="desc5">
                <span className="map">Huge global network</span>
                <span className="map">of fast VPN</span>
              </div>
              <span className="map2">
                Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh
                arcu id purus ullamcorper. Vel vel erat semper augue.
              </span>
            </div>
          </div>
          <Signals />
        </div>
        <div className="img_container">
        <img src="/src/assets/Sponsores.png" alt="sponsores" />
        </div>
      </div>
      <div className="container6">
        <div className="container61">
          <div className="map_desc">
            <div className="desc5">
          <span className="map">Trusted by thousands of 
          </span>
          <span className="map">happy customer</span>
          </div>
          <span className="map2">
                Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh
                arcu id purus ullamcorper. Vel vel erat semper augue.
              </span>
          </div>
        </div>
        <Comments />
        <div className="footer_comments">
          <div className="slaider">
            <img src="/src/assets/slaider.png" alt="slaider" />
          </div>
          <div className="two_btns">
            <div className="left">
            <img src="/src/assets/left.png" alt="left" />
            </div>
            <div className="right">
            <img src="/src/assets/right.svg" alt="rigth" />
            </div>
          </div>
        </div>
      </div>
      <div className="container7">
        <div className="container71">
        <div className="subsc">
          <div className="desc_subc">
<span className="desc_subc1">Subscribe now for
get special features!</span>
<span className="desc_subc2">Lorem ipsum dolor sit amet </span>
          </div>
          <div className="btn_subc">
            <Button content="Subscribe now" color="red3" />
          </div>
        </div>

      </div>
      </div>
    </div>
  );
}
