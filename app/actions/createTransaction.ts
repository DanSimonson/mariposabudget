"use server";

import { useRef } from "react";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

interface TransactionData {
  text: string;
  amount: number;
}

interface TransactionOutcome {
  data?: TransactionData;
  error?: string;
}

const createTransaction = async (
  formData: FormData
): Promise<TransactionOutcome> => {
  const textValue = formData.get("text");
  const amountValue = formData.get("amount");

  if (!textValue || textValue === "" || !amountValue) {
    return { error: "Text or amount is missing" };
  }
  const text: string = textValue.toString();
  const amount: number = parseFloat(amountValue.toString());

  const { userId } = auth();

  if (!userId) {
    return { error: "User not found" };
  }

  try {
    const transactionData: TransactionData = await prisma.transaction.create({
      data: {
        text,
        amount,
        userId,
      },
    });

    revalidatePath("/");
    return { data: transactionData };
  } catch (error) {
    return { error: "Transaction not added" };
  }
};

export default createTransaction;
