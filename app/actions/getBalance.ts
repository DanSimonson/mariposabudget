"use server";
import prisma from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

async function getBalance(): Promise<{
  balance?: number;
  error?: string;
}> {
  const { userId } = auth();

  if (!userId) {
    return { error: "User not found" };
  }

  try {
    const transactions = await prisma.transaction.findMany({
      where: { userId },
    });

    const balance = transactions.reduce(
      (sum, transaction) => sum + transaction.amount,
      0
    );

    return { balance };
  } catch (error) {
    return { error: "Database error" };
  }
}
export default getBalance;
