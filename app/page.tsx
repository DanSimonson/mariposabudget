//import { PrismaClient } from "@prisma/client";
//import { PrismaClient } from "@prisma/client";
import prisma from "@/lib/db";
//import Image from "next/image";

export default async function Home() {
  const categories = await prisma.category.findMany();
  console.log("categories--: ", categories);
  return <div>Home</div>;
}
