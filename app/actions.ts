"use server";

import { createPrismaClient } from "./lib/prisma";

export async function onCreate() {
  const prisma = createPrismaClient();

  await prisma.user.create({
    data: {
      email: "john@example.com",
      name: "John Doe",
    },
  });
}