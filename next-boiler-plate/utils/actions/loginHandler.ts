"use server";
import prisma from "../db";
import bcrypt from "bcrypt";
import { AuthUser } from "./auth";
import { redirect } from "next/navigation";

export const loginUser = async (formData: FormData) => {
  let user = null;

  try {
    user = await prisma.user.findUnique({
      where: {
        mail: formData.get("mail") as string,
      },
    });
    if (!user) {
      throw new Error("User or password not correct");
    }

    const password = formData.get("password") as string;
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      throw new Error("User or password not correct");
    }

    AuthUser(user);
  } catch (error) {
    console.error("Error al loguear el usuario:", error);
    throw error;
  }
  if (user.admin) {
    return redirect("/admin");
  }
  return redirect("/");
};
