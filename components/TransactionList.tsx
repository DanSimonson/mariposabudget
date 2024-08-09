import getTransactions from "@/app/actions/getTransactions";
import TableDisplay from "./TableDisplay";

const TransactionList = async () => {
  return (
    <>
      <h3 className="mt-6 mb-10 text-2xl dark:bg-secondary bg-primary-foreground drop-shadow-xl rounded-xl p-2 ">
        Transactions
      </h3>
      <TableDisplay />
    </>
  );
};

export default TransactionList;
