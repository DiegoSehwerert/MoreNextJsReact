"use server";
import prisma from "../db";
import bcrypt from "bcrypt";

export const createUser = async ({
  name,
  password,
  mail,
  admin,
}: {
  name: string;
  password: string;
  mail: string;
  admin?: boolean;
}) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        name: name,
        password: hashedPassword,
        mail: mail,
        admin: admin,
      },
    });

    return newUser;
  } catch (error) {
    console.error("Error al crear el usuario:", error);
    throw error;
  }
};

// export const updateUser = async ({

// })
