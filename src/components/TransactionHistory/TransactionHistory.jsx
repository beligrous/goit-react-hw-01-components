import PropTypes from 'prop-types';
import TransactionItem from './TransactionItem';
import { Container, Title, Table, Head } from './TrasactionHistory.styled';

export default function TransactionHistory({ items }) {
  return (
    <Container>
      <Table>
        <Title>
          <tr>
            <Head>Type</Head>
            <Head>Amount</Head>
            <Head>Currency</Head>
          </tr>
        </Title>

        <tbody>
          {items.map(item => (
            <TransactionItem
              key={item.id}
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
