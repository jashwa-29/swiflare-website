import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet"; // Updated to react-helmet-async
import emailjs from '@emailjs/browser';
import React, { useState, useRef, useEffect } from "react";

// EmailJS configuration - replace these with your actual values
const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_k9faktr',
  TEMPLATE_ID: 'template_4vs36sd',
  PUBLIC_KEY: '4rOTX4QTnwhT282zH'
};

// Shake animation styles component
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const formRef = useRef(null);

  // Reset submit status after 5 seconds
  useEffect(() => {
    if (submitStatus) {
      const timer = setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: false });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!formData.first.trim()) newErrors.first = true;
    if (!formData.last.trim()) newErrors.last = true;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) newErrors.email = true;
    if (!formData.phone || !phoneRegex.test(formData.phone)) newErrors.phone = true;
    if (!formData.message.trim()) newErrors.message = true;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        formRef.current,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      setSubmitStatus('success');
      setFormData({
        first: "",
        last: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = (field) =>
    `placeholder-[#C6C7D5]/50 text-[#C6C7D5] bg-[#191930] block w-full rounded-lg border ${
      errors[field]
        ? "border-red-500 animate-shake"
        : "border-[#3a3a50] focus:border-[#3FA2F6] focus:ring-[#3FA2F6]"
    } focus:ring-1 p-3.5 transition-all duration-200`;

  return (
    <div className="min-h-screen px-4 mx-auto sm:px-6 lg:px-28 py-28">
      <ShakeStyles />
      <Helmet>
        <title>Contact Us | Swiflare AI Innovations</title>
        <meta name="description" content="Get in touch with Swiflare AI Innovations for digital marketing and AI solutions." />
        <meta property="og:title" content="Contact Swiflare - The Best Digital Marketing Agency in Chennai" />
        <meta property="og:description" content="Reach out to boost your business with our expert digital marketing and AI-powered solutions." />
      </Helmet>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            Get in <span className="text-[#3FA2F6]">Touch</span>
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-lg text-[#C6C7D5]">
            We'd love to hear from you. Reach out for collaborations, questions, or just to say hello!
          </p>
        </div>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="mb-8 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center">
            Thank you! Your message has been sent successfully.
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="mb-8 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-center">
            Something went wrong. Please try again later.
          </div>
        )}

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Contact Info */}
          <div className="bg-gradient-to-br from-[#3FA2F6] to-[#021644] rounded-2xl shadow-xl overflow-hidden p-8">
            <div className="mb-8">
              <h2 className="text-2xl text-white font-semibold">Contact Information</h2>
              <p className="mt-2 text-white/90 text-sm">
                Fill out the form or contact us through other channels listed below
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-white/20 rounded-full p-3 flex-shrink-0">
                  <FaMapMarkerAlt className="h-5 w-5 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg text-white font-medium">Location</h3>
                  <p className="text-white/80 text-sm">W15, North Main Road, C- Sector, Anna Nagar West Extension, Chennai – 600101</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-white/20 rounded-full p-3 flex-shrink-0">
                  <FaEnvelope className="h-5 w-5 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg text-white font-medium">Email</h3>
                  <a href="mailto:reachus@swiflare.com" className="text-white/80 text-sm hover:text-white transition-colors">reachus@swiflare.com</a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-white/20 rounded-full p-3 flex-shrink-0">
                  <FaPhone className="h-5 w-5 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg text-white font-medium">Phone</h3>
                  <a href="tel:+917871737666" className="text-white/80 text-sm hover:text-white transition-colors">+91 7871737666</a>
                </div>
              </div>
              <div className="pt-6">
                <h3 className="text-lg text-white mb-4 font-medium">Follow Us</h3>
                <div className="flex space-x-3">
                  <a
                    href="https://twitter.com/swiflare"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-[#1DA1F2] rounded-full p-3 transition-all duration-300 hover:scale-110"
                    aria-label="Twitter"
                  >
                    <FaTwitter className="h-5 w-5 text-white" />
                  </a>
                  <a
                    href="https://instagram.com/swiflare"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-[#E1306C] rounded-full p-3 transition-all duration-300 hover:scale-110"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="h-5 w-5 text-white" />
                  </a>
                  <a
                    href="https://linkedin.com/company/swiflare"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-[#0077B5] rounded-full p-3 transition-all duration-300 hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="h-5 w-5 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#191930] border border-[#3a3a50] rounded-2xl shadow-xl p-8 lg:col-span-2">
            <h2 className="text-3xl text-white mb-8 font-bold">Let's Work Together</h2>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstname" className="sr-only">First Name</label>
                  <input
                    id="firstname"
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    value={formData.first}
                    onChange={(e) => handleChange("first", e.target.value)}
                    className={inputClass("first")}
                  />
                  {errors.first && (
                    <p className="text-red-500 text-sm mt-1">First name is required</p>
                  )}
                </div>
                <div>
                  <label htmlFor="lastname" className="sr-only">Last Name</label>
                  <input
                    id="lastname"
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    value={formData.last}
                    onChange={(e) => handleChange("last", e.target.value)}
                    className={inputClass("last")}
                  />
                  {errors.last && (
                    <p className="text-red-500 text-sm mt-1">Last name is required</p>
                  )}
                </div>
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className={inputClass("email")}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">Please enter a valid email</p>
                )}
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  name="number"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className={inputClass("phone")}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">Enter a valid 10-digit phone number</p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Message"
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className={inputClass("message")}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">Message is required</p>
                )}
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`${
                    isSubmitting ? 'bg-[#3FA2F6]/70' : 'bg-[#3FA2F6] hover:bg-[#AD49E1]'
                  } rounded-full px-8 py-3.5 text-white flex items-center gap-3 text-base hover:scale-[0.98] transition-all duration-300 group`}
                >
                  <span>{isSubmitting ? 'Sending...' : 'Submit'}</span>
                  {!isSubmitting && (
                    <FontAwesomeIcon 
                      icon={faArrowRight} 
                      className="transition-transform duration-300 group-hover:translate-x-1" 
                    />
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Embedded Google Map */}
        <div className="mt-16 rounded-2xl shadow-xl overflow-hidden border border-[#3a3a50]">
          <iframe
            title="Swiflare AI Innovations Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.031538730923!2d80.18983387985814!3d13.097187754302889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265e763858e5f%3A0x74fe508b81eb4a97!2sHYGGE%20BUSINESS%20CENTRE!5e0!3m2!1sen!2sin!4v1747047272049!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-2xl"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;