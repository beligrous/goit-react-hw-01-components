import user from '../user.json';
import data from '../data.json';
import { Profile } from './profile';
import { Statistic } from './Statistics';
export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        avatar={user.avatar}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistic statistic={data} />
    </div>
  );
};
