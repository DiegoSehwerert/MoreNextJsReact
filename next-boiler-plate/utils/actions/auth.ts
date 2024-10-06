const jwt = require("jsonwebtoken");
import { User } from "@prisma/client";
import { cookies } from "next/headers";

export const AuthUser = (user: User) => {
  const JWT_SECRET = process.env.JWT_SECRET;
  const payload = {
    id: user.id,
    name: user.name,
    mail: user.mail,
    admin: user.admin,
  };

  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });
  const cookie = cookies();

  if (user.admin) {
    cookie.delete("user-token");
    cookie.set("admin-token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 3600 * 1000,
    });
  } else {
    cookie.delete("admin-token");
    cookie.set("user-token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 3600 * 1000,
    });
  }
};
