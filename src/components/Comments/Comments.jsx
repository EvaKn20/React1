import "./comments.scss";

export default function Comments() {
  return (
    <div className="comments_wrapper">
      {/* Карточка 1 */}
      <div className="comment_wrapper">
        <div className="header_comment">
          <div className="header_comment1">
          <div>
            <img src="/src/assets/comment1.png" alt="comment1" />
            </div>
            <div className="header_comment_name">
              <span className="comment_name">Brooklyn Simmons</span>
              <div className="header_comment_country">
                <span className="comment_country">Warsaw, pland</span>
                <div className="comment_star">
                  <span className="star_name">4.5</span>
                  <img className="star_img"src="/src/assets/star.png" alt="star" />
                </div>
              </div>
            </div>
            </div>
          
          <div className="header_comment_desc">

            <span>
            “wow...iam very happy to use this vpn,it
turned out to be more than my expectations
and so far there have been no problems.
laslesvpn always the best”.
            </span>
          </div>
        </div>
      </div>

      {/* Карточка 2 */}
      <div className="comment_wrapper">
        <div className="header_comment">
          <div className="header_comment1">
          <div>
            <img src="/src/assets/comment2.png" alt="comment1" />
            </div>
            <div className="header_comment_name">
              <span className="comment_name">Darlene Robertson</span>
              <div className="header_comment_country">
                <span className="comment_country">Warsaw, pland</span>
                <div className="comment_star">
                  <span className="star_name">4.5</span>
                  <img className="star_img"src="/src/assets/star.png" alt="star" />
                </div>
              </div>
            </div>
            </div>
          
          <div className="header_comment_desc">

            <span>
            “wow...iam very happy to use this vpn,it
turned out to be more than my expectations
and so far there have been no problems.
laslesvpn always the best”.
            </span>
          </div>
        </div>
      </div>

      {/* Карточка 3 */}
      <div className="comment_wrapper">
        <div className="header_comment">
          <div className="header_comment1">
          <div>
            <img src="/src/assets/comment3.png" alt="comment1" />
            </div>
            <div className="header_comment_name">
              <span className="comment_name">Darrell Steward</span>
              <div className="header_comment_country">
                <span className="comment_country">Warsaw, pland</span>
                <div className="comment_star">
                  <span className="star_name">4.5</span>
                  <img className="star_img"src="/src/assets/star.png" alt="star" />
                </div>
              </div>
            </div>
            </div>
          
          <div className="header_comment_desc">

            <span>
            “wow...iam very happy to use this vpn,it
turned out to be more than my expectations
and so far there have been no problems.
laslesvpn always the best”.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}