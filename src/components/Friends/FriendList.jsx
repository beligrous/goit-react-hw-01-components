import FriendListItem from './FriendListItem';
import { Container } from './Friends.styled';
import PropTypes from 'prop-types';

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

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
