import {
  BadgeCheck,
  ChartNoAxesCombined,
  LayoutDashboard,
  ShoppingBasket,
  ShoppingCart,
} from "lucide-react";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";

// Define the menu items to be displayed in the admin sidebar
const adminSidebarMenuItems = [
  //   {
  //     id: "dashboard",
  //     label: "Dashboard",
  //     path: "/admin/dashboard",
  //     icons: <LayoutDashboard />,
  //   },
  {
    id: "products",
    label: "Products",
    path: "/admin/products",
    icons: <ShoppingBasket />,
  },
  {
    id: "orders",
    label: "Orders",
    path: "/admin/orders",
    icons: <BadgeCheck />,
  },
];

/**
 * Component to render the menu items in the admin sidebar.
 * - Displays the sidebar menu and handles navigation.
 * - Each menu item is clickable and redirects to the specified path.
 */
function MenuItems({ setOpen }) {
  const navigate = useNavigate();

  return (
    <nav className="mt-8 flex-col flex gap-2">
      {adminSidebarMenuItems.map((menuItem) => (
        <div
          key={menuItem.id}
          onClick={() => {
            navigate(menuItem.path);
            setOpen ? setOpen(false) : null;
          }}
          className="flex cursor-pointer text-xl items-center gap-2 rounded-md px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground"
        >
          {menuItem.icons}
          <span>{menuItem.label}</span>
        </div>
      ))}
    </nav>
  );
}

// Component to render the admin sidebar.
// Displays a collapsible sidebar with navigation options for the admin interface.
function AdminSideBar({ open, setOpen }) {
  const navigate = useNavigate();

  return (
    <Fragment>
      <Sheet open={open} onOpenChange={setOpen}>
        {/* <SheetContent side="left" className="w-64"> */}
        {/* <SheetContent side="left" className="w-64 bg-white text-white p-5 shadow-lg h-full"> */}
        <SheetContent
          side="left"
          className="overflow-auto bg-white text-black p-5 shadow-lg max-h-full"
        >
          <div className="flex flex-col h-full">
            <SheetHeader className="border-b">
              <SheetTitle className="flex gap-2 mt-5 mb-5">
                <ShoppingCart size={30} />
                <span>BuyHere (Admin)</span>
              </SheetTitle>
            </SheetHeader>
            <MenuItems setOpen={setOpen} />
          </div>
        </SheetContent>
      </Sheet>
      <aside className="hidden w-64 flex-col border-r bg-background p-6 lg:flex">
        {/* <div onClick={() => navigate('/admin/dashboard')} */}
        <div
          onClick={() => navigate("/admin/products")}
          className="flex cursor-pointer items-center gap-2"
        >
          <ShoppingCart size={30} />
          <h1 className="text-2xl font-extrabold text-black">
            BuyHere (Admin)
          </h1>
        </div>
        <MenuItems />
      </aside>
    </Fragment>
  );
}

// Exports the component for use in admin-related views.
export default AdminSideBar;
