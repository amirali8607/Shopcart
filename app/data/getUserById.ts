import { User } from "@prisma/client";
import prisma from "../config/db";

export const getUserById = async (id: User["id"]) => {
  try {
    const user = await prisma.user.findUnique({ where: { id } });
    return user;
  } catch (error) {
    console.log(error);
  }
};
