import prisma from "@/lib/db";
import Guest from "@/components/Guest";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser();
  if (!user) {
    return <Guest />;
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-pretty font-semibold">Budget Tracker is live</h1>
    </main>
  );
}
