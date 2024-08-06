"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import deleteTransaction from "@/app/actions/deleteTransaction";
import { toast } from "react-toastify";
import { Key } from "react";
import { Transaction } from "@/types/Transaction";

function TableDisplay(props: { transactions: Transaction; error: string }) {
  const { transactions, error } = props;

  if (error) {
    return <p className="error">{error}</p>;
  }

  const handleDelete = async (transactionId: any) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this transaction"
    );

    if (!confirmed) return;

    const { message, error } = await deleteTransaction(transactionId);

    if (error) {
      toast.error(error);
    }

    toast.success(message);
  };
  return (
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
          transactions.map((t: any, index: Key | null | undefined) => (
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
              <TableCell
                onClick={() => handleDelete(t.id)}
                className="text-right cursor-pointer"
              >
                Delete
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}

export default TableDisplay;

// function tyepof(amount: any): any {
//   throw new Error("Function not implemented.");
// }
