import Guest from "@/components/Guest";
import { currentUser } from "@clerk/nextjs/server";
import AddTransaction from "@/components/AddTransaction";
import Balance from "@/components/Balance";
import TrackIncomeExpense from "@/components/TrackIncomeExpense";

export default async function Home() {
  const user = await currentUser();
  if (!user) {
    return <Guest />;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center ">
      <h1 className="text-pretty font-semibold">Budget Tracker is live</h1>
      <Balance />
      <TrackIncomeExpense />
      <AddTransaction />
    </main>
  );
}
