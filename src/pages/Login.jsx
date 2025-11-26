import React, { useState } from "react";
import API from "../api";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");  // <-- blank now
  const [password, setPassword] = useState(""); // <-- blank now
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { data } = await API.post("/auth/login", { email, password });
      localStorage.setItem("adminToken", data.token);
      if (onLogin) onLogin(data.token);
    } catch (err) {
      const msg = err?.response?.data?.message || "Invalid email or password";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-56px)] flex items-center justify-center bg-slate-950">
      <form
        onSubmit={submitHandler}
        className="bg-slate-900 border border-slate-800 shadow-lg rounded-2xl p-8 w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-white text-center mb-6">
          Admin Login
        </h2>

        {error && (
          <p className="text-red-500 bg-red-500/10 border border-red-500/30 text-xs px-3 py-2 rounded mb-4">
            {error}
          </p>
        )}

        <label className="block mb-2 text-xs text-slate-400">Email</label>
        <input
          type="email"
          className="w-full border border-slate-700 bg-slate-800 text-white px-3 py-2 rounded-lg text-sm focus:border-indigo-500 outline-none mb-4"
          placeholder="admin@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="block mb-2 text-xs text-slate-400">Password</label>
        <input
          type="password"
          className="w-full border border-slate-700 bg-slate-800 text-white px-3 py-2 rounded-lg text-sm focus:border-indigo-500 outline-none mb-6"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          disabled={!email || !password || loading}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 rounded-lg transition disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="text-[11px] text-slate-400 mt-4 text-center">
          Only the admin can log in to manage the blog.
        </p>
      </form>
    </div>
  );
};

export default Login;
