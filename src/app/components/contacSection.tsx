"use client";

import { useState } from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import axios from "axios";
import { ScrollProps } from "../page"; 

// ✅ Tambahkan prop scrollToSection ke parameter komponen
export default function Contacts({ scrollToSection }: ScrollProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // sukses / error

  const APP_ID = "32DD7093-95AA-4875-842D-24AB30654CF2";
  const REST_API_KEY = "936BFAD8-8AD1-4426-82F4-C07331E4D87E";
  const TABLE_NAME = "Contacts";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // validasi sederhana
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill in all required fields.");
      return;
    }

    try {
      const response = await axios.post(
        `https://api.backendless.com/${APP_ID}/${REST_API_KEY}/data/${TABLE_NAME}`,
        formData
      );
      console.log("Backendless response:", response.data);
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-black px-6 py-20 text-white">
      <h2 className="text-4xl font-bold mb-12 text-center">Contact Me</h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto flex flex-col gap-6 border border-gray-600 rounded-md p-6 bg-gray-900 shadow-md"
      >
        {/* Name */}
        <div className="flex flex-col">
          <label className="mb-2 text-gray-300 font-medium">Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            placeholder="Input your name"
            className="border border-gray-700 rounded px-4 py-2 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="mb-2 text-gray-300 font-medium">Email</label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Input your email"
            className="border border-gray-700 rounded px-4 py-2 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col">
          <label className="mb-2 text-gray-300 font-medium">Phone</label>
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            type="tel"
            placeholder="Input your phone number"
            className="border border-gray-700 rounded px-4 py-2 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col">
          <label className="mb-2 text-gray-300 font-medium">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Type your message"
            className="border border-gray-700 rounded px-4 py-2 bg-gray-800 text-white resize-none h-32 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>
        </div>

        {/* Status */}
        {status && <p className="text-center text-indigo-400">{status}</p>}

        {/* Buttons */}
        <div className="flex gap-4 mt-4 justify-end">
          <button
            type="reset"
            onClick={() => setFormData({ name: "", email: "", phone: "", message: "" })}
            className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 transition"
          >
            Reset
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-700 transition"
          >
            Send
          </button>
        </div>
      </form>

      {/* Sosial Media */}
      <div className="flex justify-center gap-8 mt-12">
        
          href="mailto:your-email@example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-500 transition"
        <a>
          <Mail className="w-8 h-8" />
        </a>
        
          href="https://github.com/username"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-500 transition"
        <a>
          <Github className="w-8 h-8" />
        </a>
        
          href="https://www.linkedin.com/in/username"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-500 transition"
        <a>
          <Linkedin className="w-8 h-8" />
        </a>
      </div>
    </div>
  );
}