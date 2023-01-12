import PropTypes from 'prop-types';
import {
  Container,
  Image,
  StatsList,
  StatsItem,
  Name,
  Stats,
} from './Profile.styled';

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <Container>
      <div>
        <Image src={avatar} alt={username}/>
        <Name>{username}</Name>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>
      <StatsList>
        <StatsItem>
          <span>Followers</span>
          <Stats>{stats.followers}</Stats>
        </StatsItem>
        <StatsItem>
          <span>Views</span>
          <Stats>{stats.views}</Stats>
        </StatsItem>
        <StatsItem>
          <span>Likes</span>
          <Stats>{stats.likes}</Stats>
        </StatsItem>
      </StatsList>
    </Container>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
