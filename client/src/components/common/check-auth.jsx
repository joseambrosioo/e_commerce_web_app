// import { Navigate, useLocation } from 'react-router-dom';

// function CheckAuth({ isAuthenticated, user }) {
//     const location = useLocation()

//     // if (!isAuthenticated &&
//     //     (!(location.pathname.includes('/login')) ||
//     //         !(location.pathname.includes('/register')))) {

//     //     return <Navigate to='/auth/login' />
//     // }

//     if (!isAuthenticated &&
//         (!location.pathname.includes('/login') &&
//             !location.pathname.includes('/register'))) {

//         return <Navigate to='/auth/login' />
//     }

//     if (isAuthenticated &&
//         ((location.pathname.includes('/login')) ||
//             (location.pathname.includes('/register')))) {
//         if (user?.role === 'admin') {
//             return <Navigate to="/admin/dashboard" />;
//         } else {
//             return <Navigate to="/shop/home" />;
//         }
//     }

//     if (isAuthenticated && user?.role !== 'admin' && location.pathname.includes('admin')) {
//         return <Navigate to="/unauth-page" />;
//     }

//     if (isAuthenticated && user?.role === 'admin' && location.pathname.includes('shop')) {
//         return <Navigate to="/admin/dashboard" />;
//     }
// }

// export default CheckAuth;

import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({ isAuthenticated, user, children }) {
  const location = useLocation();

  // console.log(location.pathname, isAuthenticated);

  if (location.pathname === "/") {
    if (!isAuthenticated) {
      return <Navigate to="/auth/login" />;
    } else {
      if (user?.role === "admin") {
        return <Navigate to="/admin/dashboard" />;
      } else {
        return <Navigate to="/shop/home" />;
      }
    }
  }

  // Redirect to login if not authenticated and accessing protected routes
  if (
    !isAuthenticated &&
    !(
      location.pathname.includes("/login") ||
      location.pathname.includes("/register")
    )
  ) {
    return <Navigate to="/auth/login" />;
  }

  // Redirect authenticated users away from login/register pages
  if (
    isAuthenticated &&
    (location.pathname.includes("/login") ||
      location.pathname.includes("/register"))
  ) {
    if (user?.role === "admin") {
      return <Navigate to="/admin/dashboard" />;
    } else {
      return <Navigate to="/shop/home" />;
    }
  }

  // Prevent non-admins from accessing admin routes
  if (
    isAuthenticated &&
    user?.role !== "admin" &&
    location.pathname.includes("admin")
  ) {
    return <Navigate to="/unauth-page" />;
  }

  // Prevent admins from accessing shop routes
  if (
    isAuthenticated &&
    user?.role === "admin" &&
    location.pathname.includes("shop")
  ) {
    return <Navigate to="/admin/dashboard" />;
  }

  // Render children if no redirect is needed
  return children;
}

export default CheckAuth;
