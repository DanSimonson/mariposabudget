"use client";
//import { useRef } from "react";
//import addTransaction from "@/app/addTransaction";
import { useState, useRef, JSX, SVGProps } from "react";
import createTransaction from "@/app/actions/createTransaction";
import handleTransaction from "@/app/actions/handleTransaction";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Transaction = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [newTransaction, setNewTransaction] = useState({
    name: "",
    amount: 0,
    type: "expense",
  });

  const [transactions, setTransactions] = useState([
    { id: 1, name: "Rent", amount: -1200, type: "expense" },
    { id: 2, name: "Salary", amount: 3500, type: "income" },
    { id: 3, name: "Groceries", amount: -250, type: "expense" },
    { id: 4, name: "Utilities", amount: -150, type: "expense" },
  ]);

  //   const handleInputChange = (e: any) => {
  //     setNewTransaction({ ...newTransaction, [e.target.name]: e.target.value });
  //   };

  //   const handleAddTransaction = () => {
  //     if (newTransaction.name.trim() !== "" && newTransaction.amount !== 0) {
  //       setTransactions([
  //         ...transactions,
  //         { ...newTransaction, id: transactions.length + 1 },
  //       ]);
  //       setNewTransaction({ name: "", amount: 0, type: "expense" });
  //     }
  //   };
  const clientAction = async (formData: FormData) => {
    const formRef = useRef<HTMLFormElement>(null);
    //console.log("formData: ", formData);
    //const { data, error } = await createTransaction(formData);
    // if (error) {
    //   toast.error(error);
    // } else {
    //   toast.success("Transaction Created");
    //   formRef.current?.reset();
    // }
  };

  return (
    <>
      <div className="bg-background rounded-lg border p-6 w-full max-w-md flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-sm mr-2 md:text-2xl md:mr-0 font-bold">
            Budget App
          </h1>
          <Button variant="outline" size="icon">
            <SettingsIcon className="w-5 h-5" />
          </Button>
        </div>
      </div>
      <div className="border border-cyan-500 grid gap-4 w-full">
        <div className=" grid gap-2">
          <Label className="text-center py-4" htmlFor="transaction">
            Add Transaction
          </Label>
          <form
            className="border border-green-500 "
            ref={formRef}
            action={handleTransaction}
          >
            <div className="flex flex-col md:flex-row md:justify-around items-center gap-2">
              <input
                type="text"
                id="text"
                name="text"
                placeholder="Enter text..."
                className="border border-black rounded-md py-2"
              />
              <input
                type="number"
                name="amount"
                id="amount"
                placeholder="Enter amount..."
                step="0.01"
                className="border border-black rounded-md py-2"
              />
              <select
                id="type"
                name="type"
                className="border border-black rounded-md py-3 px-2"
                required
              >
                <option value="expense">Expense</option>
                <option value="income">Income</option>
              </select>
              <button
                className="cursor-pointer bg-black text-white 
              rounded block text-base mt-4 mr-0 mb-3 py-3 w-1/3 max-w-80"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

function SettingsIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}