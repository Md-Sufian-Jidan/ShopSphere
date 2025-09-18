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
import PrivateRoute from "./PrivateRoute";
import AdminOrders from "../Pages/Dashboard/AdminOrders/AdminOrders";

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
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
            {
                path: '/dashboard/cart',
                element: <Cart />
            },
            {
                path: '/dashboard/profile',
                element: <PrivateRoute><UserProfile /></PrivateRoute>
            },
            {
                path: '/dashboard/customer-dashboard',
                element: <PrivateRoute><CustomerDashboard /></PrivateRoute>
            },
            {
                path: '/dashboard/customer-order',
                element: <PrivateRoute><CustomerOrder /></PrivateRoute>
            },
            // admin routes start here
            {
                path: '/dashboard/admin',
                element: <PrivateRoute><AdminDashboard /></PrivateRoute>
            },
            {
                path: '/dashboard/admin-orders',
                element: <PrivateRoute><AdminOrders /></PrivateRoute>
            },
            {
                path: '/dashboard/admin-products',
                element: <PrivateRoute><AdminProducts /></PrivateRoute>
            },
            {
                path: '/dashboard/manage-customers',
                element: <PrivateRoute><AdminCustomers /></PrivateRoute>
            },
            {
                path: '/dashboard/admin-settings',
                element: <PrivateRoute><AdminSettings /></PrivateRoute>
            },
        ]
    },
]);

export default router;