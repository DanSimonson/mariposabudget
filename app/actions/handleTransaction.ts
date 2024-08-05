"use server";

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

const handleTransaction = async (
  formData: FormData
): Promise<TransactionOutcome> => {
  const textValue = formData.get("text");
  const amountValue = formData.get("amount");
  const typeValue = formData.get("type");
  let newAmount = "";

  if (!textValue || textValue === "" || !amountValue) {
    return { error: "Text or amount is missing" };
  }
  if (!typeValue || typeValue === "") {
    return { error: "Expense or Income has not been identified" };
  }

  const { userId } = auth();

  if (!userId) {
    return { error: "User not found" };
  }

  if (typeValue === "income") {
    newAmount = `${amountValue}`;
  } else if (typeValue === "expense") {
    newAmount = `-${amountValue}`;
  }
  const text: string = textValue.toString();
  const amount: number = parseFloat(newAmount.toString());

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

export default handleTransaction;
