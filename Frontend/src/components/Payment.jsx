import React, { useEffect } from "react";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "./varients";
import { useMutation } from "react-query";
import axios from "axios";
const Payment = () => {
  const { mutate } = useMutation({
    mutationFn: async (payData) => {
      const response = await axios.post(
        "https://a.khalti.com/api/v2/epayment/initiate/",
        payData,
        {
          headers: {
            Authorization:
              "key live_secret_key_68791341fdd94846a146f0457ff7b455",
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handlePayment = () => {
    mutate({
      return_url: "http://example.com/",
      website_url: "https://example.com/",
      amount: "1000",
      purchase_order_id: "Order01",
      purchase_order_name: "test",
      customer_info: {
        name: "Ram Bahadur",
        email: "test@khalti.com",
        phone: "9800000001",
      },
    });

    // Logic for Khalti payment integration can go here
  };

  return (
    <motion.div
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.2 }}
      className="max-w-2xl mx-4 mt-40 mb-12 text-gray-900 bg-white rounded-lg shadow-xl sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto"
    >
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.2 }}
        className="h-32 overflow-hidden rounded-t-lg"
      >
        <img
          className="object-cover object-top w-full"
          src="https://i.pinimg.com/736x/3f/11/30/3f11304b704850cb6ad8e27e6a3a56cb.jpg"
          alt="Mountain"
        />
      </motion.div>
      <div className="relative w-32 h-32 mx-auto -mt-16 overflow-hidden border-4 border-white rounded-full">
        <img
          className="object-cover object-center h-32"
          src="./src/assets/user.png"
          alt="Woman looking front"
        />
      </div>
      <div className="mt-2 text-center">
        <h2 className="font-semibold">Samyam Adhikari</h2>
        <p className="text-gray-500">Individual</p>
      </div>
      <div className="max-md:w-[90%] w-[85%] mx-auto pb-8">
        <h2 className="my-6 text-2xl font-semibold text-center text-gray-800">
          Total Tax To be Paid
        </h2>
        <div className="flex items-center justify-between px-4 py-2 mb-8 bg-gray-100 rounded-md shadow-sm">
          <span className="text-lg text-gray-600">Total Tax: </span>
        </div>
        <button
          onClick={handlePayment}
          className="w-full flex items-center justify-center bg-primary  text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300 transform hover:scale-[1.01]"
        >
          <FaMoneyCheckAlt className="mr-2" />
          Pay with Khalti
        </button>
      </div>
    </motion.div>
  );
};

export default Payment;
