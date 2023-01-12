import FriendListItem from './FriendListItem';
import { Container } from './Friends.styled';

export default function FriendList({ friends }) {
  return (
    <Container>
      {friends.map(item => (
        <FriendListItem
          avatar={item.avatar}
          name={item.name}
          isOnline={item.isOnline}
          key={item.id}
        />
      ))}
    </Container>
  );
}
