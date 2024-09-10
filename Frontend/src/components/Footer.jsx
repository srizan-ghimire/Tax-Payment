import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn, MdMail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-primary text-white pb-5 pt-14 mt-[-0.1rem] relative">
        <div className=" mx-auto max-w-[90%]">
          <div className="grid max-sm:grid-cols-1 max-md:grid-cols-2 grid-cols-4 gap-8 mb-8">
            <div>
              <Link to="/" className="inline-block">
                <div className="flex items-center gap-2">
                  <img src="/img/nepgov.png" alt="Logo" className="h-16" />
                  <div className="max-sm:hidden">
                    <h2 className="text-2xl font-medium ">iTax Nepal</h2>
                    <p className="text-sm">Digital Tax Payment Gateway</p>
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Resources</h3>
              <ul>
                <li className="pb-2">
                  <Link to="/signup">Registration Form</Link>
                </li>
                <li className="pb-2">
                  <Link to="/tax-calculator">Tax Calculator</Link>
                </li>
                <li className="pb-2">
                  <Link to="/blog">Blog</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
              <ul>
                <li className="pb-2">
                  <Link to="/faq">FAQ</Link>
                </li>

                <li className="pb-2">
                  <Link to="/contact-us">Contact Us</Link>
                </li>

                <li className="pb-2">
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Contacts</h3>
              <div className="flex items-center gap-2 pb-2">
                <FaPhoneAlt />
                <p>Phone: (123) 456-7890</p>
              </div>
              <div className="flex items-center gap-2 pb-2">
                <MdMail className="text-lg" />
                <p>Email: support@itaxnpl.com</p>
              </div>
              <div className="flex items-center gap-2 pb-2">
                <MdLocationOn className="text-xl" />
                <p>Address: Dudhpati, Bhaktapur</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-400 pt-4 text-center">
            <p>© 2024 iTax Nepal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
