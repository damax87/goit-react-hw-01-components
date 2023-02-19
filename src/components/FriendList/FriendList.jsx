import PropTypes from "prop-types";
import FriendListItem from './FriendListItem';


export default function FriendList({ friends }) {

    return (
       
  <ul className="friend-list">
  {friends.map(friend => (
    <FriendListItem
    key={friend.id}
    avatar={friend.avatar}
    isOnline={friend.isOnline}
    name={friend.name}
  ></FriendListItem>
  ))}
  </ul>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      })
    ),
  };