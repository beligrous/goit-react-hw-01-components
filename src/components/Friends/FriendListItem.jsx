import { Friend, Avatar, Name, Status } from './Friends.styled';

export default function FriendListItem({ avatar, name, isOnline, id }) {
  return (
    <Friend key={id}>
      <Status isOnline={isOnline}></Status>
      <Avatar src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </Friend>
  );
}
