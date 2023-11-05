/* eslint-disable react/prop-types */

import { Navigate } from "react-router-dom";
import useCustomeHook from "../Hooks/useCustomeHook";
import { motion } from "framer-motion";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useCustomeHook();
  if (loading) {

    

    return (
      <div className="flex justify-center min-h-screen items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className=" loading loading-spinner loading-lg"></span>
        </motion.div>
        
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to={"/logins"}></Navigate>;
};

export default PrivateRoute;
