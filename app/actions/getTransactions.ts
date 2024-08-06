"use server";

import prisma from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

async function getTransactions(transactions: any) {
  const { userId } = auth();

  if (!userId) {
    return { error: "User not found" };
  }

  try {
    const transactions = await prisma.transaction.findMany({
      where: { userId },
      orderBy: {
        createdAt: "desc",
      },
    });

    return { transactions };
  } catch (error) {
    return { error: "Database error" };
  }
}

export default getTransactions;
