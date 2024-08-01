"use client";

import { useRef } from "react";
//import addTransaction from "@/app/addTransaction";
import createTransaction from "@/app/actions/createTransaction";
import { toast } from "react-toastify";

const AddTransaction = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const clientAction = async (formData: FormData) => {
    const { data, error } = await createTransaction(formData);

    if (error) {
      toast.error(error);
    } else {
      toast.success("Transaction Created");
      formRef.current?.reset();
    }
  };
  return (
    <>
      <h3 className="pb-2"> Add Transaction</h3>
      <form ref={formRef} action={clientAction}>
        <div className="flex flex-col items-center justify-center pb-2">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            name="text"
            placeholder="Enter text..."
            className="bg-white shadow"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            name="amount"
            id="amount"
            placeholder="Enter amount..."
            step="0.01"
            className="bg-white shadow"
          />
        </div>
        <button className="cursor-pointer bg-indigo-300  text-white border-0 block text-base mt-4 mr-0 mb-8 p-2 w-full">
          Add Transaction
        </button>
      </form>
    </>
  );
};

export default AddTransaction;
