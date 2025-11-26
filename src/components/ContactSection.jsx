import React, { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you for contacting us!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="py-20 px-4 md:px-16 lg:px-24 xl:px-40 bg-white">
      <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-800">
        Get in Touch
      </h2>
      <p className="text-sm md:text-base text-gray-600 text-center mt-2 max-w-xl mx-auto">
        Have questions or want to collaborate? Fill out the form below and we’ll
        get back to you as soon as possible.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-12 max-w-2xl mx-auto flex flex-col gap-6"
      >
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] transition"
          required
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#1DD3B0] transition"
          required
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="5"
          className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#3C91E6] transition"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full cursor-pointer bg-linear-to-r from-[#FF6B6B] to-[#FFD93D] text-white py-3 rounded-md font-semibold hover:scale-105 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactSection;
