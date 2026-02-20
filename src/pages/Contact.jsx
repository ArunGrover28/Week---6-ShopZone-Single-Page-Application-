import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden grid md:grid-cols-2">

        {/* Left Info Section */}
        <div className="bg-indigo-600 text-white p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-indigo-100 mb-8">
            Have a question, feedback, or need support?  
            We’d love to hear from you.
          </p>

          <div className="space-y-4 text-indigo-100">
            <p>📍 New Delhi, India</p>
            <p>📧 support@shopzone.com</p>
            <p>📞 +91 98765 43210</p>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="p-10">
          <h3 className="text-2xl font-semibold mb-6">Contact Us</h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                placeholder="Write your message..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
