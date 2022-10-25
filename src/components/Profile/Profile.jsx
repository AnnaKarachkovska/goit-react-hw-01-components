import PropTypes from "prop-types";
import slyles from './Profile.module.css';

export const Profile = ({ username, tag, location, avatar, states }) => {
  return (
<div className={slyles.profile}>
      <div className={slyles.description}>
    <img
      src={avatar}
      alt="User avatar"
      className={slyles.avatar}
    />
    <p className="name">{username}</p>
    <p className="tag">@{tag}</p>
    <p className="location">{location}</p>
  </div>

  <ul className={slyles.stats}>
    <li className={slyles.statsItem}>
      <span className="label">Followers</span>
      <span className="quantity">{states.followers}</span>
    </li>
    <li className={slyles.statsItem}>
      <span className="label">Views</span>
      <span className="quantity">{states.views}</span>
    </li>
    <li className={slyles.statsItem}>
      <span className="label">Likes</span>
      <span className="quantity">{states.likes}</span>
    </li>
  </ul>
</div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  states: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};