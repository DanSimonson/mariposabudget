"use server";
import prisma from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

async function deleteTransaction(transactionId: any): Promise<{
  message?: string;
  error?: string;
}> {
  const { userId } = auth();

  if (!userId) {
    return { error: "User not found" };
  }

  try {
    await prisma.transaction.delete({
      where: {
        id: transactionId,
        userId: userId,
      },
    });

    revalidatePath("/");

    return { message: "Transaction Deleted" };
  } catch (error) {
    return { error: "Database error" };
  }
}

export default deleteTransaction;
