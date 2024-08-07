import { currentUser } from "@clerk/nextjs/server";
import prisma from "@/lib/db";

export const inspect = async () => {
  const user = await currentUser();

  if (!user) {
    return null;
  }

  const loggedInUser = await prisma.user.findUnique({
    where: {
      clerkUserId: user.id,
    },
  });

  if (loggedInUser) {
    return loggedInUser;
  }

  const newUser = await prisma.user.create({
    data: {
      clerkUserId: user.id,
      imageUrl: user.imageUrl,
      email: user.emailAddresses[0].emailAddress,
    },
  });

  return newUser;
};
