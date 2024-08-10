import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import getTransactions from "@/app/actions/getTransactions";
import { Key } from "react";
import { BudgetModal } from "./Modal";

type t = {
  id: string;
  amount: number;
  text: string;
};

async function TableDisplay() {
  const { transactions, error } = await getTransactions();

  if (error) {
    return <p className="error">{error}</p>;
  }

  return (
    <Table>
      <TableHeader>
        <TableRow className="bg-secondary">
          <TableHead>Description</TableHead>
          <TableHead className="text-right">Amount</TableHead>
          <TableHead className="text-right pr-7">Delete</TableHead>
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
              <TableCell className="text-right cursor-pointer">
                <div className="w-full flex justify-end m-0 p-0">
                  <BudgetModal {...t} />
                </div>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}

export default TableDisplay;
