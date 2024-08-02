import getTransactions from "@/app/actions/getTransactions";
import TransactionItem from "./TransactionItem";
import { Transaction } from "@/types/Transaction";

const TransactionList = async () => {
  const { transactions, error } = await getTransactions();

  if (error) {
    return <p className="error">{error}</p>;
  }

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {/* {transactions &&
          transactions.map((transaction: Transaction, index: any) => (
            <p key={index + Math.random()}>{transaction.text}</p>
          ))} */}
        {transactions &&
          transactions.map((transaction: Transaction, index) => (
            <TransactionItem key={index} transaction={transaction} />
          ))}
      </ul>
    </>
  );
};

export default TransactionList;
