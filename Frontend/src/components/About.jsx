import React from "react";
import Shape from "./Shape";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./varients";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen  py-12 px-6 lg:px-20 pt-40">
      <Shape />
      <div className="relative max-w-4xl mx-auto bg-white  rounded-lg shadow-lg lg:p-16  p-8 border border-slate-100">
        <motion.h2
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.2 }}
          className="text-3xl max-sm:text-2xl font-bold text-center text-gray-900 mb-8"
        >
          About iTax Nepal
        </motion.h2>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="mb-6">
            <h2 className="text-2xl max-sm:text-xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700">
              iTax Nepal aims to simplify the process of income tax payment and
              management for citizens of Nepal. Our goal is to provide an
              easy-to-use, secure, and efficient online platform for managing
              all aspects of income tax.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl max-sm:text-xl font-semibold text-gray-800 mb-4">
              Key Features
            </h2>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>Online income tax payment</li>
              <li>Automated tax calculations</li>
              <li>Secure data management</li>
              <li>Real-time notifications and updates</li>
              <li>Comprehensive support and resources</li>
            </ul>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl max-sm:text-xl font-semibold text-gray-800 mb-4">
              Why Choose iTax Nepal?
            </h2>
            <p className="text-gray-700">
              iTax Nepal is dedicated to making tax management as
              straightforward as possible. We offer a seamless experience with
              intuitive navigation, robust security measures, and responsive
              customer support. Our platform is designed to save you time and
              reduce the complexity associated with tax filing.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl max-sm:text-xl font-semibold text-gray-800 mb-4">
              Our Team
            </h2>
            <p className="text-gray-700">
              Our team consists of experienced professionals in finance,
              technology, and customer service. We are committed to providing
              top-notch service and continuously improving our platform to meet
              the needs of our users.
            </p>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600">
              Thank you for choosing iTax Nepal. We look forward to serving you.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
