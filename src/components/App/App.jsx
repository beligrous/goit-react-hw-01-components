import user from '../../data/user.json';
import data from '../../data/data.json';
import transactions from '../../data/transactions.json';
import friends from '../../data/friends.json';
import Profile from '../Profile/Profile';
import Statistic from '../Statistic/Statistic';
import FriendList from '../Friends/FriendList';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        avatar={user.avatar}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistic items={data} title={'Upload stats'} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};
