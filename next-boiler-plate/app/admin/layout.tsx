import CreateUserForm from "@/components/CreateUserForm";

const AdminPanelLayout = ({ children }) => {
  return (
    <div className="min-w-[85vw] max-w-[85vw]">
      <h1 className="">Admin Panel</h1>
      <div className="grid grid-cols-2 ">
        <div>
          <CreateUserForm />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default AdminPanelLayout;
