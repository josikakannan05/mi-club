"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const DOMAIN_PREFIX = {
  CS: "C4S208",
  AI: "C4S207",
  BCA: "C4S204",
  DSA: "C5S206",
};

export default function SigninPage() {
  const router = useRouter();

  // Registration form state
  const [regName, setRegName] = useState("");
  const [regBatch, setRegBatch] = useState("");
  const [regDomain, setRegDomain] = useState("");
  const [regSuffix, setRegSuffix] = useState("");
  const [regStatus, setRegStatus] = useState(null);

  // Login state
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [loginName, setLoginName] = useState("");
  const [loginBatch, setLoginBatch] = useState("");
  const [loginRegNumber, setLoginRegNumber] = useState("");
  const [loginError, setLoginError] = useState("");

  // Authenticated state
  const [loggedInParticipant, setLoggedInParticipant] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("miClubParticipant");
    if (stored) {
      try {
        setLoggedInParticipant(JSON.parse(stored));
      } catch (e) {
        localStorage.removeItem("miClubParticipant");
      }
    }
  }, []);

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!regDomain) {
      alert("❌ Please select a domain first.");
      return;
    }

    const prefix = DOMAIN_PREFIX[regDomain] || "";
    const registerNumber = prefix + regSuffix.trim();

    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: regName.trim(),
          batch: regBatch,
          domain: regDomain,
          registerNumber,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        alert(`❌ ${data.message || "Registration failed"}`);
      } else {
        setRegStatus("✅ Registration Submitted Successfully!");
        setRegName("");
        setRegBatch("");
        setRegDomain("");
        setRegSuffix("");

        setTimeout(() => setRegStatus(null), 4000);
      }
    } catch (err) {
      console.error(err);
      alert("❌ Cannot connect to server. Please make sure backend is running.");
    }
  };

  const handleLogin = async (e) => {
    if (e) e.preventDefault();
    setLoginError("");

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: loginName.trim(),
          batch: loginBatch,
          registerNumber: loginRegNumber.trim(),
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        setLoginError(`❌ ${data.message || "Invalid login credentials"}`);
      } else {
        const participant = data.participant;
        localStorage.setItem("miClubParticipant", JSON.stringify(participant));
        setLoggedInParticipant(participant);
      }
    } catch (err) {
      console.error(err);
      setLoginError("❌ Cannot connect to server. Please check backend.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("miClubParticipant");
    setLoggedInParticipant(null);
    setLoginName("");
    setLoginBatch("");
    setLoginRegNumber("");
    setShowLoginForm(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#d7f7fa] via-[#2f5a66] to-[#8be3f7] flex flex-col justify-center items-center p-4 sm:p-8">
      {/* TOP NAVIGATION */}
      <div className="w-full max-w-[520px] flex justify-between items-center mb-4">
        <Link
          href="/"
          className="text-xs font-bold text-[#020205] bg-white/80 border border-[#e5e0fb] px-3.5 py-2 rounded-xl hover:bg-white transition-colors"
        >
          ← Home
        </Link>
        <Link
          href="/club-card"
          className="text-xs font-bold text-[#020205] bg-white/80 border border-[#e5e0fb] px-3.5 py-2 rounded-xl hover:bg-white transition-colors"
        >
          🪪 Club Card
        </Link>
      </div>

      {/* MAIN CONTAINER */}
      <div className="glass-modal w-full max-w-[520px] p-6 sm:p-10 rounded-3xl text-gray-900">
        <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-white text-center mb-1 drop-shadow-sm">
          𝑴𝑰 𝑪𝑳𝑼𝑩
        </h1>
        <p className="text-center text-sm font-semibold text-gray-900 mb-6">
          Participant Registration & Portal
        </p>

        {/* LOGGED IN VIEW */}
        {loggedInParticipant ? (
          <div className="space-y-4 text-center py-4 border-t border-gray-300">
            <h2 className="text-xl font-bold text-gray-900">Welcome to MI Club</h2>
            <div className="bg-white/80 p-4 rounded-xl text-sm leading-relaxed text-gray-800">
              <strong className="text-base text-[#563ed9]">{loggedInParticipant.name}</strong>
              <br />
              Register Number: <strong>{loggedInParticipant.registerNumber}</strong>
              <br />
              Batch: {loggedInParticipant.batch || "—"} · Domain: {loggedInParticipant.domain || "—"}
            </div>

            <button
              onClick={() => router.push("/club-card")}
              className="w-full bg-[#563ed9] hover:bg-[#432bc0] text-white font-bold py-3 px-4 rounded-xl text-sm transition-all duration-200 hover:-translate-y-0.5 shadow-md"
            >
              🪪 Create / View Membership Card
            </button>

            <button
              onClick={() => router.push("/event-enrollment")}
              className="w-full bg-[#563ed9] hover:bg-[#432bc0] text-white font-bold py-3 px-4 rounded-xl text-sm transition-all duration-200 hover:-translate-y-0.5 shadow-md"
            >
              🎟️ Event Enrollment
            </button>

            <button
              onClick={handleLogout}
              className="w-full bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 font-semibold py-2.5 px-4 rounded-xl text-sm transition-colors"
            >
              ← Logout
            </button>
          </div>
        ) : (
          <>
            {/* REGISTRATION FORM */}
            <form onSubmit={handleRegister} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-900 uppercase tracking-wider mb-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  required
                  value={regName}
                  onChange={(e) => setRegName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white text-sm outline-none focus:border-[#563ed9]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-900 uppercase tracking-wider mb-1">
                  Batch
                </label>
                <select
                  required
                  value={regBatch}
                  onChange={(e) => setRegBatch(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white text-sm outline-none focus:border-[#563ed9]"
                >
                  <option value="">Select batch</option>
                  <option value="2024-2027">2024 – 2027</option>
                  <option value="2025-2028">2025 – 2028</option>
                  <option value="2026-2029">2026 – 2029</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-900 uppercase tracking-wider mb-1">
                  Domain / Department
                </label>
                <select
                  required
                  value={regDomain}
                  onChange={(e) => setRegDomain(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white text-sm outline-none focus:border-[#563ed9]"
                >
                  <option value="">Select domain</option>
                  <option value="CS">CS</option>
                  <option value="AI">AI</option>
                  <option value="BCA">BCA</option>
                  <option value="DSA">DSA</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-900 uppercase tracking-wider mb-1">
                  Register Number
                </label>
                <div className="flex gap-2 items-center">
                  <span className="shrink-0 min-w-[65px] text-center py-3 px-2 bg-[#f0edfd] text-[#563ed9] font-bold text-sm rounded-xl border border-gray-300">
                    {DOMAIN_PREFIX[regDomain] || "—"}
                  </span>
                  <input
                    type="text"
                    placeholder="Enter remaining digits"
                    required
                    value={regSuffix}
                    onChange={(e) => setRegSuffix(e.target.value)}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-xl bg-white text-sm outline-none focus:border-[#563ed9]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#816fe3] hover:bg-[#432bc0] text-white font-bold py-3.5 px-4 rounded-xl text-base transition-all duration-200 hover:-translate-y-0.5 shadow-md mt-2"
              >
                Submit Registration
              </button>
            </form>

            {regStatus && (
              <div className="mt-4 p-3 rounded-xl bg-green-100 text-green-800 text-center font-bold text-sm">
                {regStatus}
              </div>
            )}

            {/* DIVIDER */}
            <div className="flex items-center gap-3 my-6 text-gray-500 text-xs font-bold">
              <div className="flex-1 h-px bg-gray-300"></div>
              <span>OR</span>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            {/* LOGIN TOGGLE */}
            <div className="text-center">
              <p className="text-sm text-gray-700 mb-3 font-medium">Already signed in?</p>
              <button
                type="button"
                onClick={() => setShowLoginForm(!showLoginForm)}
                className="w-full border-2 border-[#563ed9] text-[#563ed9] hover:bg-[#563ed9] hover:text-white font-bold py-3 px-4 rounded-xl text-sm transition-all"
              >
                {showLoginForm ? "Hide Login Form" : "Login"}
              </button>
            </div>

            {/* LOGIN FORM */}
            {showLoginForm && (
              <form onSubmit={handleLogin} className="mt-6 pt-6 border-t border-gray-300 space-y-4">
                <h2 className="text-lg font-bold text-center text-gray-900 mb-2">Participant Login</h2>

                <div>
                  <label className="block text-xs font-bold text-gray-900 uppercase tracking-wider mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter registered name"
                    required
                    value={loginName}
                    onChange={(e) => setLoginName(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white text-sm outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-900 uppercase tracking-wider mb-1">
                    Batch
                  </label>
                  <select
                    required
                    value={loginBatch}
                    onChange={(e) => setLoginBatch(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white text-sm outline-none"
                  >
                    <option value="">Select batch</option>
                    <option value="2024-2027">2024 – 2027</option>
                    <option value="2025-2028">2025 – 2028</option>
                    <option value="2026-2029">2026 – 2029</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-900 uppercase tracking-wider mb-1">
                    Register Number
                  </label>
                  <input
                    type="text"
                    placeholder="Enter full register number (e.g. C4S208...)"
                    required
                    value={loginRegNumber}
                    onChange={(e) => setLoginRegNumber(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white text-sm outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#563ed9] hover:bg-[#432bc0] text-white font-bold py-3.5 px-4 rounded-xl text-base transition-all duration-200 shadow-md"
                >
                  Login
                </button>

                {loginError && (
                  <div className="p-3 rounded-xl bg-red-100 text-red-700 text-center font-bold text-sm">
                    {loginError}
                  </div>
                )}
              </form>
            )}
          </>
        )}
      </div>
    </div>
  );
}
