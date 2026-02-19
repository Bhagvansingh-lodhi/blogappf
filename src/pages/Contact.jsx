import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Footer from "../components/Footer";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(""); // loading | success | error

  // ================= VALIDATION =================
  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message cannot be empty";
    }

    return newErrors;
  };

  // ================= HANDLE CHANGE =================
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });

    // Clear error while typing
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // ================= HANDLE SUBMIT =================
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("loading");

    emailjs
      .send(
        "service_t8zj96l",
        "template_yyo96is",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "OIpMVx20hFQey6-Tl"
      )
      .then(() => {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });

        // Clear success after 4 sec
        setTimeout(() => {
          setStatus("");
        }, 4000);
      })
      .catch((error) => {
        console.error(error);
        setStatus("error");

        setTimeout(() => {
          setStatus("");
        }, 4000);
      });
  };

  return (
    <div className="min-h-screen bg-white font-lato">
      <section className="pt-28 pb-32">
        <div className="max-w-[1120px] mx-auto px-6">

          {/* HEADING */}
          <h1 className="font-raleway font-bold text-[24px] leading-[30px] text-[#071477] mb-4">
            Let’s talk
          </h1>

          <p className="text-[18px] leading-[30px] text-[#8A90B2] mb-16 max-w-[720px]">
            I’m always open to conversations about design, work, or something you
            read here that resonated with you.
          </p>

          {/* SUCCESS / ERROR MESSAGE */}
          {status === "success" && (
            <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-md">
              ✅ Message sent successfully!
            </div>
          )}

          {status === "error" && (
            <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-md">
              ❌ Something went wrong. Try again.
            </div>
          )}

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-10">

            {/* NAME */}
            <div>
              <label className="block text-[16px] font-medium text-[#071477] mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="What should I call you?"
                value={form.name}
                onChange={handleChange}
                className="w-full max-w-[720px] px-4 py-3 border border-[#D9DEEF] rounded-md text-[16px] focus:outline-none focus:border-[#1028CD]"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-[16px] font-medium text-[#071477] mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Where can I reach you?"
                value={form.email}
                onChange={handleChange}
                className="w-full max-w-[720px] px-4 py-3 border border-[#D9DEEF] rounded-md text-[16px] focus:outline-none focus:border-[#1028CD]"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block text-[16px] font-medium text-[#071477] mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows={6}
                placeholder="What’s on your mind…"
                value={form.message}
                onChange={handleChange}
                className="w-full max-w-[720px] px-4 py-3 border border-[#D9DEEF] rounded-md text-[16px] resize-none focus:outline-none focus:border-[#1028CD]"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-[#071477] text-white text-[16px] font-medium px-6 py-3 rounded-md hover:bg-[#1028CD] transition-colors disabled:opacity-60"
            >
              {status === "loading" ? "Sending..." : "Send message"}
            </button>

          </form>

          {/* OTHER LINKS */}
          <div className="mt-20">
            <p className="text-[15px] text-[#8A90B2] mb-4">
              Prefer another way to connect?
            </p>

            <div className="flex items-center gap-8 text-[15px] text-[#3D4367]">
              <a
                href="mailto:ishauptodesign@gmail.com"
                className="hover:text-[#1028CD] transition"
              >
                Email
              </a>
              <a href="https://www.linkedin.com/in/ishauptodesign/" className="hover:text-[#1028CD] transition">
                LinkedIn
              </a>
              <a href="https://x.com/_ishasahu" className="hover:text-[#1028CD] transition">
                Twitter
              </a>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
