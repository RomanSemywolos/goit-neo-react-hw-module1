import style from "./TransactionHistory.module.css";
import clsx from "clsx";

const TransactionHistory = ({ items }) => {
  return (
    <table className={style.table}>
      <thead className={style.thead}>
        <tr>
          <th className={style.cell}>Type</th>
          <th className={style.cell}>Amount</th>
          <th className={style.cell}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => {
          const { id, type, amount, currency } = item;
          return (
            <tr
              key={id}
              className={clsx(index % 2 === 0 ? style.rowEven : style.rowOdd)}
            >
              <td className={style.cell}><span className={style.wrap}>{type}</span></td>
              <td className={style.cell}>{amount}</td>
              <td className={style.cell}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
