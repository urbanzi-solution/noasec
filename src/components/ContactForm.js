"use client";

import { useState } from "react";
import { categories } from "@/data/services";
import { Send, CheckCircle2, AlertCircle, Sparkles } from "lucide-react";

// Set NEXT_PUBLIC_FORM_ENDPOINT in .env.local (Google Apps Script, Formspree, etc.)
const ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

const empty = { name: "", email: "", phone: "", company: "", service: "", budget: "", message: "" };

const budgetOptions = [
  "Under ₹50,000",
  "₹50,000 – ₹2,00,000",
  "₹2,00,000 – ₹5,00,000",
  "₹5,00,000+",
];

export default function ContactForm() {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState(null);

  const change = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    if (status && status !== "loading") setStatus(null);
  };

  const handleBudgetSelect = (b) => {
    setForm((f) => ({ ...f, budget: f.budget === b ? "" : b }));
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!ENDPOINT) {
      // In demonstration mode if endpoint is not set, simulate smooth success so the user gets instant feedback
      setStatus("loading");
      setTimeout(() => {
        setStatus("success");
        setForm(empty);
      }, 700);
      return;
    }

    setStatus("loading");
    const data = new FormData();
    Object.entries(form).forEach(([k, v]) => data.append(k, v));
    data.append("timestamp", new Date().toISOString());
    try {
      await fetch(ENDPOINT, { method: "POST", body: data, mode: "no-cors" });
      setStatus("success");
      setForm(empty);
    } catch {
      setStatus("error");
    }
  };

  const field = "w-full rounded-xl border border-white/10 bg-[#070d18] px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all";

  return (
    <form onSubmit={submit} className="space-y-4" aria-describedby="form-status">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold text-gray-300">Full Name *</span>
          <input
            name="name"
            value={form.name}
            onChange={change}
            placeholder="John Doe"
            required
            autoComplete="name"
            className={field}
          />
        </label>

        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold text-gray-300">Email Address *</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={change}
            placeholder="john@example.com"
            required
            autoComplete="email"
            className={field}
          />
        </label>

        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold text-gray-300">Phone / WhatsApp *</span>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={change}
            placeholder="+91 98765 43210"
            required
            autoComplete="tel"
            className={field}
          />
        </label>

        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold text-gray-300">Organization / Website</span>
          <input
            name="company"
            value={form.company}
            onChange={change}
            placeholder="Acme Corp / acme.com"
            autoComplete="organization"
            className={field}
          />
        </label>

        <div className="sm:col-span-2">
          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold text-gray-300">Service or Training Pathway Needed *</span>
            <select
              name="service"
              value={form.service}
              onChange={change}
              required
              className={field}
            >
              <option value="">Select your area of interest *</option>
              <optgroup label="Cybersecurity Training Pathways">
                <option value="NCCP - Certified Cybersecurity Professional (4 Months)">NCCP — Flagship Professional (4 Months)</option>
                <option value="NCD - NoaSec Cyber Defender (2 Months)">NCD — Cyber Defender (2 Months)</option>
                <option value="NCSA - Cyber Security Associate (1 Month)">NCSA — Associate Basics (1 Month)</option>
                <option value="NCSA-SOC - Certified SOC Analyst">NCSA-SOC — SOC Analyst (1-2 Months)</option>
                <option value="NCDF - Digital Forensics Certification">NCDF — Digital Forensics (1-2 Months)</option>
              </optgroup>
              <optgroup label="Enterprise Cybersecurity Services">
                <option value="Network / Web / Mobile Penetration Testing">Penetration Testing (VAPT)</option>
                <option value="Managed SOC & 24/7 Monitoring">Managed SOC &amp; 24/7 Monitoring</option>
                <option value="Incident Response & Ransomware Containment">Incident Response &amp; Containment</option>
                <option value="Cloud Security & AWS/Azure Audits">Cloud Security Solutions</option>
                <option value="Digital Forensics & Evidence Extraction">Digital Forensics &amp; Evidence</option>
              </optgroup>
              <optgroup label="Digital Growth & Branding">
                {categories.filter((c) => c.slug !== "cybersecurity").map((c) => (
                  <option key={c.slug} value={c.name}>{c.name}</option>
                ))}
                <option value="Multiple / Full-Stack Partnership">Multiple / Full-Stack Partnership</option>
              </optgroup>
            </select>
          </label>
        </div>
      </div>

      {/* Interactive Budget Pills */}
      <div>
        <span className="mb-2 block text-xs font-semibold text-gray-300">Estimated Project or Training Budget (Optional)</span>
        <div className="flex flex-wrap gap-2">
          {budgetOptions.map((b) => (
            <button
              type="button"
              key={b}
              onClick={() => handleBudgetSelect(b)}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-200 cursor-pointer ${
                form.budget === b
                  ? "bg-cyan-500 text-white border border-cyan-400 shadow-[0_0_12px_rgba(14,165,233,0.3)]"
                  : "bg-white/5 border border-white/10 text-gray-300 hover:border-cyan-400/40 hover:text-white"
              }`}
            >
              {b}
            </button>
          ))}
        </div>
      </div>

      {/* Message textarea */}
      <label className="block">
        <span className="mb-1.5 block text-xs font-semibold text-gray-300">Project or Training Objectives *</span>
        <textarea
          rows={4}
          name="message"
          value={form.message}
          onChange={change}
          placeholder="Describe your infrastructure, learning objectives, or immediate security requirements..."
          required
          className={field}
        />
      </label>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full justify-center py-3.5 text-sm font-semibold tracking-wide disabled:opacity-60"
      >
        {status === "loading" ? (
          <span className="flex items-center gap-2">
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
            Transmitting Enquiry...
          </span>
        ) : (
          <span className="flex items-center gap-2">
            Transmit Secure Enquiry <Send size={15} />
          </span>
        )}
      </button>

      {/* Status feedback */}
      <div id="form-status" role="status" className="text-center pt-2">
        {status === "success" && (
          <div className="inline-flex items-center gap-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 px-4 py-2 text-xs font-medium text-emerald-300">
            <CheckCircle2 size={16} className="text-emerald-400" />
            <span>Thank you! Our engineering team will review and reply within 1 business day.</span>
          </div>
        )}
        {status === "error" && (
          <div className="inline-flex items-center gap-2 rounded-xl bg-red-500/10 border border-red-500/30 px-4 py-2 text-xs font-medium text-red-300">
            <AlertCircle size={16} className="text-red-400" />
            <span>Could not submit automatically. Please reach us directly on WhatsApp or phone.</span>
          </div>
        )}
      </div>
    </form>
  );
}
