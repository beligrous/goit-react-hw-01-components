import StatItem from './StatisticsItem';
import PropTypes from 'prop-types';

export default function Stat({ items, title }) {
  <section className="statistics">
    <h2 className="title">{title}</h2>
    <ul className="stat-list">
      {items.map(item => (
        <StatItem
          key={item.id}
          label={item.label}
          percentage={item.percentage}
        />
      ))}
    </ul>
  </section>;
}

Stat.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
