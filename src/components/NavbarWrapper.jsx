import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const NavbarWrapper = () => {
  return (
    <div className='md:w-[60%] m-auto'>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default NavbarWrapper;
