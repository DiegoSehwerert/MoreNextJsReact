"use server";
import prisma from "../db";
import bcrypt from "bcrypt";
import { revalidatePath } from "next/cache";

export const createUser = async (formData: FormData) => {
  try {
    const password = formData.get("password");
    const hashedPassword = await bcrypt.hash(password as string, 10);

    const newUser = await prisma.user.create({
      data: {
        name: formData.get("name") as string,
        mail: formData.get("mail") as string,
        password: hashedPassword,
        admin: formData.get("admin") === "on",
      },
    });

    revalidatePath("/admin");
  } catch (error) {
    console.error("Error al crear el usuario:", error);
    throw error;
  }
};
