import PropTypes from "prop-types";
import FriendListItem from './FriendListItem';
import { ListFriend } from "./FriendList.styled";



export default function FriendList({ friends }) {

    return (
       
  <ListFriend>
  {friends.map(friend => (
    <FriendListItem
    key={friend.id}
    avatar={friend.avatar}
    isOnline={friend.isOnline}
    name={friend.name}
  ></FriendListItem>
  ))}
  </ListFriend>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      })
    ),
  };