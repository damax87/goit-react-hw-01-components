import PropTypes from 'prop-types';

export default function TransactionHistory({ items }) {
    return (
  <table className="transactionHistoryTable">
    <thead className="hederRow">
      <tr className="valuesRow">
        <th className="columnHeader">Type</th>
        <th className="columnHeader">Amount</th>
        <th className="columnHeader">Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map(item => (
        <tr key={item.id} className="valuesRow">
          <td className="transactionData">{item.type}</td>
          <td className="transactionData">{item.amount}</td>
          <td className="transactionData">{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
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