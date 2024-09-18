import { BadgeCheck, ChartNoAxesCombined, LayoutDashboard, ShoppingBasket } from "lucide-react";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";

const adminSidebarMenuItems = [
    {
        id: 'dashboard',
        label: 'Dashboard',
        path: '/admin/dashboard',
        icons: <LayoutDashboard />
    },
    {
        id: 'products',
        label: 'Products',
        path: '/admin/products',
        icons: <ShoppingBasket />
    },
    {
        id: 'orders',
        label: 'Orders',
        path: '/admin/orders',
        icons: <BadgeCheck />
    }
]

function MenuItems({ setOpen }) {
    const navigate = useNavigate();

    return (
        <nav className="mt-8 flex-col flex gap-2">
            {
                adminSidebarMenuItems.map(menuItem => (
                    <div
                        key={menuItem.id}
                        onClick={() => {
                            navigate(menuItem.path);
                            setOpen ? setOpen(false) : null
                        }}
                        className="flex cursor-pointer text-xl items-center gap-2 rounded-md px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground">
                        {menuItem.icons}
                        <span>{menuItem.label}</span>
                    </div>
                ))
            }
        </nav >
    )
}

function AdminSideBar({ open, setOpen }) {
    const navigate = useNavigate();

    return (
        <Fragment>
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetContent side="left" claasName="w-64">
                    <div className="flex flex-col h-full">
                        <SheetHeader className="border-b">
                            <SheetTitle className="flex gap-2 mt-5 mb-5">
                                <ChartNoAxesCombined size={30} />
                                <span>Admin Panel</span>
                            </SheetTitle>
                        </SheetHeader>
                        <MenuItems setOpen={setOpen} />
                    </div>
                </SheetContent>
            </Sheet>
            <aside className="hidden w-64 flex-col border-r bg-background p-6 lg:flex">
                <div onClick={() => navigate('/admin/dashboard')}
                    className="flex cursor-pointer items-center gap-2">
                    <ChartNoAxesCombined size={30} />
                    <h1 className="text-2xl font-extrabold">Admin Panel</h1>
                </div>
                <MenuItems />
            </aside>
        </Fragment>
    );
}

export default AdminSideBar;

// function AdminSideBar({ open, setOpen }) {
//     const navigate = useNavigate();

//     return (
//         <Fragment>
//             <aside className={`fixed top-0 left-0 z-40 h-full w-64 bg-background border-r p-6 transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
//                 <div className="flex justify-between items-center mb-4">
//                     <div onClick={() => navigate('/admin/dashboard')} className="flex items-center gap-2 cursor-pointer">
//                         <ChartNoAxesCombined />
//                         <h1 className="text-xl font-extrabold">Admin Panel</h1>
//                     </div>
//                     <button onClick={() => setOpen(false)} className="text-lg">
//                         &times; {/* or use an icon for close */}
//                     </button>
//                 </div>
//                 <MenuItems />
//             </aside>
//         </Fragment>
//     );
// }

// export default AdminSideBar;


// import { BadgeCheck, ChartNoAxesCombined, LayoutDashboard, ShoppingBasket } from "lucide-react";
// import { Fragment } from "react";
// import { useNavigate } from "react-router-dom";

// const adminSidebarMenuItems = [
//     { id: 'dashboard', label: 'Dashboard', path: '/admin/dashboard', icons: <LayoutDashboard /> },
//     { id: 'products', label: 'Products', path: '/admin/products', icons: <ShoppingBasket /> },
//     { id: 'orders', label: 'Orders', path: '/admin/orders', icons: <BadgeCheck /> }
// ]

// function MenuItems() {
//     const navigate = useNavigate();

//     return (
//         <nav className="mt-8 flex-col flex gap-2">
//             {adminSidebarMenuItems.map(menuItem => (
//                 <div key={menuItem.id}
//                     onClick={() => navigate(menuItem.path)}
//                     className="flex text-xl items-center gap-2 rounded-md px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground cursor-pointer">
//                     {menuItem.icons}
//                     <span>{menuItem.label}</span>
//                 </div>
//             ))}
//         </nav>
//     );
// }

// function AdminSideBar({ open, setOpen }) {
//     const navigate = useNavigate();

//     return (
//         <Fragment>
//             <aside className={`fixed top-0 left-0 z-40 h-full w-64 bg-background border-r p-6 transition-transform duration-300 lg:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
//                 <div className="flex justify-between items-center mb-4">
//                     <div onClick={() => navigate('/admin/dashboard')} className="flex items-center gap-2 cursor-pointer">
//                         <ChartNoAxesCombined />
//                         <h1 className="text-xl font-extrabold">Admin Panel</h1>
//                     </div>
//                     <button onClick={() => setOpen(false)} className="text-lg lg:hidden">
//                         &times;
//                     </button>
//                 </div>
//                 <MenuItems />
//             </aside>
//         </Fragment>
//     );
// }

// export default AdminSideBar;
