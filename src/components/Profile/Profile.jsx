import PropTypes from "prop-types";
import { ProfileContainer } from './Profile.styled'
import { ProfileDescription } from "./Profile.styled";
import { ProfileAvatar } from "./Profile.styled";
import { ProfileName } from "./Profile.styled";
import { ProfileTagLocation } from "./Profile.styled";
import { ProfileStats } from "./Profile.styled";
import { ProfileList } from "./Profile.styled";
import { ProfileLabel } from "./Profile.styled";
import { ProfileQuantity } from "./Profile.styled";
export default function Profile({ avatar, username, tag, location, followers, views, likes }) {
    
  return (
<ProfileContainer>
<ProfileDescription>
  <ProfileAvatar
    src={avatar}
    alt="User avatar"
  />
  <ProfileName>{username}</ProfileName>
  <ProfileTagLocation>@{tag}</ProfileTagLocation>
  <ProfileTagLocation>{location}</ProfileTagLocation>
</ProfileDescription>
<ProfileStats>
  <ProfileList>
    <ProfileLabel>Followers</ProfileLabel>
    <ProfileQuantity> {followers}</ProfileQuantity>
  </ProfileList>
  <ProfileList>
    <ProfileLabel>Views</ProfileLabel>
    <ProfileQuantity> {views}</ProfileQuantity>
  </ProfileList>
  <ProfileList>
    <ProfileLabel>Likes</ProfileLabel>
    <ProfileQuantity> {likes}</ProfileQuantity>
  </ProfileList>
</ProfileStats>
</ProfileContainer>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

  
