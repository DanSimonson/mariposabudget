import React from "react";
import Guest from "@/components/Guest";
import { currentUser } from "@clerk/nextjs/server";
import Balance from "@/components/Balance";
import TrackIncomeExpense from "@/components/TrackIncomeExpense";
import TransactionList from "@/components/TransactionList";
import { Transaction } from "@/components/Transaction";

export default async function Home() {
  const user = await currentUser();
  if (!user) {
    return <Guest />;
  }

  return (
    <div
      style={{}}
      className="flex flex-col items-center justify-center my-8 mx-auto w-full h-[100vh] md:w-2/3 px-1"
    >
      <Transaction />
      <Balance />
      <TrackIncomeExpense />
      <TransactionList />
    </div>
  );
}
