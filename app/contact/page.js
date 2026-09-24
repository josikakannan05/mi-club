"use client";

import { useState } from "react";
import BackgroundMedia from "@/components/BackgroundMedia";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    registerNumber: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.registerNumber || !formData.message) {
      setStatus({ type: "error", text: "❌ Please fill all fields." });
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch("http://localhost:5000/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) {
        setStatus({ type: "error", text: `❌ ${data.message || "Feedback submission failed"}` });
      } else {
        setStatus({ type: "success", text: "✅ Feedback submitted successfully!" });
        setFormData({ name: "", registerNumber: "", message: "" });
      }
    } catch (err) {
      console.error(err);
      setStatus({
        type: "error",
        text: "❌ Cannot connect to server. Please make sure backend is running.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <BackgroundMedia imgSrc="/images/kt1.jpg" overlayBg="rgba(255, 255, 255, 0.12)" />

      {/* HEADER */}
      <section className="contact-header text-center pt-12 pb-8 px-5">
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white drop-shadow-md mb-3">
          Contact Us
        </h1>
        <p className="text-slate-100 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Have questions regarding registration, events, or other information? Reach out to the
          MI CLUB organizing team — we're happy to help!
        </p>
      </section>

      {/* CONTACT CARDS */}
      <section className="contact-cards max-w-[1000px] mx-auto px-5 mb-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="contact-card bg-white/85 backdrop-blur-md rounded-2xl p-6 text-center border border-white/60 shadow-md hover:-translate-y-1 transition-transform">
          <div className="icon text-3xl text-[#231861] mb-2">✉</div>
          <h3 className="font-bold text-gray-900 text-lg mb-1">Email</h3>
          <p className="text-gray-600 text-sm">
            <a href="mailto:yourmail@gmail.com" className="hover:text-[#1a124a] underline">
              yourmail@gmail.com
            </a>
          </p>
        </div>

        <div className="contact-card bg-white/85 backdrop-blur-md rounded-2xl p-6 text-center border border-white/60 shadow-md hover:-translate-y-1 transition-transform">
          <div className="icon text-3xl text-[#231861] mb-2">☎</div>
          <h3 className="font-bold text-gray-900 text-lg mb-1">Phone</h3>
          <p className="text-gray-600 text-sm">
            <a href="tel:+919000000000" className="hover:text-[#1a124a] underline">
              +91 90000 00000
            </a>
          </p>
        </div>
      </section>

      {/* FEEDBACK SECTION */}
      <section className="message-section max-w-[800px] mx-auto px-5 pb-20">
        <div className="feedback-box bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-10 shadow-xl border border-white/60">
          <h2 className="font-serif text-3xl font-bold text-[#1e1b4b] mb-6 text-center">
            Feedback & Queries
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#251a63] focus:border-transparent outline-none bg-white text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                Register Number
              </label>
              <input
                type="text"
                placeholder="Enter your register number"
                required
                value={formData.registerNumber}
                onChange={(e) => setFormData({ ...formData, registerNumber: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#251a63] focus:border-transparent outline-none bg-white text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                Message / Query
              </label>
              <textarea
                placeholder="Type your message here..."
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#251a63] focus:border-transparent outline-none bg-white text-sm resize-y"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="send-btn w-full bg-[#251a63] hover:bg-[#1f1552] text-white font-bold text-sm py-3.5 px-6 rounded-xl transition-all duration-300 hover:-translate-y-0.5 shadow-md disabled:opacity-50"
            >
              {loading ? "Sending..." : "✈ Send Message"}
            </button>

            {status && (
              <div
                className={`p-3.5 rounded-xl text-center font-semibold text-sm ${
                  status.type === "success"
                    ? "bg-green-100 text-green-800 border border-green-200"
                    : "bg-red-100 text-red-800 border border-red-200"
                }`}
              >
                {status.text}
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
