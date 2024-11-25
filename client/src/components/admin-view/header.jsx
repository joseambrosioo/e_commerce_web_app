import { logoutUser } from "@/store/auth-slice";
import { Button } from "../ui/button";
import { AlignJustify } from "lucide-react";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

// AdminHeader component serves as the header for the admin dashboard.
// It provides functionality for toggling the sidebar menu and logging out the user.
function AdminHeader({ setOpen }) {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  // Function to handle the logout process.
  // Dispatches the `logoutUser` action to clear user session data in the Redux store.
  function handleLogout() {
    dispatch(logoutUser());
  }

  // Returns the JSX structure for the header, including the toggle menu button and logout button.
  return (
    <header className="flex items-cent justify-between px-4 py-3 bg-backgraound border-b">
      <Button onClick={() => setOpen(true)} className="lg:hidden sm:block">
        <AlignJustify />
        <span className="sr-only">Toggle Menu</span>
      </Button>
      <div className="flex flex-1 justify-end"></div>
      <Button
        onClick={handleLogout}
        className="inline-flex gap-2 items-center rounded-md px-4 py-2 text-sm font-medium shadow bg-blue-950 text-white font-semibold"
      >
        {/* <Button className="inline-flex gap-2 items-center rounded-md px-4 py-2 text-sm font-medium shadow"> */}
        <LogOut />
        Logout
      </Button>
    </header>
  );
}

// Exporting the AdminHeader component to make it available for import in other files.
export default AdminHeader;
