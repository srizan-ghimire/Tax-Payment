import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "./varients";

const Hero = () => {
  return (
    <>
      <section className="bg-white mt-28 max-sm:mt-22">
        <div className="grid max-w-[90%] max-lg:pt-20 max-md:pt-16  py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="mr-auto place-self-center lg:col-span-7 pr-4"
          >
            <h3 className="text-lg font-medium text-gray-600 pb-2 max-sm:text-center">
              Streamline Your Tax Payments
            </h3>
            <h2 className="text-primary max-w-2xl mb-4 text-3xl font-bold tracking-tight leading-none md:text-4xl xl:text-5xl max-md:text-center">
              Experience Effortless Income Tax Payment Online
            </h2>
            <p className="max-w-2xl mb-6 font-light text-gray-900 lg:mb-8 md:text-lg lg:text-xl ">
              Easily manage and pay your income taxes online with our secure and
              user-friendly eGov portal. Experience the convenience of
              streamlined tax payments, ensuring accuracy and efficiency with
              just a few clicks.
            </p>

            <Link
              to="/signup"
              className="group inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded bg-primary hover:bg-secondary border border-transparent max-sm:mb-2"
            >
              Get started
              <svg
                className="w-5 h-5 ml-2 -mr-1 transform transition-transform duration-300 group-hover:translate-x-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-primary border border-primary transition hover:border-primary hover:bg-primary hover:text-white rounded"
            >
              About Us
            </Link>
          </motion.div>
          <div className=" max-lg:hidden max-sm:w-full max-lg:mx-auto max-lg:pb-12 lg:mt-0 lg:col-span-5 lg:flex">
            <div className="w-full ">
              <div className="lg:ml-auto lg:text-right">
                <div className="relative z-10 inline-block pt-11 lg:pt-0">
                  <motion.img
                    variants={fadeIn("down", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.2 }}
                    src="/img/hero.png"
                    alt="hero"
                    className="max-w-full"
                  />
                  {/* <span className="absolute -bottom-8 -left-8 z-[-1]">
                    <motion.svg
                      variants={fadeIn("up", 0.2)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: false, amount: 0.2 }}
                      width="93"
                      height="93"
                      viewBox="0 0 93 93"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2.5" cy="2.5" r="2.5" fill="#3d52a0" />
                      <circle cx="2.5" cy="24.5" r="2.5" fill="#3d52a0" />
                      <circle cx="2.5" cy="46.5" r="2.5" fill="#3d52a0" />
                      <circle cx="2.5" cy="68.5" r="2.5" fill="#3d52a0" />
                      <circle cx="2.5" cy="90.5" r="2.5" fill="#3d52a0" />
                      <circle cx="24.5" cy="2.5" r="2.5" fill="#3d52a0" />
                      <circle cx="24.5" cy="24.5" r="2.5" fill="#3d52a0" />
                      <circle cx="24.5" cy="46.5" r="2.5" fill="#3d52a0" />
                      <circle cx="24.5" cy="68.5" r="2.5" fill="#3d52a0" />
                      <circle cx="24.5" cy="90.5" r="2.5" fill="#3d52a0" />
                      <circle cx="46.5" cy="2.5" r="2.5" fill="#3d52a0" />
                      <circle cx="46.5" cy="24.5" r="2.5" fill="#3d52a0" />
                      <circle cx="46.5" cy="46.5" r="2.5" fill="#3d52a0" />
                      <circle cx="46.5" cy="68.5" r="2.5" fill="#3d52a0" />
                      <circle cx="46.5" cy="90.5" r="2.5" fill="#3d52a0" />
                      <circle cx="68.5" cy="2.5" r="2.5" fill="#3d52a0" />
                      <circle cx="68.5" cy="24.5" r="2.5" fill="#3d52a0" />
                      <circle cx="68.5" cy="46.5" r="2.5" fill="#3d52a0" />
                      <circle cx="68.5" cy="68.5" r="2.5" fill="#3d52a0" />
                      <circle cx="68.5" cy="90.5" r="2.5" fill="#3d52a0" />
                      <circle cx="90.5" cy="2.5" r="2.5" fill="#3d52a0" />
                      <circle cx="90.5" cy="24.5" r="2.5" fill="#3d52a0" />
                      <circle cx="90.5" cy="46.5" r="2.5" fill="#3d52a0" />
                      <circle cx="90.5" cy="68.5" r="2.5" fill="#3d52a0" />
                      <circle cx="90.5" cy="90.5" r="2.5" fill="#3d52a0" />
                    </motion.svg>
                  </span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
