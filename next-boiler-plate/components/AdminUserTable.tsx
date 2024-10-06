import AdminUser from "./AdminUser";

const AdminUserTable = ({ users }) => {
  return (
    <div>
      <p>All Users</p>
      <div>
        {users.map((user) => (
          <AdminUser key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default AdminUserTable;
