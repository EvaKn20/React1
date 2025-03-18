import Button from "../Button/Button";
import "./cards.scss";
export default function Cards() {
  return (
    <div className="cards">
      <div className="card">
        <div className="card_desc">
          <img src="/src/assets/plan.png" alt="plan" />
          <span className="card_desc1">Free</span>
          <div className="wrap_card_desc">
            <div className="wrap_container_desc">
              <img src="/src/assets/tick.svg" alt="tick" />
              <span className="card_desc2">Unlimited bandwitch</span>
            </div>
            <div className="wrap_container_desc">
              <img src="/src/assets/tick.svg" alt="tick" />
              <span className="card_desc2">Encrypted connection</span>
            </div>
            <div className="wrap_container_desc">
              <img src="/src/assets/tick.svg" alt="tick" />
              <span className="card_desc2">Yes trafic logs</span>
            </div>
        
          </div>
          <span className="card_desk2">Free</span>
                    <Button content="Select" color="red2" />
          
        </div>
      </div>
      <div className="card">
        <div className="card_desc">
          <img src="/src/assets/plan.png" alt="plan" />
          <span className="card_desc1">Standard plan</span>
          <div className="wrap_card_desc1">
            <div className="wrap_container_desc">
              <img src="/src/assets/tick.svg" alt="tick" />
              <span className="card_desc2">Unlimited bandwitch</span>
            </div>
            <div className="wrap_container_desc">
              <img src="/src/assets/tick.svg" alt="tick" />
              <span className="card_desc2">Encrypted connection</span>
            </div>
            <div className="wrap_container_desc">
              <img src="/src/assets/tick.svg" alt="tick" />
              <span className="card_desc2">Yes trafic logs</span>
            </div>
            <div className="wrap_container_desc">
              <img src="/src/assets/tick.svg" alt="tick" />
              <span className="card_desc2">Works on all devices</span>
            </div>
            <div className="wrap_container_desc">
              <img src="/src/assets/tick.svg" alt="tick" />
              <span className="card_desc2">Connect anyware</span>
            </div>
        
          </div>
          <div className="price">
          <span className="card_desk2">$ 9 </span>
          <span className="card_desk3">/ </span>
          <span className="card_desk4">mo</span>
          </div>
          <Button content="Select" color="red2" />
        </div>
      </div>
      <div className="card">
        <div className="card_desc">
          <img src="/src/assets/plan.png" alt="plan" />
          <span className="card_desc1">Premium plan</span>
          <div className="wrap_card_desc2">
            <div className="wrap_container_desc">
              <img src="/src/assets/tick.svg" alt="tick" />
              <span className="card_desc2">Unlimited bandwitch</span>
            </div>
            <div className="wrap_container_desc">
              <img src="/src/assets/tick.svg" alt="tick" />
              <span className="card_desc2">Encrypted connection</span>
            </div>
            <div className="wrap_container_desc">
              <img src="/src/assets/tick.svg" alt="tick" />
              <span className="card_desc2">Yes trafic logs</span>
            </div>
            
            <div className="wrap_container_desc">
              <img src="/src/assets/tick.svg" alt="tick" />
              <span className="card_desc2">Works on all devices</span>
            </div>
            <div className="wrap_container_desc">
              <img src="/src/assets/tick.svg" alt="tick" />
              <span className="card_desc2">Connect anyware</span>
            </div>
            <div className="wrap_container_desc">
              <img src="/src/assets/tick.svg" alt="tick" />
              <span className="card_desc2">Get new features</span>
            </div>
          </div>
          <div className="price">
          <span className="card_desk2">$ 12 </span>
          <span className="card_desk3">/ </span>
          <span className="card_desk4">mo</span>
          </div>
          <Button content="Select" color="red2" />
        </div>
      </div>
    </div>
  );
}
