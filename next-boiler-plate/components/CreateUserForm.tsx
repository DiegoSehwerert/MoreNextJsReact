import { createUser } from "@/utils/actions/adminUsersHandler";

export default function CreateUserForm() {
  return (
    <div className="">
      <h2 className="">Create a new user</h2>
      <form className="" action={createUser}>
        <div className="">
          <label>User name</label>
          <input className="border border-black" name="name" type="text" />
        </div>
        <div>
          <label>Mail</label>
          <input className="border border-black" name="mail" type="email" />
        </div>
        <div>
          <label>Password</label>
          <input
            className="border border-black"
            name="password"
            type="password"
          />
        </div>
        <div>
          <label>Is Admin?</label>
          <input className="border border-black" name="admin" type="checkbox" />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
