// import { Outlet } from "react-router-dom";
// import AdminHeader from "./header";
// import AdminSideBar from "./side-bar";
// import { useState } from "react";

// // function AdminLayout() {

// //     const [openSidebar, setOpenSidebar] = useState(false);
// //     return (
// //         <div className="flex min-h-screen w-full">
// //             {/* admin sidebar */}
// //             <AdminSideBar open={openSidebar} setOpen={setOpenSidebar} />
// //             <div className="flex flex-1 flex-col">
// //                 {/* admin header */}
// //                 <AdminHeader setOpen={setOpenSidebar} />
// //                 <main className="flex-1 flex bg-muted/40 p-4 md:p-6">
// //                     <Outlet />
// //                 </main>
// //             </div>
// //         </div >
// //     );
// // }

// // export default AdminLayout;

// function AdminLayout() {
//     const [openSidebar, setOpenSidebar] = useState(false);

//     return (
//         <div className="flex min-h-screen w-full">
//             <AdminSideBar open={openSidebar} setOpen={setOpenSidebar} />
//             <div className="flex flex-1 flex-col">
//                 <AdminHeader setOpen={setOpenSidebar} />
//                 <main className="flex-1 flex bg-muted/40 p-4 md:p-6">
//                     <Outlet />
//                 </main>
//             </div>
//         </div>
//     );
// }



// export default AdminLayout;


import { Outlet } from "react-router-dom";
import { useState } from "react";
import AdminHeader from "./header";
import AdminSideBar from "./side-bar";

function AdminLayout() {
    const [openSidebar, setOpenSidebar] = useState(false);

    return (
        <div className="flex min-h-screen w-full">
            <AdminSideBar open={openSidebar} setOpen={setOpenSidebar} />
            <div className="flex flex-1 flex-col">
                <AdminHeader setOpen={setOpenSidebar} />
                <main className="flex-1 flex bg-muted/40 p-4 md:p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default AdminLayout;
