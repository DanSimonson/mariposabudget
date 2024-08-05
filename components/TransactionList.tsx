import getTransactions from "@/app/actions/getTransactions";
import TransactionItem from "./TransactionItem";
import { Transaction } from "@/types/Transaction";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
//import getIncomeExpense from "@/app/actions/getIncomeExpense";

const TransactionList = async () => {
  const { transactions, error } = await getTransactions();

  if (error) {
    return <p className="error">{error}</p>;
  }
  //// .filter((t) => t.type === "expense")
  return (
    <>
      <h3 className="mt-6 text-2xl">History</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions &&
            transactions.map((t) => (
              <TableRow key={t.userId}>
                <TableCell>{t.text}</TableCell>
                <TableCell className="text-right">
                  ${Math.abs(t.amount).toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      {/* <ul className="border border-cyan-700 w-full ">
        {/* {transactions &&
          transactions.map((transaction: Transaction, index: any) => (
            <p key={index + Math.random()}>{transaction.text}</p>
          ))} 
        {transactions &&
          transactions.map((transaction: Transaction, index) => (
            <TransactionItem key={index} transaction={transaction} />
          ))}
      </ul> */}
    </>
  );
};

export default TransactionList;
