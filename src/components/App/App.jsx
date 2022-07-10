import user from 'user.json';
import statData from 'data.json';
import friends from 'friends.json';
import trans from 'transactions.json';

import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

import { Container } from './App.styled';
  
export const App = () => {
  return (
    <Container>
      <Profile 
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statData} />
      <Statistics stats={statData} />
      <FriendList friends={friends} />
      <TransactionHistory trans={trans}/>
    </Container>
  )
}


