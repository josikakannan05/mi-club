"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function AdminPage() {
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginMsg, setLoginMsg] = useState("");

  const [activeTab, setActiveTab] = useState("dashboard");
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dataError, setDataError] = useState("");

  useEffect(() => {
    const savedToken = localStorage.getItem("miAdminToken");
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  useEffect(() => {
    if (token && activeTab === "dashboard") {
      fetchAnalytics();
    }
  }, [token, activeTab]);

  const fetchAnalytics = async () => {
    setLoading(true);
    setDataError("");
    try {
      const res = await fetch("http://localhost:5000/admin/analytics", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (!res.ok) {
        if (res.status === 401) handleLogout();
        throw new Error(data.message || "Failed to fetch analytics");
      }
      setAnalytics(data);
    } catch (err) {
      console.error(err);
      setDataError(err.message || "Backend error");
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginMsg("");

    try {
      const res = await fetch("http://localhost:5000/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: username.trim(), password }),
      });

      const data = await res.json();
      if (!res.ok) {
        setLoginMsg(`❌ ${data.message || "Login failed"}`);
      } else {
        localStorage.setItem("miAdminToken", data.token);
        setToken(data.token);
      }
    } catch (err) {
      console.error(err);
      setLoginMsg("❌ Cannot connect to backend server.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("miAdminToken");
    setToken(null);
    setUsername("");
    setPassword("");
  };

  if (!token) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
        <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 w-full max-w-md shadow-2xl text-center">
          <img src="/images/logo3.png" alt="MI Club" className="w-20 h-20 mx-auto mb-4 object-contain" />
          <h1 className="text-white text-3xl font-extrabold mb-1">MI CLUB</h1>
          <p className="text-purple-400 font-semibold text-sm mb-6">Admin Portal</p>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="text"
              placeholder="Username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-400 outline-none focus:border-purple-500 text-sm"
            />
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-400 outline-none focus:border-purple-500 text-sm"
            />
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3.5 px-4 rounded-xl text-sm transition-all shadow-lg"
            >
              Admin Login
            </button>
          </form>

          {loginMsg && (
            <p className="mt-4 text-xs font-semibold text-red-400">{loginMsg}</p>
          )}

          <div className="mt-6 pt-4 border-t border-slate-700">
            <Link href="/" className="text-xs text-slate-400 hover:text-white underline">
              ← Return to Main Website
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col md:flex-row">
      {/* SIDEBAR */}
      <aside className="w-full md:w-64 bg-slate-900 border-r border-slate-800 p-6 flex flex-col shrink-0">
        <div className="flex items-center gap-3 mb-8">
          <img src="/images/logo3.png" alt="MI Club" className="w-10 h-10 object-contain" />
          <div>
            <h2 className="font-extrabold text-lg text-white leading-tight">MI CLUB</h2>
            <span className="text-[10px] font-bold text-purple-400 tracking-widest uppercase">ADMIN PANEL</span>
          </div>
        </div>

        <nav className="space-y-2 flex-1">
          {[
            { id: "dashboard", label: "📊 Dashboard" },
            { id: "staff", label: "👨‍🏫 Faculties" },
            { id: "council", label: "👥 Council Members" },
            { id: "events", label: "🎯 Events" },
            { id: "feedback", label: "💬 Queries & Feedback" },
            { id: "students", label: "🎓 Students" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full text-left px-4 py-3 rounded-xl font-bold text-sm transition-all ${
                activeTab === tab.id
                  ? "bg-purple-600 text-white shadow-md"
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        <button
          onClick={handleLogout}
          className="mt-6 w-full bg-red-600/20 hover:bg-red-600 text-red-300 hover:text-white border border-red-500/30 font-bold py-2.5 px-4 rounded-xl text-sm transition-all"
        >
          🚪 Logout
        </button>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-6 md:p-10">
        <header className="flex justify-between items-center pb-6 mb-8 border-b border-slate-800">
          <div>
            <h1 className="text-2xl font-bold text-white uppercase tracking-wider capitalize">
              {activeTab}
            </h1>
            <p className="text-xs text-slate-400 font-semibold mt-1">MI CLUB Administration</p>
          </div>
          <span className="bg-purple-900/50 text-purple-300 text-xs font-bold px-3 py-1.5 rounded-full border border-purple-700">
            ADMIN LOGGED IN
          </span>
        </header>

        {loading ? (
          <div className="text-slate-400 text-sm">Loading admin data...</div>
        ) : dataError ? (
          <div className="p-4 rounded-xl bg-red-900/30 border border-red-700 text-red-300 text-sm">
            ❌ {dataError}
          </div>
        ) : activeTab === "dashboard" && analytics ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-md">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">Unique Visitors</span>
              <strong className="text-4xl font-extrabold text-purple-400">{analytics.uniqueVisitors || 0}</strong>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-md">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">Page Views</span>
              <strong className="text-4xl font-extrabold text-blue-400">{analytics.pageViews || 0}</strong>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-md">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">Student Registrations</span>
              <strong className="text-4xl font-extrabold text-emerald-400">{analytics.students || 0}</strong>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-md">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">Event Enrollments</span>
              <strong className="text-4xl font-extrabold text-amber-400">{analytics.enrollments || 0}</strong>
            </div>
          </div>
        ) : (
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 text-slate-300 text-sm">
            <h3 className="text-lg font-bold text-white mb-2 capitalize">{activeTab} Management</h3>
            <p>Admin endpoint view active. Connected to backend service API.</p>
          </div>
        )}
      </main>
    </div>
  );
}
