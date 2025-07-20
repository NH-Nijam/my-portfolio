"use client";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div id="contact" className="bg-[#0D111C] text-white">
      <section className="py-20 px-4 max-w-7xl mx-auto" id="contact">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold">Let’s Connect</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto mt-3 mb-5 rounded"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? Fill out the form below and let’s talk.
          </p>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Left Info Panel */}
          <motion.div
            className="space-y-6"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start space-x-4">
              <div className="text-green-500 text-2xl mt-1">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Address</h4>
                <p className="text-gray-400">A108 Adam Street, New York, NY 535022</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-green-500 text-2xl mt-1">
                <FaPhoneAlt />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Call Us</h4>
                <p className="text-gray-400">+1 5589 55488 55</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-green-500 text-2xl mt-1">
                <FaEnvelope />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Email Us</h4>
                <p className="text-gray-400">info@example.com</p>
              </div>
            </div>

            <div className="mt-8">
              <iframe
                className="w-full h-64 rounded-xl border border-green-500"
                src="https://maps.google.com/maps?q=Downtown%20Conference%20Center,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="First Name"
                  className="bg-[#141B2E] text-white border border-gray-600 focus:border-green-500 focus:ring-1 focus:ring-green-500 rounded px-4 py-3 w-full outline-none transition"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="bg-[#141B2E] text-white border border-gray-600 focus:border-green-500 focus:ring-1 focus:ring-green-500 rounded px-4 py-3 w-full outline-none transition"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="bg-[#141B2E] text-white border border-gray-600 focus:border-green-500 focus:ring-1 focus:ring-green-500 rounded px-4 py-3 w-full outline-none transition"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-[#141B2E] text-white border border-gray-600 focus:border-green-500 focus:ring-1 focus:ring-green-500 rounded px-4 py-3 w-full outline-none transition"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="bg-[#141B2E] text-white border border-gray-600 focus:border-green-500 focus:ring-1 focus:ring-green-500 rounded px-4 py-3 w-full outline-none transition"
              />
              <textarea
                placeholder="Your Message"
                rows={6}
                className="bg-[#141B2E] text-white border border-gray-600 focus:border-green-500 focus:ring-1 focus:ring-green-500 rounded px-4 py-3 w-full outline-none transition"
              ></textarea>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-500 hover:bg-green-600 transition-colors duration-200 text-white font-bold px-8 py-3 rounded-full w-full md:w-auto"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
