import {NavLink} from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="h-auto w-full flex justify-between absolute z-10 px-56 font-Montserrat ">
      <div className='w-auto h-auto pt-7 '>
                <img src="/pics/LX7-PNG-Logo.png" alt="" />
            </div>
      <ul className=" h-12 w-auto flex gap-10 ml-7 text-white font-medium text-xl items-center  mt-12 rounded-lg  relative">
          <NavLink to="/" >
            <li>Home</li>
          </NavLink>
          <NavLink to="/Services" >
            <li>Services</li>
            </NavLink>
          <NavLink to="/About" >
            <li>About</li>
            </NavLink>
          {/* <NavLink to="/Contact" >
            <li>Contact</li>
          </NavLink> */}
      </ul>
      <div className='w-auto h-auto pt-11'>
        <button className='bg-Yellow px-7 py-3 rounded-lg font-semibold text-BlackBG shadow-lg text-xl'>
                Book Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
