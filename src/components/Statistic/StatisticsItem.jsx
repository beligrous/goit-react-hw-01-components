import PropTypes from 'prop-types';
import { StatItem } from './Statistic.styled';

export default function StatisticItem({ id, label, percentage }) {
  return (
    <StatItem key={id}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </StatItem>
  );
}

StatisticItem.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
