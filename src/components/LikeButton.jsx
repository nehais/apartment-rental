import LikeIcon from "../assets/like.png";
import LikedIcon from "../assets/liked.png";

const LikeButton = ({ apartment, handleLike }) => {
  return (
    <div
      className="like-button"
      style={{
        backgroundImage: `url(${apartment.liked ? LikedIcon : LikeIcon})`,
      }}
      onClick={handleLike}
    ></div>
  );
};

export default LikeButton;
