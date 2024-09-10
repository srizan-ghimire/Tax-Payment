import React from "react";
import { FaHandsHelping, FaFileInvoiceDollar, FaHome } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "./varients";

const UpdatingSoon = () => {
  const services = [
    {
      title: "Family",
      icon: <FaHome />,
      description:
        "Get comprehensive tax management services tailored for families.",
    },
    {
      title: "Tax Deduction",
      icon: <FaFileInvoiceDollar />,
      description:
        "Manage tax deductions and withholdings accurately and efficiently.",
    },
    {
      title: "Trust",
      icon: <FaHandsHelping />,
      description:
        "Ensure compliance and proper tax filing for trusts and charitable organizations.",
    },
  ];
  return (
    <div className="font-sans leading-normal tracking-normal bg-gray-200 mt-36">
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto text-center w-[90%]">
            <motion.div
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h1 className="mb-6 text-4xl font-bold">
                We're updating these features soon
              </h1>
              <p className="mb-12 text-gray-600">
                Enter your email to be the first to know when we launch.
              </p>
            </motion.div>

            <motion.form
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.2 }}
              className="max-w-md mx-auto"
            >
              <div className="flex items-center">
                <input
                  type="email"
                  className="w-full px-6 py-3 mr-3 bg-gray-100 border border-gray-200 rounded-md outline-none focus:border-primary focus:bg-white"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="px-6 py-3 text-white rounded-md bg-primary hover:bg-secondary focus:outline-none "
                >
                  Subscribe
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-200">
        <div className="container mx-auto px-4 w-[90%]">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h2
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.2 }}
              className="mb-6 text-3xl font-bold"
            >
              What to Expect
            </motion.h2>
            <motion.p
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.2 }}
              className="mb-12 text-gray-600"
            >
              Our upcoming income tax payment features will offer comprehensive
              family tax management, precise handling of tax deductions, and
              compliance services for trusts and charities. Stay tuned for a
              seamless experience.
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-wrap justify-center gap-6 p-6"
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="w-64 p-6 text-center transition-transform duration-300 transform bg-white border rounded-lg shadow-lg border-slate-200 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex justify-center mb-4 text-4xl text-primary">
                  {service.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default UpdatingSoon;
