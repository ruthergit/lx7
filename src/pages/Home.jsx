'use client';

import Footer from "../components/Footer";
import { motion } from "framer-motion";
import {NavLink} from 'react-router-dom';

const Home = () => {


  return (
    <>
      <div className="h-[100vh] w-full bg-BlackBG flex items-center justify-center relative overflow-hidden">
        <iframe
          src="https://iframe-bg.vercel.app/"
          title="Embedded Content"
          className="min-w-[1920px] min-h-[1080px] "
        />
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full h-full flex flex-row items-center justify-center  absolute px-56 "
        >
          <div className="w-full h-full font-Montserrat flex flex-col justify-center ">
            <div className="w-auto h-auto text-white ">
              <h1 className="font-extrabold text-7xl pb-6">
                ELEVATE <br />
                YOUR SPACE
              </h1>
              <p className="font-medium text-xl pb-8">
                LX7 Lights and Sounds: Expert audio, lighting, and LED walls for
                unforgettable events.
              </p>
              <NavLink to="/Contact" >          
                <button className="bg-Yellow px-7 py-3 rounded-lg font-semibold text-BlackBG shadow-lg text-xl">
                  Book Now
                </button>
              </NavLink>
            </div>
          </div>
          <div className="w-full h-full relative">
            <img
              src="/pics/heading-pic2.png"
              className="absolute pb-10 bottom-0 right-0 w-[510px]"
              alt=""
            />
          </div>
        </motion.div>
      </div>

      <div className="h-[90vh] w-full bg-WhitekBG px-80 py-16 font-Montserrat">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="h-1/6"
        >
          <h1 className="text-center font-bold text-5xl">Our Services</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          class=" grid grid-rows-2 grid-cols-3"
        >
          <div class=" flex items-center justify-center relative">
            <img className="" src="/pics/services1.png" alt="" />
            <p className="absolute z-10 text-white font-semibold text-xl bottom-12 ">
              SOUND SYSTEM
            </p>
          </div>
          <div class=" flex items-center justify-center relative">
            <img src="/pics/services2.png" alt="" />
            <p className="absolute z-10 text-white font-semibold text-xl bottom-12 ">
              LIGHTING EQUIPMENT
            </p>
          </div>
          <div class=" flex items-center justify-center relative">
            <img src="/pics/services3.png" alt="" />
            <p className="absolute z-10 text-white font-semibold text-xl bottom-12 ">
              BAND & STAGE
            </p>
          </div>
          <div class=" flex items-center justify-center relative">
            <img src="/pics/services4.png" alt="" />
            <p className="absolute z-10 text-white font-semibold text-xl bottom-12 ">
              TRUSSES
            </p>
          </div>
          <div class=" flex items-center justify-center relative">
            <img src="/pics/services5.png" alt="" />
            <p className="absolute z-10 text-white font-semibold text-xl bottom-12 ">
              PROJECTOR
            </p>
          </div>
          <div class=" flex items-center justify-center relative">
            <img src="/pics/services6.png" alt="" />
            <p className="absolute z-10 text-white font-semibold text-xl bottom-12 ">
              LED WALLS
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="h-[75vh] w-full bg-BlackBG relative font-Montserrat text-white "
      >
        <img
          className="absolute inset-0 h-full w-full object-cover filter brightness-50 hue-rotate-10"
          src="/pics/bg-image-red.png"
          alt=""
        />
        <div className="h-auto text-center absolute w-full px-80">
          <h3 className="font-bold text-xl pt-11">WHY CHOOSE US</h3>
          <h1 className="font-bold text-5xl pt-5 pb-2">
            Light Up Your Event with Professional Expertise
          </h1>
          <p className="font-medium text-xl pt-5">
            We turn ordinary venues into extraordinary experiences for <br />{" "}
            weddings, corporate events, and concerts.
          </p>
        </div>
        <div className="h-3/5 w-full flex flex-row gap-5 justify-center items-center absolute bottom-0 px-80 pb-11">
          <div className="text-center rounded-lg w-full h-full px-12 pt-10 bg-white/10 backdrop-blur-md shadow-md border border-white/20">
            <img className="m-auto" src="/pics/chooseUs1.png" alt="" />
            <h1 className="mt-6 font-bold text-xl">Unmatched Creativity</h1>
            <p className="mt-6 text-xl">
              We bring your vision to life with innovative designs and
              cutting-edge technology, creating unforgettable experiences for
              any event.
            </p>
          </div>
          <div className="text-center rounded-lg w-full h-full px-12 pt-10 bg-white/10 backdrop-blur-md shadow-md border border-white/20">
            <img className="m-auto" src="/pics/chooseUs2.png" alt="" />
            <h1 className="mt-6 font-bold text-xl">Tailored Solutions</h1>
            <p className="mt-6 text-xl">
              Every event is unique, and so are our solutions. We customize
              every detail to match your needs and goals.
            </p>
          </div>
          <div className="text-center rounded-lg w-full h-full px-12 pt-10 bg-white/10 backdrop-blur-md shadow-md border border-white/20">
            <img className="m-auto" src="/pics/chooseUs3.png" alt="" />
            <h1 className="mt-6 font-bold text-xl">
              Experienced Professionals
            </h1>
            <p className="mt-6 text-xl">
              With years of expertise, our team ensures seamless planning and
              execution, delivering exceptional results every time.
            </p>
          </div>
        </div>
      </motion.div>

      <div className="h-[80vh] w-full  bg-WhiteBG px-56 py-16 font-Montserrat flex justify-center text-BlackBG">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="w-full flex flex-col justify-center items-baseline"
        >
          <h1 className="font-bold text-5xl mb-4">
            What Our <br /> Customers Says
          </h1>
          <p className="text-xl mb-7 ">
            Our clients trust us to deliver unforgettable experiences through
            exceptional sound, lighting, and visuals. Here’s what they have to{" "}
            <br /> say about our services.
          </p>
          <div className="flex gap-2">
            <button className="bg-Yellow px-7 py-3 rounded-lg font-semibold text-BlackBG shadow-lg text-xl">
              Book Now
            </button>
            <a href="https://www.facebook.com/profile.php?id=61552026773558&sk=reviews" 
                target="_blank" 
                rel="noopener noreferrer">
              <button className="bg-transparent border border-BlackBG px-7 py-3 rounded-lg font-semibold text-BlackBG shadow-lg text-xl">
                Learn More
              </button>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="w-full py-24 pl-2 text-xl flex flex-col gap-3"
        >
          <div className="w-full h-1/4  pl-20">
            <div className="flex flex-row items-center justify-center h-full gap-5 bg-Yellow px-4 rounded-lg shadow-lg">
              <img src="/pics/customer1.png" alt="" />
              <p>
                “Thank you po sa napakagandang service po, super bilis po nila
                kausap...”
              </p>
            </div>
          </div>
          <div className="w-full h-1/4  pr-20">
            <div className="flex flex-row items-center justify-center h-full gap-5 bg-Yellow px-4 rounded-lg shadow-lg">
              <img src="/pics/customer2.png" alt="" />
              <p>
                “Sobrang galing ng team, mabilis sumagot, recommendable at very
                professional.”
              </p>
            </div>
          </div>
          <div className="w-full h-1/4  pl-20">
            <div className="flex flex-row items-center justify-center h-full gap-5 bg-Yellow px-4 rounded-lg shadow-lg">
              <img src="/pics/customer3.png" alt="" />
              <p>
                “They paid close attention to every aspect. They address our
                concerns with efficiency.”
              </p>
            </div>
          </div>
          <div className="w-full h-1/4 pr-20">
            <div className="flex flex-row items-center justify-center h-full gap-5 bg-Yellow px-4 rounded-lg shadow-lg">
              <img src="/pics/customer4.png" alt="" />
              <p>
                “Thank you for the nice service you have provided in our event.
                You guys made our big day extra special!”
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer></Footer>
    </>
  );
};

export default Home;
