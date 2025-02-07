import React, { useState } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    eventType: "",
    eventLocation: "",
    eventDate: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission (API call or email service)
  };

  return (
    <>
      <div className="h-[100vh] bg-gradient-to-b from-gray-900 to-BlackBG text-white flex justify-center items-center px-56 pt-28">
      
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full bg-gray-800 px-8 py-4 rounded-lg shadow-lg"
        >
          <h1 className="  text-5xl  font-bold pb-6">Contact</h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-xl">
            <div className="flex gap-6">
              <div className="w-full">
                <label className="block text-gray-300 mb-3">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-Yellow focus:outline-none"
                />
              </div>
              <div className="w-full">
              <label className="block text-gray-300 mb-3">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-Yellow focus:outline-none"
              />
            </div>
            </div>
           
            <div className="w-full">
                <label className="block text-gray-300 mb-3">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-Yellow focus:outline-none"
                />
              </div>
            <div>
              <label className="block text-gray-300 mb-3">Event Type</label>
              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                required
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-Yellow focus:outline-none"
              >
                <option value="">Select Event Type</option>
                <option value="wedding">Wedding</option>
                <option value="debut">Debut</option>
                <option value="concert">Concert</option>
                <option value="corporate">Corporate</option>
                <option value="product launch">Product Launch</option>
                <option value="Celebration">Celebration</option>
                <option value="etc">etc...</option>
              </select>
            </div>
            <div className="flex gap-6">
              <div className="w-full">
                <label className="block text-gray-300 mb-3">
                  Event Location
                </label>
                <input
                  type="text"
                  name="eventLocation"
                  value={formData.eventLocation}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-Yellow focus:outline-none"
                />
              </div>
              <div className="w-full relative">
                <label className="block text-gray-300 mb-3">Event Date</label>
                <input
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-Yellow focus:outline-none"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-300 mb-3">
                Additional Notes (Optional)
              </label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-Yellow focus:outline-none resize-none"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              className="w-full bg-Yellow text-BlackBG p-3 mt-2 mb-2 rounded-md font-semibold hover:bg-Yellow"
            >
              Submit
            </motion.button>
          </form>
        </motion.div>
      </div>

      <Footer />
      {/* <footer className="text-center bg-gray-900 text-gray-400 p-4">
        <p>© {new Date().getFullYear()} - LX7 Lights and Sounds</p>
      </footer> */}
    </>
  );
};

export default Contact;
