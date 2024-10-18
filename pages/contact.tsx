import Head from 'next/head';
import Layout from '../pages/components/Layout';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <Layout>
      <Head>
        <title>Contact Us - Odisha Paradise Tours</title>
      </Head>

      <div className="max-w-2xl mx-auto p-6">
        <h2 className="text-3xl font-semibold text-center text-[#316b9e]">Get in Touch</h2>
        <p className="mt-2 text-center text-gray-600">
          We would love to hear from you! Fill out the form below and we’ll get back to you as soon as possible.
        </p>

        <form className="mt-6">
          <motion.div
            className="mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <label className="block mb-1" htmlFor="name">Name</label>
            <input type="text" id="name" className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </motion.div>
          <motion.div
            className="mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <label className="block mb-1" htmlFor="email">Email</label>
            <input type="email" id="email" className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </motion.div>
          <motion.div
            className="mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <label className="block mb-1" htmlFor="message">Message</label>
            <textarea id="message" rows={4} className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
          </motion.div>
          <motion.button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </Layout>
  );
};

export default Contact;
