import PropTypes from 'prop-types';
import { Data, Row } from './TrasactionHistory.styled';
export default function TransactionItem({ type, amount, currency }) {
  return (
    <Row>
      <Data>{type}</Data>
      <Data>{amount}</Data>
      <Data>{currency}</Data>
    </Row>
  );
}

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
