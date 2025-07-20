"use client";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <section className="py-16 px-4 container" id="contact">
      {/* Header */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold">Contact</h2>
        <div className="w-16 h-1 bg-green-500 mx-auto mt-2 mb-4"></div>
        <p className="text-gray-600">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </p>
      </motion.div>

      {/* Content Grid */}
      <motion.div
        className="grid md:grid-cols-2 gap-10 p-6"
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
            <div className="text-green-500 text-xl">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h4 className="font-bold">Address</h4>
              <p>A108 Adam Street, New York, NY 535022</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="text-green-500 text-xl">
              <FaPhoneAlt />
            </div>
            <div>
              <h4 className="font-bold">Call Us</h4>
              <p>+1 5589 55488 55</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="text-green-500 text-xl">
              <FaEnvelope />
            </div>
            <div>
              <h4 className="font-bold">Email Us</h4>
              <p>info@example.com</p>
            </div>
          </div>

          <div className="mt-6">
            <iframe
              className="w-full h-64 rounded"
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
          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="First Name"
                className="border border-gray-300 rounded px-4 py-3 w-full"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border border-gray-300 rounded px-4 py-3 w-full"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="number"
                placeholder="Your Phone"
                className="border border-gray-300 rounded px-4 py-3 w-full"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-300 rounded px-4 py-3 w-full"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="border border-gray-300 rounded px-4 py-3 w-full"
            />
            <textarea
              placeholder="Message"
              rows="6"
              className="border border-gray-300 rounded px-4 py-2 w-full"
            ></textarea>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-full"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}
