import React from "react";
import "./Feeds.scss";
import Comment from "../Comment/Comment.js";
import { Link } from "react-router-dom";

class Feeds extends React.Component {
  constructor() {
    super();

    this.state = {
      commentList: [],
      id: "yeji",
      newText: "",
      isLike: false,
    };
  }

  handleClicked = () => {
    if (!this.state.newText.trim("")) return;
    this.setState({
      commentList: this.state.commentList.concat(this.state.newText),
      newText: "",
    });
  };

  handleEntered = (e) => {
    if (e.keyCode === 13) {
      this.handleClicked();
    }
  };

  handleChange = (e) => {
    this.setState({
      newText: e.target.value,
    });
  };

  handleLikeClick = () => {
    this.setState({
      isLike: !this.state.isLike,
    });
  };
  render() {
    const buttonDisabled = !this.state.newText.trim("") ? true : false;

    return (
      <div className="Feeds">
        <section className="feedSection">
          <div className="storyContainer">
            <ul>
              <li className="storyItem">
                <Link to="/" className="storyCircle">
                  <img
                    alt="__님의 프로필 사진"
                    className="profileImg"
                    src="images/yejikang/me.jpg"
                  />
                </Link>
                <span className="storyId">__hi</span>
              </li>
              <li className="storyItem">
                <Link to="/" className="storyCircle">
                  <img
                    alt="__님의 프로필 사진"
                    className="profileImg"
                    src="images/yejikang/me.jpg"
                  />
                </Link>
                <span className="storyId">__hi</span>
              </li>
              <li className="storyItem">
                <Link to="/" className="storyCircle">
                  <img
                    alt="__님의 프로필 사진"
                    className="profileImg"
                    src="images/yejikang/me.jpg"
                  />
                </Link>
                <span className="storyId">__hi</span>
              </li>
              <li className="storyItem">
                <Link to="/" className="storyCircle">
                  <img
                    alt="__님의 프로필 사진"
                    className="profileImg"
                    src="images/yejikang/me.jpg"
                  />
                </Link>
                <span className="storyId">__hi</span>
              </li>
              <li className="storyItem">
                <Link to="/" className="storyCircle">
                  <img
                    alt="__님의 프로필 사진"
                    className="profileImg"
                    src="images/yejikang/me.jpg"
                  />
                </Link>
                <span className="storyId">__hi</span>
              </li>
            </ul>
          </div>
          <article className="articleConatiner">
            <div className="articleTop">
              <div className="profilePicture">
                <Link to="/">
                  <img
                    className="profileImg"
                    alt="kim_mi_myo님의 프로필 사진"
                    src="images/yejikang/feedsProfile.jpg"
                  />
                </Link>
              </div>
              <div className="content">
                <Link to="/">kim_mi_myo</Link>
              </div>
              <button className="threeDots"></button>
            </div>
            <div className="articlePictures"></div>
            <div className="articleBottom">
              <div className="articleIconContainer">
                <button
                  className={`articleBtn ${
                    this.state.isLike ? "fillheart" : "heart"
                  }`}
                  onClick={this.handleLikeClick}
                ></button>
                <button className="articleBtn commentImg"></button>
                <button className="articleBtn share">
                  <svg
                    aria-label="게시물 공유"
                    className="_8-yf5 "
                    fill="#262626"
                    height="20"
                    viewBox="0 0 48 48"
                    width="24"
                  >
                    <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path>
                  </svg>
                </button>
                <button className="articleBtn bookmarkImg"></button>
              </div>
              <div className="heartInfoContainer">
                <img
                  className="profileImg"
                  alt="yejiiii_95의 프로필 사진"
                  src="images/yejikang/me.jpg"
                />
                <div>
                  <span>회원님 </span> 외 <span> 200명</span>이 좋아합니다.
                </div>
              </div>
              <div className="commentContainer">
                <div className="commentItem">
                  <span className="commentId">kim_mi_myo</span>집 가고 싶다.
                </div>
                {this.state.commentList.map((comment, index) => (
                  <Comment
                    key={index}
                    id={this.state.id}
                    text={comment}
                  ></Comment>
                ))}
              </div>
            </div>
            <div className="articleTimeInfo">1시간전</div>
            <div className="addCommentContainer">
              <div className="commentForm" onKeyDown={this.handleEntered}>
                <input
                  className="inputComment"
                  type="text"
                  placeholder="댓글달기..."
                  value={this.state.newText}
                  onChange={this.handleChange}
                />
                <button onClick={this.handleClicked} disabled={buttonDisabled}>
                  게시
                </button>
              </div>
            </div>
          </article>
        </section>
      </div>
    );
  }
}

export default Feeds;
