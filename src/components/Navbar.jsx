import {NavLink} from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="h-auto w-full flex absolute z-10 px-56 font-Montserrat">
      <div className='w-auto h-auto pt-7 '>
                <img src="/pics/LX7-PNG-Logo.png" alt="" />
            </div>
      <ul className=" h-12 w-96 flex gap-12 text-white font-medium text-xl items-center ml-52 mt-12 rounded-lg  relative">
          <NavLink to="/" >
            <li>Home</li>
          </NavLink>
          <NavLink to="/Services" >
            <li>Services</li>
            </NavLink>
          <NavLink to="/About" >
            <li>About</li>
            </NavLink>
          <NavLink to="/Contact" >
            <li>Contact</li>
          </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
