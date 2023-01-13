import StatisticItem from './StatisticsItem';
import { Container, StatList, Title } from './Statistic.styled';
import PropTypes from 'prop-types';

export default function Statistic({ items, title }) {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      <StatList>
        {items.map(item => (
          <StatisticItem
            key={item.id}
            label={item.label}
            percentage={item.percentage}
          />
        ))}
      </StatList>
    </Container>
  );
}

Statistic.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
