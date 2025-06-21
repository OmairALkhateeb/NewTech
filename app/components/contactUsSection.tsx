'use client';

import React, { useState } from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
// import Typewriter from 'typewriter-effect';
import { Typewriter } from 'react-simple-typewriter';


export default function ContactUsSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can replace this with an API call
    alert(`Message sent from ${name} (${email}): ${message}`);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen p-3 sm:p-5 md:p-10 bg-[#1C1F23] flex justify-center items-center"
    >
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center gap-8">
        {/* Header */}
        <div className="flex flex-col items-center gap-4">
          <img
            src="/Scroll.png"
            alt="Contact Icon"
            className="w-24 h-24 object-contain mb-8"
          />
          <h2 className="text-4xl font-bold text-white text-center mb-4">
            Contact Us
          </h2>


          <p className="text-center text-gray-300 text-base max-w-xl mx-auto mb-8 min-h-[72px]">
  <Typewriter
    words={[
      "We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out."
    ]}
    loop={1}
    cursor
    cursorStyle="|"
    typeSpeed={70}
    deleteSpeed={50}
    delaySpeed={1500}
  />
</p>
          {/* <p className="text-center text-gray-300 text-base max-w-xl mx-auto mb-8 min-h-[72px]">
            <Typewriter
              options={{
                delay: 40,
                cursor: '|',
                autoStart: true,
                loop: false,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    )
                  .start();
              }}
            />
          </p> */}
        </div>

        <h3 className="inline-flex text-xl md:text-2xl font-bold mb-6 md:mb-12 drop-shadow-lg bg-[#292F36] border-2 border-[#12F7D6] rounded-tr-2xl rounded-bl-2xl px-6 py-3 text-[#12F7D6]">
          Send message
        </h3>

        <form onSubmit={handleSubmit} className="w-full space-y-6">
          {/* Name & Email in one row */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full">
              <label className="block text-white text-sm mb-1">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full border-b border-[#12F7D6] bg-transparent text-white placeholder-white focus:outline-none focus:border-b-2 focus:border-[#12F7D6] py-2"
              />
            </div>

            <div className="w-full">
              <label className="block text-white text-sm mb-1">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border-b border-[#12F7D6] bg-transparent text-white placeholder-white focus:outline-none focus:border-b-2 focus:border-[#12F7D6] py-2"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-white text-sm mb-1">Message</label>
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={2}
              className="w-full border-b border-[#12F7D6] bg-transparent text-white placeholder-white focus:outline-none focus:border-b-2 focus:border-[#12F7D6] py-2"
            />
          </div>

          {/* Centered Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="flex items-center gap-2 bg-[#12F7D6] text-black font-medium px-6 py-2 rounded-full hover:bg-[#0ec7b3] transition"
            >
              Send message
              <PaperAirplaneIcon className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
