import user from '../Data/user.json';
import data from '../Data/data.json';
import transactions from '../Data/transactions.json';
import friends from '../Data/friends.json';
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
