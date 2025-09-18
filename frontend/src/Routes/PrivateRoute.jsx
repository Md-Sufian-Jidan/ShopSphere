import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    // if (!user) return <div className=" h-16 border-4 border-dashed rounded-full animate-spin dark:border-rose-500 mx-auto max-w-16"></div>
    if (loading) return <div className="h-16 w-16 mx-auto border-4 border-dashed rounded-full animate-spin border-accent"></div>

    if (user) return children;


    return <Navigate state={location?.pathname} to={'/login'} />
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
};
export default PrivateRoute;