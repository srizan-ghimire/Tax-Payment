import React, { useState } from "react";
import { useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "./varients";
import Shape from "./Shape";

const Faq = () => {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqData = [
    {
      question: "How do I create an account on the e-gov portal?",
      answer:
        "To create an account, click on the 'Signup' button on the homepage and fill in your personal details, including your Social Security Number and email address. Follow the instructions sent to your email to complete the registration process.",
    },
    {
      question: "What documents do I need to file my income tax online?",
      answer:
        "You will need your previous year's tax return, and any other relevant financial documents. Make sure you have all necessary information ready before starting the filing process.",
    },
    {
      question: "How can I check the status of my tax return?",
      answer:
        "After filing your return, you can check its status by logging into your account on the e-gov portal and navigating to the 'Tax Return Status' section. You'll be able to see updates on the processing of your return.",
    },
    {
      question:
        "What payment methods are accepted for paying income tax online?",
      answer:
        "The e-gov portal accepts various payment methods, including bank transfers, credit/debit cards, or any other digital wallet including eSewa, Khalti and Ime Pay. You can choose your preferred method during the payment process.",
    },
    {
      question: "What should I do if my payment gets declined?",
      answer:
        "If your payment is declined, check to ensure that all payment details are correct. If the problem persists, contact your bank or the e-gov portal's customer support for assistance.",
    },
    {
      question: "Are there any fees associated with e-filing my taxes?",
      answer:
        "The e-gov portal itself may not charge a fee for e-filing your taxes, but third-party tax preparation software or services might. Check the portal for any applicable fees or charges.",
    },
  ];

  return (
    <div className="relative">
      <Shape />
      <div className="relative max-w-2xl mx-auto p-6 pt-44">
        <motion.h2
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="text-3xl max-sm:text-2xl font-bold text-center mb-8"
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-4"
        >
          {faqData.map((item, index) => (
            <div key={index} className="border rounded-lg p-4 bg-white">
              <button
                className="w-full text-left flex justify-between items-center "
                onClick={() => toggle(index)}
              >
                <span className="font-medium">{item.question}</span>
                <svg
                  className={`w-5 h-5 transform ${
                    open === index ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {open === index && (
                <div className="mt-2 text-gray-700">{item.answer}</div>
              )}
            </div>
          ))}
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="flex justify-center items-center mt-6"
        >
          <Link
            to="/"
            className="group text-primary border border-transparent rounded hover:underline flex gap-2 items-center pb-8"
          >
            <FaArrowLeft className="transform transition-transform duration-300 group-hover:-translate-x-1" />
            Back To Homepage
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Faq;
