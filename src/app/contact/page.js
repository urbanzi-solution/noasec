"use client";

import { useState } from "react";

export default function ContactPage() {
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

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbzBeN4UR6DscHaYT5ryAPG4aOWR3CjyLHwJluL5RLKv4iRcSUR0N5_g7-h9QdME93V6EA/exec";

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
      console.error(error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-[#05070d] text-white px-6 md:px-16 py-20 mt-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

        {/* ================= LEFT - FORM ================= */}
        <div className="md:col-span-2 bg-[#0c0f17] border border-white/10 rounded-xl p-8">

          <h2 className="text-2xl font-semibold mb-8">
            Send an Inquiry
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Name + Email */}
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/10 rounded-md text-sm outline-none focus:border-[#0ea5e9]"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/10 rounded-md text-sm outline-none focus:border-[#0ea5e9]"
              />
            </div>

            {/* Phone */}
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/10 rounded-md text-sm outline-none focus:border-[#0ea5e9]"
            />

            {/* Message */}
            <textarea
              rows="6"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe your technical requirements..."
              required
              className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/10 rounded-md text-sm outline-none focus:border-[#0ea5e9]"
            />

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-[#0ea5e9] hover:bg-[#38bdf8] rounded-md text-white font-semibold transition w-full"
            >
              {loading ? "Sending..." : "Submit"}
            </button>

            {/* STATUS MESSAGE */}
            {status === "success" && (
              <p className="text-green-400 text-sm text-center">
                ✅ Message sent successfully!
              </p>
            )}

            {status === "error" && (
              <p className="text-red-400 text-sm text-center">
                ❌ Something went wrong. Try again.
              </p>
            )}

          </form>

          {/* OPTIONAL: GOOGLE SHEET LINK */}
         

        </div>

        {/* ================= RIGHT - INFO ================= */}
        <div className="bg-[#0c0f17] border border-white/10 rounded-xl p-6 flex flex-col justify-between">

          <div>
            <h3 className="text-lg font-semibold mb-6">
              Contact Information
            </h3>

            <div className="space-y-6 text-sm">

              <div>
                <p className="text-gray-400 uppercase text-xs mb-1">
                  Address
                </p>
                <p>
                 R4, Centerspace, XIII/284 A, Anjanasree Arcade Annankunnu Road, Nagampadom Kottayam PIN : 686001
                </p>
                
              </div>

              <div>
                <p className="text-gray-400 uppercase text-xs mb-1">
                  Email
                </p>
                <p>Info@noasecsolutions.com</p>
              </div>

              <div>
                <p className="text-gray-400 uppercase text-xs mb-1">
                  Phone
                </p>
                <p>7034733944</p>
                
              </div>

            </div>
          </div>

          {/* MAP */}
          <div className="mt-6 w-full h-[200px] rounded-md overflow-hidden">
            <iframe
              src="https://www.google.com/maps?q=Kottayam,Kerala&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
