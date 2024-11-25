import { Outlet } from "react-router-dom";
import AdminHeader from "./header";
import AdminSideBar from "./side-bar";
import { useState } from "react";

// Component for rendering the overall layout of the admin panel.
// Includes a sidebar, header, and dynamic content area.
function AdminLayout() {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="flex min-h-screen w-full">
      <AdminSideBar open={openSidebar} setOpen={setOpenSidebar} />
      <div className="flex flex-1 flex-col">
        <AdminHeader setOpen={setOpenSidebar} />
        <main className="flex-1 flex-col flex bg-muted/40 p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

// Exports the AdminLayout component for use as the layout in admin-related routes.
export default AdminLayout;
