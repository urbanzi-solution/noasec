"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status) setStatus(null);
  };

  const getISTTime = () => {
    return new Intl.DateTimeFormat("en-IN", {
      timeZone: "Asia/Kolkata",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(new Date());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const scriptURL = "YOUR_GOOGLE_SCRIPT_URL_HERE";

    const data = new FormData();
    data.append("FirstName", formData.firstName);
    data.append("Email", formData.email);
    data.append("Phone", formData.phone);
    data.append("Message", formData.message);
    data.append("Timestamp", getISTTime());

    try {
      await fetch(scriptURL, {
        method: "POST",
        body: data,
        mode: "no-cors",
      });

      setStatus("success");
      setFormData({
        firstName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    
    <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

      {/* FORM SECTION */}
      <div className="md:col-span-2 bg-[#0c0f17] border border-white/10 rounded-xl p-8">

        <h1 className="text-3xl font-semibold mb-6 leading-snug">
  We&apos;d Love to Hear From You
</h1>

<p className="text-gray-300 mb-8 text-sm md:text-base">
  Whether you're a student ready to start your cybersecurity career,
  an organization looking to strengthen its security posture, or simply
  want to learn more — our team is here to help. Fill in the form below
  or reach out directly.
</p>

        <form onSubmit={handleSubmit} className="space-y-6">

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/10 rounded-md"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/10 rounded-md"
            />
          </div>

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
            className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/10 rounded-md"
          />

          <textarea
            rows="6"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Describe your enquiry..."
            required
            className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/10 rounded-md"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-blue-500 hover:bg-blue-600 rounded-md font-semibold transition"
          >
            {loading ? "Sending..." : "Submit"}
          </button>

          {status === "success" && (
            <p className="text-green-400 text-center">
              ✅ Message sent successfully!
            </p>
          )}

          {status === "error" && (
            <p className="text-red-400 text-center">
              ❌ Something went wrong.
            </p>
          )}

        </form>
      </div>

      {/* CONTACT INFO */}
      <div className="bg-[#0c0f17] border border-white/10 rounded-xl p-6">

        <h2 className="text-lg font-semibold mb-6">
          Contact Information
        </h2>

        <div className="space-y-4 text-sm">
          <div>
            <p className="text-gray-400 uppercase text-xs">Address</p>
            <p>
              R4, Centerspace, XIII/284 A, Anjanasree Arcade,
              Annankunnu Road, Nagampadom,
              Kottayam PIN: 686001
            </p>
          </div>

          <div>
            <p className="text-gray-400 uppercase text-xs">Email</p>
            <p>Info@noasecsolutions.com</p>
          </div>

          <div>
            <p className="text-gray-400 uppercase text-xs">Phone</p>
            <p>7034733944</p>
          </div>
        </div>

        <div className="mt-6 w-full h-[200px] rounded-md overflow-hidden">
          <iframe
            src="https://www.google.com/maps?q=Kottayam,Kerala&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
          />
        </div>
      </div>

    </div>
  );
}