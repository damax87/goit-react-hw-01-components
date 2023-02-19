import Profile from "./Profile/Profile";
import user from "JSON/user.json";
import Statistics from "./Statistics/Statistics";
import data from "JSON/data.json"
import FriendList from "./FriendList/FriendList";
import friends from "JSON/friends.json";
import TransactionHistory from "./Transaction/Transaction";
import transactions from "JSON/transactions.json";


export const App = () => {
  return (
    <div>
     <Profile 
    avatar={user.avatar} 
    username={user.username} 
    tag={user.tag} 
    location={user.location}
    followers={user.stats.followers}
    views={user.stats.views}
    likes={user.stats.likes}
  /> 
  <Statistics title="Upload stats" stats={data} />
  <Statistics stats={data} />
  <FriendList friends={friends} />
  <TransactionHistory items={transactions} />
    </div>
  );
};
