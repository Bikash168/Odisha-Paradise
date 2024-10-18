import Head from 'next/head';
import Layout from '../pages/components/Layout';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Layout>
      <Head>
        <title>About Us - Odisha Paradise Tours</title>
        <meta name="description" content="Learn more about Odisha Paradise Tours and Travels, our mission, and the services we offer." />
      </Head>

      <div className="max-w-4xl mx-auto p-6 mt-8">
        <motion.h2 
          className="text-4xl font-semibold text-center mb-4 text-[#316b9e]"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
        >
          About Us
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-700 mb-6"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Odisha Paradise Tours and Travels is a premier travel agency dedicated to showcasing the beauty and cultural heritage of Odisha. 
          With a passion for travel and a commitment to customer satisfaction, we offer tailor-made tours designed to meet the unique needs 
          of our clients.
        </motion.p>

        <motion.h3 
          className="text-3xl font-semibold mb-2"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Our Mission
        </motion.h3>
        <motion.p 
          className="text-lg text-gray-700 mb-4"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Our mission is to provide memorable travel experiences that enrich our clients' understanding of Odisha's rich culture, history, 
          and natural beauty. We strive to create lasting connections between our guests and the destinations they visit.
        </motion.p>

        <motion.h3 
          className="text-3xl font-semibold mb-2"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Our Values
        </motion.h3>
        <motion.ul 
          className="list-disc list-inside text-lg text-gray-700 mb-4"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <li>Customer Satisfaction: We prioritize our customers' needs and work tirelessly to ensure they have the best possible experience.</li>
          <li>Integrity: We operate with transparency and honesty, ensuring that our clients receive genuine services and value.</li>
          <li>Respect for Nature: We promote sustainable tourism practices to protect the beautiful landscapes and ecosystems of Odisha.</li>
          <li>Cultural Appreciation: We celebrate the diversity of Odisha's culture and promote respect for local traditions and communities.</li>
        </motion.ul>

        <motion.h3 
          className="text-3xl font-semibold mb-2"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Why Choose Us?
        </motion.h3>
        <motion.p 
          className="text-lg text-gray-700 mb-4"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          At Odisha Paradise Tours and Travels, we pride ourselves on our local expertise, personalized service, and commitment to quality. 
          Our team of experienced travel professionals is dedicated to crafting unique itineraries that cater to your interests and budget. 
          Whether you're looking for adventure, relaxation, or cultural immersion, we have the perfect tour for you!
        </motion.p>

        <motion.h3 
          className="text-3xl font-semibold mb-2"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Get in Touch
        </motion.h3>
        <motion.p 
          className="text-lg text-gray-700 mb-4"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          We would love to help you plan your next adventure in Odisha! Feel free to <a href="/contact" className="text-blue-600 underline">contact us</a> for more information about our tours and services.
        </motion.p>
      </div>
    </Layout>
  );
};

export default About;
