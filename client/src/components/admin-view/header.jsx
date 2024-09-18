import { Button } from "../ui/button";
import { AlignJustify } from "lucide-react";
import { LogOut } from "lucide-react";

// // function AdminHeader({ setOpen }) {
// //     return (
// //         <header className="flex items-cent justify-between px-4 py-3 bg-backgraound border-b">
// //             <Button onClick={() => setOpen(true)} className="lg:hidden sm:block">
// //                 <AlignJustify />
// //                 <span className="sr-only">Toggle Menu</span>
// //             </Button>
// //             <div className="flex flex-1 justify-end"></div>
// //             <Button className="inline-flex gap-2 items-center rounded-md px-4 py-2 text-sm font-medium shadow">
// //                 <LogOut />
// //                 Logout
// //             </Button>
// //         </header >
// //     )
// // }

// // export default AdminHeader;

// function AdminHeader({ setOpen }) {
//     return (
//         <header className="flex items-center justify-between px-4 py-3 bg-background border-b">
//             <button className="lg:hidden sm:block" onClick={() => setOpen(prev => !prev)}>
//                 <AlignJustify />
//                 <span className="sr-only">Toggle Menu</span>
//             </button>
//         </header>
//     );
// }

// export default AdminHeader;


import { useNavigate } from "react-router-dom";
// import { AlignJustify } from "lucide-react"; // Ensure this import is correct

// function AdminHeader({ setOpen }) {
//     const navigate = useNavigate();

//     const handleLogout = () => {
//         // Implement your logout logic here
//         navigate('/auth/login');
//     };

//     return (
//         <header className="flex items-center justify-between px-4 py-3 bg-backgraound border-b">
//             <button className="lg:hidden sm:block" onClick={() => setOpen(prev => !prev)}>
//                 <AlignJustify />
//                 <span className="sr-only">Toggle Menu</span>
//             </button>
//             <button onClick={handleLogout} className="text-white bg-red-500 hover:bg-red-700 px-4 py-2 rounded">
//                 Logout
//             </button>
//         </header>
//     );

function AdminHeader({ setOpen }) {
    const navigate = useNavigate();


    const handleLogout = () => {
        // Implement your logout logic here
        navigate('/auth/login');
    };

    return (
        <header className="flex items-cent justify-between px-4 py-3 bg-backgraound border-b">
            <Button onClick={() => setOpen(true)} className="lg:hidden sm:block">
                <AlignJustify />
                <span className="sr-only">Toggle Menu</span>
            </Button>
            <div className="flex flex-1 justify-end"></div>
            <Button className="inline-flex gap-2 items-center rounded-md px-4 py-2 text-sm font-medium shadow">
                <LogOut />
                Logout
            </Button>
        </header >
    )
}

export default AdminHeader;
