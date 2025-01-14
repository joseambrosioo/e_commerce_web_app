import {
  HousePlug,
  LogOut,
  Menu,
  ShoppingBag,
  ShoppingBasket,
  ShoppingCart,
  UserRound,
} from "lucide-react";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { shoppingViewHeaderMenuItems } from "@/config";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { logoutUser } from "@/store/auth-slice";
import UserCartWrapper from "./cart-wrapper";
import { useEffect, useState } from "react";
import { fetchCartItems } from "@/store/shop/cart-slice";
import { Label } from "@radix-ui/react-label";

function MenuItems() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  function handleNavigate(getCurrentMenuItem) {
    sessionStorage.removeItem("filters");
    const currentFilter =
      getCurrentMenuItem.id !== "home" &&
      getCurrentMenuItem.id !== "products" &&
      getCurrentMenuItem.id !== "orders" &&
      getCurrentMenuItem.id !== "search"
        ? {
            category: [getCurrentMenuItem.id],
          }
        : null;

    sessionStorage.setItem("filters", JSON.stringify(currentFilter));

    location.pathname.includes("listing") && currentFilter !== null
      ? setSearchParams(
          new URLSearchParams(`?category=${getCurrentMenuItem.id}`)
        )
      : navigate(getCurrentMenuItem.path);
  }

  return (
    <nav className="flex flex-col mb-3 lg:mb-0 lg:items-center gap-6 lg:flex-row">
      {shoppingViewHeaderMenuItems.map((menuItem) => (
        <Label
          onClick={() => handleNavigate(menuItem)}
          className="text-sm font-medium cursor-pointer"
          key={menuItem.id}
          // to={menuItem.path}
        >
          {menuItem.label}
        </Label>
      ))}
    </nav>
  );
}

function HeaderRightContent() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  // const { user } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.shopCart);
  const [openCartSheet, setOpenCartSheet] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logoutUser());
  }

  useEffect(() => {
    dispatch(fetchCartItems(user?.id));
  }, [dispatch]);

  return (
    // <div className="flex lg:items-center lg:flex-row flex-col gap-4">
    <div className="flex items-center justify-between gap-4">
      {/* <Sheet
        open={openCartSheet}
        onOpenChange={(open) => setOpenCartSheet(open)}
        > */}
      <Sheet open={openCartSheet} onOpenChange={() => setOpenCartSheet(false)}>
        <Button
          onClick={() => setOpenCartSheet(true)}
          variant="outline"
          // size="icon"
          size="sm"
        >
          {/* <ShoppingCart className="w-6 h-6" /> */}
          <ShoppingCart className="w-4 h-6" />
          <span className="sr-only">User cart</span>
        </Button>
        <UserCartWrapper
          setOpenCartSheet={setOpenCartSheet}
          cartItems={
            cartItems && cartItems.items && cartItems.items.length > 0
              ? cartItems.items
              : null
          }
        />
      </Sheet>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          {/* <Avatar className="bg-black">
            <AvatarFallback className="bg-black text-white font-extrabold">
              {user?.userName[0].toUpperCase()}
            </AvatarFallback>
          </Avatar> */}
          <Avatar>
            <AvatarFallback className="text-sm font-semibold">
              {/* {user?.userName[0].toUpperCase()} */}
              Settings
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="right" className="w-56 bg-white text-black">
          <DropdownMenuLabel>Logged in as {user?.userName} </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => navigate("/shop/account")}>
            <UserRound className="mr-2 h-4 w-4" />
            Account
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

function ShoppingHeader() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [openMenu, setOpenMenu] = useState(false); // Add state for menu visibility

  // Function to handle navigation and close the menu
  function handleNavigate(getCurrentMenuItem) {
    sessionStorage.removeItem("filters");
    const currentFilter =
      getCurrentMenuItem.id !== "home" &&
      getCurrentMenuItem.id !== "products" &&
      getCurrentMenuItem.id !== "orders" &&
      getCurrentMenuItem.id !== "search"
        ? {
            category: [getCurrentMenuItem.id],
          }
        : null;

    sessionStorage.setItem("filters", JSON.stringify(currentFilter));

    location.pathname.includes("listing") && currentFilter !== null
      ? setSearchParams(
          new URLSearchParams(`?category=${getCurrentMenuItem.id}`)
        )
      : navigate(getCurrentMenuItem.path);

    setOpenMenu(false); // Close the menu after navigating
  }

  // console.log(user, 'useruseruser');

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      {/* <div className="flex h-16 item-center justify-between px-4 md:px-6"> */}
      <div className="flex items-center justify-between gap-4 h-16">
        <Link to="/shop/home" className="flex items-center gap-2">
          <ShoppingBag className="h-6 w-6 text-black" />
          <span className="text-black">BuyHere</span>
        </Link>
        
        <Sheet side="right">
          <SheetTrigger asChild>
            <Button
              variant="outline"
              // size="icon"
              size="sm"
              className="lg:hidden"
              onClick={() => setOpenMenu(true)}
            >
              <Menu className="h-4 w-6" />
              {/* <Menu className="h-6 w-6" /> */}
              <span className="sr-only">Toggle header menu</span>
            </Button>
          </SheetTrigger>
          {/* <SheetContent side="left" className="w-full max-w-xs"> */}
          <SheetContent
            side="left"
            className="overflow-auto bg-white text-black p-5 shadow-lg max-h-full"
            // className="overflow-auto bg-white text-black p-5 shadow-lg max-h-full lg:hidden sm:block"
            open={openMenu} // Bind open state to the Sheet
            onOpenChange={() => setOpenMenu(!openMenu)} // Toggle menu visibility
          >
            <MenuItems />
            {/* <HeaderRightContent /> */}
          </SheetContent>
        </Sheet>
        <div className="hidden lg:block">
          <MenuItems />
        </div>
        {/* {
                isAuthenticated ? ( */}
        {/* <div className="hidden lg:block">
          <HeaderRightContent />
        </div> */}
        {/* ) : null
         } */}
        <HeaderRightContent /> 
      </div>
    </header>
  );
}

export default ShoppingHeader;
