"use server";

import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

interface TransactionData {
  text: string;
  amount: number;
}

const editTransaction = async (formData: FormData, id: string) => {
  const textValue = formData.get("text");
  const amountValue = formData.get("amount");
  const typeValue = formData.get("type");

  if (!textValue || textValue === "" || !amountValue) {
    return { error: "Text or amountValue is missing" };
  }
  if (!typeValue || typeValue === "") {
    return { error: "Expense or Income has not been identified" };
  }

  const { userId } = auth();

  if (!userId) {
    return { error: "User not found" };
  }

  const adjustAmount = (amountValue: string, typeValue: string) => {
    const amountVal = parseFloat(amountValue.toString());
    if (typeValue === "expense" && amountVal > 0) {
      return `-${amountValue}`;
    } else if (typeValue === "income" && amountVal < 0) {
      return `${Math.abs(amountVal)}`;
    }
    return amountValue;
  };
  const newAmount = adjustAmount(amountValue.toString(), typeValue.toString());
  const text: string = textValue.toString();
  const amount: number = parseFloat(newAmount);

  const transactionData: TransactionData = await prisma.transaction.update({
    where: { id: id },
    data: {
      text: text,
      amount: amount,
    },
  });

  revalidatePath("/");

  return { data: transactionData };
};

export default editTransaction;
