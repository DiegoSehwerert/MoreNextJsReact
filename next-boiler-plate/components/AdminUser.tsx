"use client";

const AdminUser = ({ user }) => {
  return (
    <div>
      <p>{user.name}</p>
      <p>{user.mail}</p>
    </div>
  );
};

export default AdminUser;
