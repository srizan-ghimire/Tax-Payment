import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./varients";

const ErrorPage = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className="flex items-center justify-center min-h-screen  p-5 pt-20 max-sm:pt-32">
      <motion.div
        variants={fadeIn("down", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.2 }}
        className=" p-8 md:p-16"
      >
        <div className="flex items-center justify-center">
          <img src="/img/erro.gif" alt="" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 text-center">
          404
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 text-center">
          Go back! The page you're looking for doesn't exist.
        </p>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="flex justify-center items-center"
        >
          <Link
            to="/"
            className="group text-primary text-lg border border-transparent bg-white  rounded hover:underline flex gap-2 items-center max-sm:text-base"
          >
            <FaArrowLeft className="transform transition-transform duration-300 group-hover:-translate-x-1" />
            Back To Homepage
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ErrorPage;
