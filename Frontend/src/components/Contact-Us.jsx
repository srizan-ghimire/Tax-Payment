import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "./varients";

const Contact = () => {
  const location = useLocation();

  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = () => {
    const errors = {};
    if (!formValues.name) {
      errors.name = "Full Name is required";
    }
    if (!formValues.phone) {
      errors.phone = "Phone Number is required";
    }
    if (!formValues.email) {
      errors.email = "Email Address is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = "Email Address is invalid";
    }
    if (!formValues.message) {
      errors.message = "Message is required";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted successfully", formValues);
    }
  };

  return (
    <div className="relative flex items-center justify-center p-12 pt-48 max-md:pt-40 max-sm:px-6">
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute top-10 left-0 transform -translate-x-1/2 -translate-y-1/2"
          width="600"
          height="600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="300" cy="300" r="300" fill="#3b82f6" fillOpacity="0.1" />
        </svg>
        <svg
          className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2"
          width="500"
          height="500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="250" cy="250" r="250" fill="#3d52a0" fillOpacity="0.1" />
        </svg>
      </div>
      <div className="relative mx-auto w-full max-w-[550px]">
        <motion.h2
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.1 }}
          className="text-3xl max-sm:text-2xl font-bold text-center mb-10 max-md:mb-8 max-md:mt-2"
        >
          Contact Us
        </motion.h2>
        <motion.form
          onSubmit={handleSubmit}
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.1 }}
          className="shadow border border-stroke p-12 rounded max-sm:px-8 bg-white"
        >
          <div className="mb-5">
            <label className="mb-5 block text-base font-semibold text-primary sm:text-xl">
              Enter Details
            </label>
            <label
              htmlFor="name"
              className="mb-3 block text-base font-medium text-dark"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formValues.name}
              onChange={handleInputChange}
              placeholder="Full Name"
              className={`w-full rounded-md border ${
                errors.name ? "border-red-500" : "border-gray-200"
              } bg-white py-3 px-6 text-base text-gray-700 outline-none focus:border-primary focus:shadow-md`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-2">{errors.name}</p>
            )}
          </div>
          <div className="mb-5">
            <label
              htmlFor="phone"
              className="mb-3 block text-base font-medium text-dark"
            >
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formValues.phone}
              onChange={handleInputChange}
              placeholder="Your phone number"
              className={`w-full rounded-md border ${
                errors.phone ? "border-red-500" : "border-gray-200"
              } bg-white py-3 px-6 text-base text-gray-700 outline-none focus:border-primary focus:shadow-md`}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-2">{errors.phone}</p>
            )}
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="mb-3 block text-base font-medium text-dark"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formValues.email}
              onChange={handleInputChange}
              placeholder="Enter Your email"
              className={`w-full rounded-md border ${
                errors.email ? "border-red-500" : "border-gray-200"
              } bg-white py-3 px-6 text-base text-gray-700 outline-none focus:border-primary focus:shadow-md`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-2">{errors.email}</p>
            )}
          </div>
          <div className="mb-5">
            <label
              htmlFor="message"
              className="mb-3 block text-base font-medium text-dark"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formValues.message}
              onChange={handleInputChange}
              placeholder="Enter Your Message"
              className={`w-full rounded-md border ${
                errors.message ? "border-red-500" : "border-gray-200"
              } bg-white py-3 px-6 text-base text-gray-700 outline-none focus:border-primary focus:shadow-md`}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-2">{errors.message}</p>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="hover:bg-secondary w-full rounded-md bg-primary py-3 px-8 text-center text-base font-semibold text-white outline-none"
            >
              Send Message
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
