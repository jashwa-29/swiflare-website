
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";
import emailjs from '@emailjs/browser';
import React, { useState, useRef } from "react";



// Shake animation styles
const ShakeStyles = () => (
  <style>{`
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      20% { transform: translateX(-6px); }
      40% { transform: translateX(6px); }
      60% { transform: translateX(-6px); }
      80% { transform: translateX(6px); }
    }
    .animate-shake {
      animation: shake 0.4s ease-in-out;
    }
  `}</style>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    first: "",
    last: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    setErrors({ ...errors, [field]: false });
  };

const handleSubmit = (e) => {
  e.preventDefault();
  const newErrors = {};

  if (!formData.first) newErrors.first = true;
  if (!formData.last) newErrors.last = true;
  if (!formData.email) newErrors.email = true;
  if (!formData.message) newErrors.message = true;

  const phoneRegex = /^[0-9]{10}$/;
  if (!formData.phone || !phoneRegex.test(formData.phone)) {
    newErrors.phone = true;
  }

  setErrors(newErrors);

  if (Object.keys(newErrors).length === 0 && formRef.current) {
    emailjs
      .sendForm(
        'your_service_id', // Replace with your EmailJS Service ID
        'your_template_id', // Replace with your Template ID
        formRef.current,
        'your_public_key'   // Replace with your Public Key (NOT secret key)
      )
      .then(
        () => {
          alert('Form submitted!');
          setFormData({
            first: "",
            last: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          console.error('FAILED...', error);
          alert('Something went wrong. Please try again.');
        }
      );
  }
};


  const inputClass = (field) =>
    `placeholder-[#C6C7D5]/50 text-[#C6C7D5] bg-[#191930] block w-full rounded-lg border ${
      errors[field]
        ? "border-red-500 animate-shake"
        : "border-[#3a3a50] focus:border-[#3FA2F6] focus:ring-[#3FA2F6]"
    } focus:ring-1 p-3.5 transition-all duration-200`;

  return (
    <div className="min-h-screen px-4 mx-auto sm:px-6 lg:px-28 py-28 ">
      <ShakeStyles />
         <Helmet>
        <title>My Page Title</title>
          <meta name="description" content="This is the description for SEO." />
      </Helmet>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-white text-4xl md:text-5xl">
            Get in <span className="text-[#3FA2F6]">Touch</span>
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-lg text-[#C6C7D5]">
            We'd love to hear from you. Reach out for collaborations, questions, or just to say hello!
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Contact Info */}
          <div className="bg-gradient-to-br from-[#3FA2F6] to-[#021644] rounded-2xl shadow-xl overflow-hidden p-8">
            <div className="mb-8">
              <h2 className="text-2xl text-white">Contact Information</h2>
              <p className="mt-2 text-white/90 text-sm">
                Fill out the form or contact us through other channels listed below
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-white/20 rounded-full p-3">
                  <FaMapMarkerAlt className="h-5 w-5 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg text-white">Location</h3>
                  <p className="text-white/80 text-sm">W15, North Main Road, C- Sector, Anna Nagar West Extension, Chennai – 600101</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-white/20 rounded-full p-3">
                  <FaEnvelope className="h-5 w-5 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg text-white">Email</h3>
                  <p className="text-white/80 text-sm">reachus@swiflare.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-white/20 rounded-full p-3">
                  <FaPhone className="h-5 w-5 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg text-white">Phone</h3>
                  <p className="text-white/80 text-sm">+91 7871737666</p>
                </div>
              </div>
              <div className="pt-6">
                <h3 className="text-lg text-white mb-4">Follow Us</h3>
                <div className="flex space-x-3">
                  {[FaTwitter, FaInstagram, FaLinkedin].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="bg-white/10 hover:bg-[#3FA2F6] rounded-full p-3 transition-all duration-300 hover:scale-110"
                      aria-label="Social"
                    >
                      <Icon className="h-5 w-5 text-white" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#191930] border border-[#3a3a50] rounded-2xl shadow-xl p-8 lg:col-span-2">
            <h2 className="text-3xl text-white mb-8">Let's Work Together</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="First Name"
                  value={formData.first}
                  onChange={(e) => handleChange("first", e.target.value)}
                  className={inputClass("first")}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={formData.last}
                  onChange={(e) => handleChange("last", e.target.value)}
                  className={inputClass("last")}
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className={inputClass("email")}
              />
              <div>
                <input
                  type="text"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className={inputClass("phone")}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">Enter a valid 10-digit phone number</p>
                )}
              </div>
              <textarea
                rows={4}
                placeholder="Message"
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                className={inputClass("message")}
              />
              <div>
                <button
                  type="submit"
                  className="bg-[#3FA2F6] hover:bg-[#AD49E1] rounded-full px-8 py-3.5 text-white flex items-center gap-3 text-base hover:scale-[0.98] transition-all duration-300 group"
                >
                  <span>Get Started</span>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Embedded Google Map */}
        <div className="mt-16 rounded-2xl shadow-xl overflow-hidden border border-[#3a3a50]">
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.031538730923!2d80.18983387985814!3d13.097187754302889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265e763858e5f%3A0x74fe508b81eb4a97!2sHYGGE%20BUSINESS%20CENTRE!5e0!3m2!1sen!2sin!4v1747047272049!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-2xl"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
