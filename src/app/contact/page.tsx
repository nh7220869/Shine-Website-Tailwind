"use client";
import { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage('Sending...');

    // Simulating form submission (backend endpoint needed)
    await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    setStatusMessage('Message sent successfully!');
  };

  return (
    <section className="bg-light-green py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-dark-green mb-12 font-serif animate-shake">Get in Touch</h2>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto text-black bg-white p-8 rounded-lg shadow-lg space-y-6">
          <div>
            <label htmlFor="name" className="block text-left text-dark-green text-lg font-medium">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-[maroon]"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-left text-dark-green text-lg font-medium">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-sky-4"
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-left text-dark-green text-lg font-medium">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-left text-dark-green text-lg font-medium">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400"
              rows={5}
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-sky-400 text-white px-6 py-3 rounded-lg shadow-md hover:bg-yellow-600 transition duration-200"
            >
              Send Message
            </button>
          </div>
        </form>

        {statusMessage && (
          <div className="mt-6 text-center text-xl font-semibold text-yellow-500">
            {statusMessage}
          </div>
        )}

       
      </div>
    </section>
  );
};

export default ContactPage;
