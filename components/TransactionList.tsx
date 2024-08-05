import getTransactions from "@/app/actions/getTransactions";
import TableDisplay from "./TableDisplay";

const TransactionList = async () => {
  const { transactions, error } = await getTransactions();

  return (
    <>
      <h3 className="mt-6 text-2xl">Transactions</h3>
      <TableDisplay transactions={transactions} error={error} />
    </>
  );
};

export default TransactionList;
