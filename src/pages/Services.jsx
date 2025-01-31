import { motion } from "framer-motion"

const Services = () => {
  return (<>
    <div className="h-[100vh] w-full flex flex-col justify-center items-center  bg-BlackBG font-Montserrat px-56 pt-20 tracking-wide"> 
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-full text-white text-center mt-12">
        <h1 className="  text-5xl  font-bold pb-4">Services</h1>
        <p className='font-medium text-xl pb-8'>
        LX7 Lights and Sounds provides premium audio, visual, and lighting <br /> services for all events, ensuring a seamless experience.
              </p>
      </motion.div>
        <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        class="grid grid-rows-2 grid-cols-3 ">
          <div class=" flex items-center justify-center relative">
            <img className='' src="/pics-services/wedding1.png" alt="" />
            <p className='absolute z-10 text-white font-semibold text-xl bottom-12 '>WEDDINGS</p>
          </div>
          <div class=" flex items-center justify-center relative">
            <img src="/pics-services/corporate1.png" alt="" />
            <p className='absolute z-10 text-white font-semibold text-xl bottom-12 '>CORPORATE</p>
            </div>
          <div class=" flex items-center justify-center relative">
            <img src="/pics-services/concert1.png" alt="" />
            <p className='absolute z-10 text-white font-semibold text-xl bottom-12 '>CONCERT</p>
            </div>
          <div class=" flex items-center justify-center relative">
            <img src="/pics-services/celeb1.png" alt="" />
            <p className='absolute z-10 text-white font-semibold text-xl bottom-12 '>CELEBRATIONS</p>
          </div>
          <div class=" flex items-center justify-center relative">
            <img src="/pics-services/church1.png" alt="" />
            <p className='absolute z-10 text-white font-semibold text-xl bottom-12 '>CHURCH</p>
          </div>
          <div class=" flex items-center justify-center relative">
              <img src="/pics-services/product1.png" alt="" />
              <p className='absolute z-10 text-white font-semibold text-xl bottom-12 '>PRODUCT LAUNCH</p>
          </div>
      </motion.div>
    </div>
    <footer className="footer-center bg-BlackBG text-white p-4 font-Montserrat ">
      <aside>
        <p>Copyright © {new Date().getFullYear()} - Lx7 Lights and Sounds</p>
      </aside>
    </footer>
    </>)
}

export default Services
