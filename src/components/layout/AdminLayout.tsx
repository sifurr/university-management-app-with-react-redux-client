import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div>
      <h2>This is admin navbar</h2>
      <Outlet />
    </div>
  );
}

export default AdminLayout;
