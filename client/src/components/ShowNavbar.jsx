import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";

const ShowNavbar = () => {
  const location = useLocation();
  const isAuthPage = (location.pathname === "/signup" || location.pathname === "/signin");
  return !isAuthPage && <Navbar />;
};

export default ShowNavbar;
