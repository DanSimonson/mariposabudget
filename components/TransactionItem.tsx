"use client";
import { Transaction } from "@/types/Transaction";
import { addCommas } from "@/lib/extras";
import { toast } from "react-toastify";
import deleteTransaction from "@/app/actions/deleteTransaction";

const TransactionItem = ({ transaction }: { transaction: Transaction }) => {
  const x = -100;
  const y = -50;
  const styles = { transform: `translate(${x}px, ${y}px)` };

  const sign = transaction.amount < 0 ? " - " : " + ";

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
    <li
      className={
        transaction.amount < 0
          ? "border-r-4 border-red-500 border-solid shadow text-gray-950 w-full bg-white flex items-center justify-center"
          : "border-r-4 border-green-500 border-solid bg-white shadow text-gray-950 flex items-center justify-center "
      }
    >
      {transaction.text}
      <span>
        {sign}
        {addCommas(Math.abs(transaction.amount))}
      </span>
      <button
        className="cursor-pointer text-black text-xl "
        onClick={() => handleDelete(transaction.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default TransactionItem;
