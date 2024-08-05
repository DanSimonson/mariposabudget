import React, { useState } from "react";
import Guest from "@/components/Guest";
import { currentUser } from "@clerk/nextjs/server";
// import AddTransaction from "@/components/AddTransaction";
import Balance from "@/components/Balance";
import TrackIncomeExpense from "@/components/TrackIncomeExpense";
// import TransactionList from "@/components/TransactionList";
import { Transaction } from "@/components/Transaction";

export default async function Home() {
  const user = await currentUser();
  if (!user) {
    return <Guest />;
  }

  // <main className="flex min-h-screen flex-col items-center justify-center ">
  //   <h1 className="text-pretty font-semibold">Budget Tracker is live</h1>
  //   <Balance />
  //   <TrackIncomeExpense />
  //   <AddTransaction />
  //   <TransactionList />
  // </main>;

  return (
    <>
      <Transaction />
      <Balance />
      <TrackIncomeExpense />
    </>
  );
}
