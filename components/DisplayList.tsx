import getTransactions from "@/app/actions/getTransactions";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Key } from "react";
import { BudgetModal } from "./Modal";

type t = {
  id: string;
  amount: number;
  text: string;
};
const DisplayList = async () => {
  const { transactions, error } = await getTransactions();

  return (
    <>
      <h3 className="mt-6 mb-10 text-2xl dark:bg-secondary bg-primary-foreground drop-shadow-xl rounded-xl p-2 ">
        Transactions
      </h3>

      <Table>
        <TableHeader>
          <TableRow className="bg-secondary">
            <TableHead>Description</TableHead>
            <TableHead className="text-right">Amount</TableHead>
            <TableHead className="text-right">Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions &&
            transactions.map((t: t, index: Key | null | undefined) => (
              <TableRow key={index}>
                <TableCell>{t.text}</TableCell>
                {t.amount > 0 ? (
                  <TableCell className="text-right text-green-500">
                    ${Math.abs(t.amount).toFixed(2)}
                  </TableCell>
                ) : (
                  <TableCell className="text-right text-red-500">
                    ${Math.abs(t.amount).toFixed(2)}
                  </TableCell>
                )}
                <TableCell className="border border-red-500 text-right cursor-pointer ml-14">
                  <BudgetModal id={`${t.id}`} />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </>
  );
};
export default DisplayList;
