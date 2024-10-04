"use client";

import { loginUser } from "@/utils/actions/loginHandler";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const mail = e.target.mail.value;
    const password = e.target.password.value;
    try {
      const userValues = await loginUser({ mail, password });
      if (userValues.admin) {
        router.push("/admin");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="mail">Mail</label>
          <input type="email" name="mail" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
