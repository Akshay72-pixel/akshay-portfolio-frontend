import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      await axios.post(import.meta.env.VITE_API_URL, form);
      console.log("Hii");
      setStatus("Message sent — check your Gmail.");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.log(err);
      setStatus("Failed to send. Try again.");
    }
  };

  return (
    <section id="contact" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-6">Contact</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <input name="name" value={form.name} onChange={handleChange}
          className="w-full bg-[var(--card)] border border-[rgba(255,255,255,0.03)] p-3 rounded text-white"
          placeholder="Your name" required />
        <input name="email" value={form.email} onChange={handleChange}
          className="w-full bg-[var(--card)] border border-[rgba(255,255,255,0.03)] p-3 rounded text-white"
          placeholder="Your email" required />
        <textarea name="message" value={form.message} onChange={handleChange}
          className="w-full bg-[var(--card)] border border-[rgba(255,255,255,0.03)] p-3 rounded text-white" rows={6}
          placeholder="Your message" required />
        <div className="flex items-center justify-between">
          <button type="submit" className="bg-[var(--accent)] px-5 py-2 rounded text-white">Send</button>
          <p className="text-[var(--muted)]">{status}</p>
        </div>
      </form>
    </section>
  );
};

export default Contact;