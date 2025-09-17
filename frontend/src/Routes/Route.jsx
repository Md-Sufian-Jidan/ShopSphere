import { createBrowserRouter, } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/About/About/About";
import Contact from "../Pages/Contact/Contact/Contact";
import Products from "../Pages/Products/Products/Products";
import Dashboard from "../Layout/Dashboard";
import UserProfile from "../Pages/Dashboard/UserProfile/UserProfile";
import CustomerDashboard from "../Pages/Dashboard/CustomerDashboard/CustomerDashboard";
import CustomerOrder from "../Pages/Dashboard/CustomerOrder/CustomerOrder";
import AdminDashboard from "../Pages/Dashboard/AdminDashboard/AdminDashboard";
import AdminProducts from "../Pages/Dashboard/AdminProducts/AdminProducts";
import AdminCustomers from "../Pages/Dashboard/AdminCustomers/AdminCustomers";
import AdminSettings from "../Pages/Dashboard/AdminSettings/AdminSettings";
import Cart from "../Pages/Dashboard/Cart/Cart";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/products',
                element: <Products />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
        ]
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
            {
                path: '/dashboard/cart',
                element: <Cart />
            },
            {
                path: '/dashboard/profile',
                element: <UserProfile />
            },
            {
                path: '/dashboard/customer-dashboard',
                element: <CustomerDashboard />
            },
            {
                path: '/dashboard/customer-order',
                element: <CustomerOrder />
            },
            {
                path: '/dashboard/admin',
                element: <AdminDashboard />
            },
            {
                path: '/dashboard/admin-orders',
                element: <AdminDashboard />
            },
            {
                path: '/dashboard/admin-products',
                element: <AdminProducts />
            },
            {
                path: '/dashboard/admin-customers',
                element: <AdminCustomers />
            },
            {
                path: '/dashboard/admin-settings',
                element: <AdminSettings />
            },
        ]
    },
]);

export default router;