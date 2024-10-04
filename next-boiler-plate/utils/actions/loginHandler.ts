"use server";
import prisma from "../db";
import bcrypt from "bcrypt";

export const loginUser = async ({
  mail,
  password,
}: {
  mail: string;
  password: string;
}) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        mail: mail,
      },
    });

    if (!user) {
      throw new Error("User or password not correct");
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      throw new Error("User or password not correctO");
    }

    console.log("User logged in:", user);

    return user;
  } catch (error) {
    console.error("Error al loguear el usuario:", error);
    throw error;
  }
};
