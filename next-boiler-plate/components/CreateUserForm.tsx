"use client";

import { useState } from "react";
import { createUser } from "@/utils/actions/adminUsersHandler";

export default function CreateUserForm() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [admin, setAdmin] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createUser({ name, password, mail, admin });
  };

  return (
    <div>
      <h2>Create a new user</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">User name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="mail">Mail</label>
          <input
            type="email"
            name="mail"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="admin">Is Admin?</label>
          <input
            type="checkbox"
            name="admin"
            checked={admin}
            onChange={(e) => setAdmin(e.target.checked)}
          />
        </div>
        <button type="submit">Create user</button>
      </form>
    </div>
  );
}
