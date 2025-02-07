import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const About = () => {
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust sensitivity
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <>
      <div className="h-[90vh] gap-10 w-full flex flex-row justify-center items-center bg-BlackBG font-Montserrat px-56 pt-20 tracking-wide">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full text-white mt-12"
        >
          <h1 className="text-5xl font-bold pb-4">About Us</h1>
          <p className="font-medium text-xl pb-8">
            At LX7 Lights and Sounds, we specialize in delivering high-quality
            audio and lighting solutions for events of all sizes. Whether it’s a
            wedding, corporate event, concert, or private party, our team
            ensures a seamless and immersive experience with state-of-the-art
            equipment and expert service.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-[38vw] h-[80%] mt-12 flex "
        >
          <div
            ref={carouselRef}
            className="carousel carousel-center rounded-lg overflow-x-scroll flex gap-2 scroll-smooth select-none cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseUp}
            onMouseUp={handleMouseUp}
          >
            {[
              "/about/mixer.jpg",
              "/about/bandSetup.jpg",
              "/about/lx2.jpg",
            ].map((src, index) => (
              <div key={index} className="carousel-item w-[500px] h-full flex-shrink-0 ">
                <img
                  draggable="false"
                  src={src}
                  alt="Pizza"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="h-[90vh] gap-10 w-full flex flex-row justify-center items-center bg-WhiteBG font-Montserrat px-56 tracking-wide">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-[90%] h-[80%] flex justify-center "
        >
          <img className="w-full h-full object-cover shadow-2xl rounded-lg" src="/about/setup.jpg" alt="" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full h-full flex flex-col justify-center text-BlackBG"
        >
          <h1 className="text-5xl font-bold pb-4">Why Choose Us?</h1>
          <p className="font-medium text-xl pb-8">
            At LX7 Lights and Sounds, we specialize in delivering high-quality
            With years of experience in the industry, we take pride in providing top-tier sound clarity, 
            dynamic lighting designs, and professional execution. Our commitment to excellence and 
            attention to detail make us the trusted choice for event organizers looking to create 
            unforgettable moments. Let’s make your event extraordinary—contact us today!
          </p>
          <div className='w-auto h-auto pt-1'>
            <button className='bg-Yellow px-7 py-3 rounded-lg font-semibold text-BlackBG shadow-lg text-xl'>
                    Book Now
            </button>
      </div>
        </motion.div>
      </div>

      <footer className="footer-center bg-BlackBG text-white p-4 font-Montserrat">
        <aside>
          <p>Copyright © {new Date().getFullYear()} - Lx7 Lights and Sounds</p>
        </aside>
      </footer>
    </>
  );
};

export default About;
