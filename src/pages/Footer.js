import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-6">
      <div className=" mx-auto px-8 md:ml-28">
        <div className="flex flex-wrap justify-center align-middle">
          <div className="w-full  sm:w-1/3 mb-6 sm:mb-0">
            <h2 className="text-xl font-bold mb-2 border-b-4 w-60 border-blue-600">
              University Name
            </h2>
            <p className="mb-4">
              American Interantional University-Bangladesh
              <br />
              408/1 (Old KA 66/1), Kuratoli, Khilkhet,Dhaka
              <br />
              Phone: 01823242423
              <br />
              Email: info@aiub.edu
            </p>
          </div>
          <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
            <h2 className="text-xl font-bold mb-2 border-b-4 w-60 border-blue-600">
              Quick Links
            </h2>
            <ul>
              <li className="mb-2">
                <a href="/about" className="hover:underline  ">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="/admissions" className="hover:underline">
                  Admissions
                </a>
              </li>
              <li className="mb-2">
                <a href="/academics" className="hover:underline">
                  Academics
                </a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/3">
            <h2 className="text-xl font-bold mb-2 border-b-4 w-60 border-blue-600">
              Connect With Us
            </h2>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/university"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.twitter.com/university"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://www.instagram.com/university"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.linkedin.com/school/university"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <p>&copy; 2024 AIUB. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
