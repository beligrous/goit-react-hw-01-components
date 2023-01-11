import PropTypes from 'prop-types';
import { Container, Image, Stats, StatsItem, Name } from './Profile.styled';

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <Container>
      <div>
        <Image src={avatar} alt={username} className="avatar" />
        <Name>{username}</Name>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>
      <Stats>
        <StatsItem>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </StatsItem>
        <StatsItem>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </StatsItem>
        <StatsItem>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </StatsItem>
      </Stats>
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
