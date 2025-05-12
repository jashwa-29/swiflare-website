import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import EmailJS SDK
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

    if (Object.keys(newErrors).length === 0) {
      // Send the email using EmailJS
      emailjs
        .sendForm(
          "YOUR_SERVICE_ID", // Your EmailJS Service ID
          "YOUR_TEMPLATE_ID", // Your EmailJS Template ID
          e.target, // Form data
          "YOUR_USER_ID" // Your EmailJS User ID
        )
        .then(
          (result) => {
            alert("Form submitted successfully!");
            // Optionally reset the form here
            setFormData({
              first: "",
              last: "",
              email: "",
              phone: "",
              message: "",
            });
          },
          (error) => {
            alert("Oops! Something went wrong.");
            console.error(error.text);
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
      </div>
    </div>
  );
};

export default Contact;
