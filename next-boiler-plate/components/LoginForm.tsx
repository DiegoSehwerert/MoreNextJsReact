"use client";

import { loginUser } from "@/utils/actions/loginHandler";
import { redirect } from "next/navigation";

export default function LoginForm() {
  // si loginUser es exitoso, redirige a la página principal

  return (
    <div>
      <h2>Login</h2>
      <form action={loginUser}>
        <div>
          <label htmlFor="mail">Mail</label>
          <input className="border border-black" type="email" name="mail" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            className="border border-black"
            type="password"
            name="password"
          />
        </div>
        <button className="border border-black" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
