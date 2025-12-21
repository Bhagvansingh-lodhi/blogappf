import React, { useState } from "react";
import Footer from "../components/Footer";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 🔒 Backend later (for now just UI)
    console.log(form);
  };

  return (
    <div className="min-h-screen bg-white font-lato">

      {/* ================= PAGE CONTENT ================= */}
      <section className="pt-28 pb-32">
        <div className="px-6 md:px-[120px] max-w-[900px]">

          {/* INTRO TEXT */}
          <p className="text-[18px] leading-[30px] text-[#8A90B2] mb-16">
            I'm always open to interesting conversations—about design, about work,
            about something you read here that you agreed or disagreed with.
          </p>

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
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                className="
                  w-full max-w-[720px]
                  px-4 py-3
                  border border-[#D9DEEF]
                  rounded-md
                  text-[16px]
                  placeholder-[#A1A7C4]
                  focus:outline-none
                  focus:border-[#1028CD]
                "
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-[16px] font-medium text-[#071477] mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                className="
                  w-full max-w-[720px]
                  px-4 py-3
                  border border-[#D9DEEF]
                  rounded-md
                  text-[16px]
                  placeholder-[#A1A7C4]
                  focus:outline-none
                  focus:border-[#1028CD]
                "
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block text-[16px] font-medium text-[#071477] mb-2">
                Message
              </label>
              <textarea
                name="message"
                placeholder="What's on your mind?"
                rows={6}
                value={form.message}
                onChange={handleChange}
                className="
                  w-full max-w-[720px]
                  px-4 py-3
                  border border-[#D9DEEF]
                  rounded-md
                  text-[16px]
                  placeholder-[#A1A7C4]
                  resize-none
                  focus:outline-none
                  focus:border-[#1028CD]
                "
              />
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="
                inline-flex
                items-center
                bg-[#071477]
                text-white
                text-[16px]
                font-medium
                px-6 py-3
                rounded-md
                hover:bg-[#1028CD]
                transition-colors
              "
            >
              Send message
            </button>
          </form>

          {/* OTHER CONTACT OPTIONS */}
          <div className="mt-20">
            <p className="text-[15px] text-[#8A90B2] mb-4">
              Prefer another way to connect?
            </p>

            <div className="flex items-center gap-8 text-[#3D4367] text-[15px]">
              <a href="mailto:hello@example.com" className="hover:text-[#1028CD] transition">
                Email
              </a>
              <a href="#" className="hover:text-[#1028CD] transition">
                LinkedIn
              </a>
              <a href="#" className="hover:text-[#1028CD] transition">
                Twitter
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <Footer />
    </div>
  );
};

export default Contact;
