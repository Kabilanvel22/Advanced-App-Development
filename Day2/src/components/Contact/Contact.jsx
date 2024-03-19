import React, { useRef, useEffect } from 'react';
import { FiMapPin, FiPhone, FiClock } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../../pages/Navbar/Navbar';
import Footer from '../../pages/Footer';

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();
      
        emailjs
          .sendForm('service_8du4x5g', 'template_m98peih', e.target, 'sOaj89_gauBwLwyEe')
          .then(
            (result) => {
              if (result.text === 'OK') {
                toast.success('Email sent successfully!');
                form.current.reset(); // Clear the form after successful submission
              } else {
                toast.error('Failed to send email. Please try again later.');
              }
            },
            (error) => {
              toast.error('Failed to send email. Please try again later.');
            }
          );
      };

  return (
    <>
    <Navbar/>
      <ToastContainer />
      <div className="max-w-screen-lg mx-auto p-5 py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 border">
          <div className="bg-gray-900 md:col-span-4 p-10 text-white">
            <p className="mt-4 text-sm leading-7 font-regular uppercase">Contact</p>
            <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
              Get In <span className="text-indigo-600">Touch</span>
            </h3>
            <p className="mt-4 leading-7 text-gray-200">
                We're here to assist you! If you have any questions or need assistance, please feel free to reach out to
            </p>

            <div className="flex items-center mt-5">
              <FiMapPin />
              <span className="text-sm pl-5">House #14, Street #12, Darulaman Road, Kabul,India.</span>
            </div>
            <div className="flex items-center mt-5">
              <FiPhone />
              <span className="text-sm pl-5">+91-9876543212</span>
            </div>
            <div className="flex items-center mt-5">
              <FiClock />
              <span className="text-sm pl-5">24/7 Support Available</span>
            </div>
          </div>
          <form
            onSubmit={sendEmail}
            className="md:col-span-8 p-10"
          >
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label htmlFor="grid-first-name" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  First Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                  name="user_name"
                  required
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label htmlFor="grid-last-name" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Last Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Doe"
                  name="user_lastname"
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label htmlFor="grid-email" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Email Address
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-email"
                  type="email"
                  placeholder="********@*****.**"
                  name="user_email"
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label htmlFor="grid-message" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Your Message
                </label>
                <textarea
                  rows="10"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  name="message"
                  required
                ></textarea>
              </div>
              <button
                className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded mt-5 ml-96"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Contact;
