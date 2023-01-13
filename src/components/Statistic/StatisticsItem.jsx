import PropTypes from 'prop-types';
import { StatItem, StatValue } from './Statistic.styled';

export default function StatisticItem({ label, percentage }) {
  return (
    <StatItem style={{ backgroundColor: `${getRandomHexColor()}` }}>
      <span>{label}</span>
      <StatValue>{percentage}%</StatValue>
    </StatItem>
  );
}

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
