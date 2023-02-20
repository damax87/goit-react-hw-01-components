import PropTypes from 'prop-types';
import { TransactionHistoryTable } from './Transaction.styled';
import { HederRow } from './Transaction.styled';
import { ValuesRow } from './Transaction.styled';
import { ColumnHeader } from './Transaction.styled';

export default function TransactionHistory({ items }) {
    return (
  <TransactionHistoryTable>
    <HederRow>
      <ValuesRow>
        <ColumnHeader>Type</ColumnHeader>
        <ColumnHeader>Amount</ColumnHeader>
        <ColumnHeader>Currency</ColumnHeader>
      </ValuesRow>
    </HederRow>
    <tbody>
      {items.map(item => (
        <ValuesRow key={item.id}>
          <td className="transactionData">{item.type}</td>
          <td className="transactionData">{item.amount}</td>
          <td className="transactionData">{item.currency}</td>
        </ValuesRow>
      ))}
    </tbody>
  </TransactionHistoryTable>
  );
};

TransactionHistory.protoType = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.number.isRequired,
    })
  ),
};