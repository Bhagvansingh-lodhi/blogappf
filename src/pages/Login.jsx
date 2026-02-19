import React, { useState } from "react";
import API from "../api";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    <div className="min-h-screen bg-white font-lato pt-28 pb-32">
      <div className="max-w-[1120px] mx-auto px-6">

        {/* HEADING */}
        <h1 className="font-raleway font-bold text-[24px] leading-[30px] text-[#071477] mb-4">
          Admin Login
        </h1>

        {/* SUBTEXT */}
        <p className="text-[18px] leading-[30px] text-[#8A90B2] mb-16 max-w-[720px]">
          Only the admin can log in to manage the blog dashboard.
        </p>

        {/* ERROR */}
        {error && (
          <p className="text-red-600 bg-red-100 border border-red-300 text-sm px-4 py-3 rounded-md mb-8 max-w-[720px]">
            {error}
          </p>
        )}

        {/* FORM */}
        <form onSubmit={submitHandler} className="space-y-10">

          {/* EMAIL */}
          <div>
            <label className="block text-[16px] font-medium text-[#071477] mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="admin@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="
                w-full max-w-[720px]
                px-4 py-3
                border border-[#D9DEEF]
                rounded-md
                text-[16px]
                text-[#3D4367]
                placeholder-[#A1A7C4]
                focus:outline-none
                focus:border-[#1028CD]
              "
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label className="block text-[16px] font-medium text-[#071477] mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="
                w-full max-w-[720px]
                px-4 py-3
                border border-[#D9DEEF]
                rounded-md
                text-[16px]
                text-[#3D4367]
                placeholder-[#A1A7C4]
                focus:outline-none
                focus:border-[#1028CD]
              "
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={!email || !password || loading}
            className="
              bg-[#071477]
              text-white
              text-[16px]
              font-medium
              px-6 py-3
              rounded-md
              hover:bg-[#1028CD]
              transition-colors
              disabled:opacity-50
            "
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default Login;
