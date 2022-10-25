import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
      <table className={styles.transactionHistory}>
      <thead className={styles.names}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        { items.map(item => <tr key={item.id} className={styles.items}>
          <td className={styles.item}>{ item.type }</td>
          <td >{ item.amount }</td>
          <td >{ item.currency }</td>
        </tr>) }
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};
