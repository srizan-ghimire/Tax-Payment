import React from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./varients";
import Shape from "./Shape";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="relative min-h-screen  py-12 px-6 lg:px-20 pt-40">
      <Shape />
      <div className="relative max-w-4xl mx-auto bg-white lg:p-16 p-8 rounded-lg shadow-lg border border-slate-100 lg:px-16">
        <motion.h2
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.2 }}
          className="text-3xl max-sm:text-2xl font-bold text-center text-gray-900 mb-8"
        >
          Privacy Policy
        </motion.h2>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="mb-6">
            <h2 className="text-2xl max-sm:text-xl font-semibold text-gray-800 mb-4">
              Introduction
            </h2>
            <p className="text-gray-700">
              Welcome to iTax Nepal. This privacy policy outlines how we
              collect, use, and protect your information when you use our online
              income tax payment services.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl max-sm:text-xl font-semibold text-gray-800 mb-4">
              Data Collection
            </h2>
            <p className="text-gray-700">
              We collect various types of information to provide and improve our
              services, including:
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>
                Personal identification information (Name, email address, phone
                number, etc.)
              </li>
              <li>
                Financial information (Income details, tax-related documents,
                etc.)
              </li>
              <li>
                Usage data (Log files, cookies, and other tracking technologies)
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl max-sm:text-xl font-semibold text-gray-800 mb-4">
              Data Usage
            </h2>
            <p className="text-gray-700">
              We use the collected data for various purposes, such as:
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>Processing and managing your income tax payments</li>
              <li>Improving our services and user experience</li>
              <li>Communicating with you regarding updates and changes</li>
              <li>Ensuring compliance with legal obligations</li>
            </ul>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl max-sm:text-xl font-semibold text-gray-800 mb-4">
              Data Security
            </h2>
            <p className="text-gray-700">
              We prioritize the security of your data. We implement various
              measures to protect your information from unauthorized access,
              disclosure, or alteration. However, please note that no method of
              transmission over the internet or electronic storage is 100%
              secure.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl max-sm:text-xl font-semibold text-gray-800 mb-4">
              User Rights
            </h2>
            <p className="text-gray-700">
              You have certain rights regarding your personal data, including
              the right to access, correct, or delete your information. If you
              have any questions or concerns about your privacy, please contact
              us.
            </p>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600">Last updated: May 27, 2024</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
