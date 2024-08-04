"use server";

import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

async function handleTransaction(formData: FormData) {
  //console.log("handle server action");
  console.log("formData.get: ", formData.get("type"));
  console.log("formData.get: ", formData.get("amount"));
  console.log("formData.get: ", formData.get("text"));
}

export default handleTransaction;
