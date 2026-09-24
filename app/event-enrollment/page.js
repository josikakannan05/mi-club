"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function EventEnrollmentPage() {
  const router = useRouter();
  const [participant, setParticipant] = useState(null);

  const [eventType, setEventType] = useState("");
  const [venue, setVenue] = useState("");
  const [event, setEvent] = useState("");
  const [status, setStatus] = useState("");
  const [date, setDate] = useState("");
  const [certificateFile, setCertificateFile] = useState(null);

  const [msg, setMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("miClubParticipant");
    if (!stored) {
      alert("Please login first.");
      router.push("/signin");
    } else {
      try {
        setParticipant(JSON.parse(stored));
      } catch (e) {
        router.push("/signin");
      }
    }
  }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!participant || !eventType || !venue || !event || !status || !date || !certificateFile) {
      setMsg({ type: "error", text: "❌ Please fill all required fields and upload your certificate." });
      return;
    }

    setLoading(true);
    setMsg(null);

    const body = {
      qrToken: participant.qrToken || participant.registerNumber,
      eventType,
      venue,
      participantEvent: event,
      status,
      eventDate: date,
    };

    try {
      const response = await fetch("http://localhost:5000/event-enroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await response.json();
      if (!response.ok) {
        setMsg({ type: "error", text: `❌ ${data.message || "Event enrollment failed"}` });
      } else {
        setMsg({ type: "success", text: "✅ Event Enrollment Submitted Successfully!" });
        setEventType("");
        setVenue("");
        setEvent("");
        setStatus("");
        setDate("");
        setCertificateFile(null);
      }
    } catch (err) {
      console.error(err);
      setMsg({ type: "error", text: "❌ Cannot connect to server. Please make sure backend is running." });
    } finally {
      setLoading(false);
    }
  };

  if (!participant) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#d7f7fa] via-[#f8f4fa] to-[#e3eaff] flex justify-center items-center p-4 sm:p-8">
      <div className="box w-full max-w-[650px] bg-white p-6 sm:p-10 rounded-3xl shadow-2xl border border-gray-100">
        <h1 className="title text-center text-[#563ed9] font-black text-3xl sm:text-4xl mb-1">
          𝓜𝓘 𝓒𝓛𝓤𝓑
        </h1>
        <p className="sub text-center text-gray-500 text-sm font-semibold mb-6">
          Event Enrollment Form
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
              Name
            </label>
            <input
              type="text"
              value={participant.name || ""}
              readOnly
              className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-100 text-sm font-semibold text-gray-800"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
              Register Number
            </label>
            <input
              type="text"
              value={participant.registerNumber || ""}
              readOnly
              className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-100 text-sm font-semibold text-gray-800"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                Batch
              </label>
              <input
                type="text"
                value={participant.batch || ""}
                readOnly
                className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-100 text-sm font-semibold text-gray-800"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                Domain
              </label>
              <input
                type="text"
                value={participant.domain || ""}
                readOnly
                className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-100 text-sm font-semibold text-gray-800"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
              Event Type
            </label>
            <select
              required
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white text-sm outline-none focus:border-[#563ed9]"
            >
              <option value="">Select</option>
              <option value="Inter College">Inter College</option>
              <option value="Outer College">Outer College</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
              Venue
            </label>
            <input
              type="text"
              placeholder="College / Institution Name"
              required
              value={venue}
              onChange={(e) => setVenue(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white text-sm outline-none focus:border-[#563ed9]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
              Participant Event
            </label>
            <select
              required
              value={event}
              onChange={(e) => setEvent(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white text-sm outline-none focus:border-[#563ed9]"
            >
              <option value="">Select</option>
              <option value="Quiz">Quiz</option>
              <option value="Debugging">Debugging</option>
              <option value="Paper Presentation">Paper Presentation</option>
              <option value="Code Relay">Code Relay</option>
              <option value="Web Designing">Web Designing</option>
              <option value="Logo Designing">Logo Designing</option>
              <option value="Hackathon">Hackathon</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
              Status
            </label>
            <select
              required
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white text-sm outline-none focus:border-[#563ed9]"
            >
              <option value="">Select</option>
              <option value="Winner">Winner</option>
              <option value="Runner">Runner</option>
              <option value="Participant">Participant</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
              Event Date
            </label>
            <input
              type="date"
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white text-sm outline-none focus:border-[#563ed9]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
              Certificate Upload
            </label>
            <div className="certificate-upload border-2 border-dashed border-[#563ed9]/40 rounded-2xl p-5 text-center bg-purple-50/50 hover:bg-purple-50 transition-colors">
              <input
                type="file"
                accept="image/png,image/jpeg,image/jpg,application/pdf"
                required
                onChange={(e) => setCertificateFile(e.target.files[0])}
                className="w-full cursor-pointer text-sm text-gray-600"
              />
              <small className="block mt-2 text-xs text-gray-500 font-medium">
                Upload certificate as Image or PDF (JPG, PNG, JPEG, PDF)
              </small>
            </div>
          </div>

          <div className="pt-2 space-y-3">
            <button
              type="submit"
              disabled={loading}
              className="btn w-full bg-[#563ed9] hover:bg-[#432bc0] text-white font-extrabold py-3.5 px-4 rounded-xl text-base transition-all duration-200 shadow-md disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Submit Event Enrollment"}
            </button>

            <Link
              href="/club-card"
              className="btn back block w-full text-center bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 font-bold py-3 px-4 rounded-xl text-sm transition-colors"
            >
              ← Back to Club Card
            </Link>
          </div>
        </form>

        {msg && (
          <div
            className={`mt-6 p-4 rounded-xl text-center font-bold text-sm ${
              msg.type === "success"
                ? "bg-green-100 text-green-800 border border-green-200"
                : "bg-red-100 text-red-800 border border-red-200"
            }`}
          >
            {msg.text}
          </div>
        )}
      </div>
    </div>
  );
}
