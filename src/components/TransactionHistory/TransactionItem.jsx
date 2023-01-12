import PropTypes from 'prop-types';
import { Data, Row } from './TrasactionHistory.styled';
export default function TransactionItem({ id, type, amount, currency }) {
  return (
    <Row key={id}>
      <Data>{type}</Data>
      <Data>{amount}</Data>
      <Data>{currency}</Data>
    </Row>
  );
}

TransactionItem.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
