import AdminUserTable from "@/components/AdminUserTable";
import db from "@/utils/db";

const getData = async () => {
  const users = await db.user.findMany({});
  return users;
};

const AdminPage = async () => {
  const users = await getData();

  return (
    <div>
      <div>
        <h2>Users</h2>
        <AdminUserTable users={users} />
      </div>
    </div>
  );
};

export default AdminPage;
