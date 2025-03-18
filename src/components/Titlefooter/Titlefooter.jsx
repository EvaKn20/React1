import "./titlefooter.scss";
export default function Titlefooter() {
  return (
    <div className="titlefooter_wrap">
      <div className="titlefooter1">
        <span className="titlefooter11">Product</span>
        <div className="titlefooter12">
            <a href="#">Download</a>
            <a href="#">Pricing</a>
            <a href="#">Locations</a>
            <a href="#">Server</a>
            <a href="#">Countries</a>
            <a href="#">Blog</a>
        </div>
      </div>
      <div className="titlefooter1">
        <span className="titlefooter11">Engage</span>
        <div className="titlefooter12">
        <a href="#">LaslesVPN?</a>
            <a href="#">FAQ</a>
            <a href="#">Tutorials</a>
            <a href="#">About us</a>
            <a href="#">Privacy policy</a>
            <a href="#">Terms of service</a>
        </div>
      </div>
      <div className="titlefooter1">
        <span className="titlefooter11">Earn money</span>
        <div className="titlefooter12">
        <a href="#" className="partner">Become partner</a>
        <a href="#">Affilite</a>

        </div>
      </div>
    </div>
  );
}
