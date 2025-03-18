import "./items.scss";
export default function Items() {
  return (
    <div className="items">
      <div className="item">
        <div className="img1">
          <img src="/src/assets/item1.png" alt="item1" />
        </div>

        <div className="span_item">
          <span className="span_item1">90+</span>
          <span className="span_item2">Users</span>
        </div>
      </div>
      <span className="divider"></span>
      <div className="item">
      <div className="img1">
          <img src="/src/assets/item2.png" alt="item2" />
        </div>

        <div className="span_item">
          <span className="span_item1">30+</span>
          <span className="span_item2">Locations</span>
        </div>
      </div>
      <span className="divider"></span>
      <div className="item">
      <div className="img1">
          <img src="/src/assets/item3.png" alt="item3" />
        </div>

        <div className="span_item">
          <span className="span_item1">50+</span>
          <span className="span_item2">Servers</span>
        </div>
      </div>
    </div>
  );
}
