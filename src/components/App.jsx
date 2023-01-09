import user from '../user.json';
import data from '../data.json';
import Profile from './Profile';
import StatItem from './Statistics';
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
      <section className="statistics">
        <h2 className="title">Upload stats</h2>
        <ul className="stat-list">
          {data.map(i => (
            <StatItem
              id={data.id}
              label={data.label}
              percentage={data.percentage}
            />
          ))}
        </ul>
      </section>
    </div>
  );
};

console.log(data[1].id, data[2].label);
