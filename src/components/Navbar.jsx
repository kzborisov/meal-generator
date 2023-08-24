import { Link } from "react-router-dom";
import Logo from "../assets/logo-no-bg.png";
import { AiOutlineLogin } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className='p-8 w-full flex items-center justify-between shadow-gray-100'>
      <Link to='/'>
        <img src={Logo} alt='logo' className='h-[24px] md:h-[48px]' />
      </Link>
      <Link
        to='/sign-in'
        className='flex items-center justify-center gap-2 text-xl text-primary opacity-80'
      >
        Влез <AiOutlineLogin />
      </Link>
    </nav>
  );
};

export default Navbar;
