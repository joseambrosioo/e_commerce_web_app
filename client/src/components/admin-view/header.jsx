import { logoutUser } from "@/store/auth-slice";
import { Button } from "../ui/button";
import { AlignJustify } from "lucide-react";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function AdminHeader({ setOpen }) {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logoutUser());
  }

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

export default AdminHeader;
