import PropTypes from 'prop-types';
import { StatItem, StatValue } from './Statistic.styled';

export default function StatisticItem({ id, label, percentage }) {
  return (
    <StatItem key={id} style={{ backgroundColor: `${getRandomHexColor()}` }}>
      <span className="label">{label}</span>
      <StatValue>{percentage}%</StatValue>
    </StatItem>
  );
}

StatisticItem.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
