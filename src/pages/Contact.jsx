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
    // backend later
    console.log(form);
  };

  return (
    <div className="min-h-screen bg-white font-lato">

      {/* ================= CONTACT CONTENT ================= */}
      <section className="pt-28 pb-32">
        <div className="px-6 md:px-[120px] max-w-[880px]">

          {/* HEADING */}
          <h1 className="font-raleway font-bold text-[24px] leading-[30px] text-[#071477] mb-4">
            Let’s talk
          </h1>

          {/* SUBTEXT */}
          <p className="text-[18px] leading-[30px] text-[#8A90B2] mb-16 max-w-[720px]">
            I’m always open to conversations about design, work, or something you
            read here that resonated with you.
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
                placeholder="What should I call you?"
                value={form.name}
                onChange={handleChange}
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

            {/* MESSAGE */}
            <div>
              <label className="block text-[16px] font-medium text-[#071477] mb-2">
                Message
              </label>
              <textarea
                name="message"
                placeholder="What’s on your mind…"
                rows={6}
                value={form.message}
                onChange={handleChange}
                className="
                  w-full max-w-[720px]
                  px-4 py-3
                  border border-[#D9DEEF]
                  rounded-md
                  text-[16px]
                  text-[#3D4367]
                  placeholder-[#A1A7C4]
                  resize-none
                  focus:outline-none
                  focus:border-[#1028CD]
                "
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="
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

          {/* OTHER LINKS */}
          <div className="mt-20">
            <p className="text-[15px] text-[#8A90B2] mb-4">
              Prefer another way to connect?
            </p>

            <div className="flex items-center gap-8 text-[15px] text-[#3D4367]">
              <a
                href="mailto:hello@example.com"
                className="hover:text-[#1028CD] transition"
              >
                Email
              </a>
              <a
                href="#"
                className="hover:text-[#1028CD] transition"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="hover:text-[#1028CD] transition"
              >
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
