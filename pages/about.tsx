import Head from 'next/head';
import Layout from '../pages/components/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link'; // Import Link for navigation

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
          When you are planning your vacation in Odisha, let us assist you with your holiday. We offer an online personalized itinerary planning & reservation service, where you receive a totally easy, simple & customized itinerary that meets your specific requirements. Odisha Paradise Tours & Travels is one of the leading travel aggregators in Odisha. Our core value differentiator is the delivery of the fastest & most trusted user experience. We provide the best services in the region and are one of the fastest-growing tour operators in the area. With our dedicated staff that works 24/7 around the clock, we make your holiday experience one of the lasting memories forever. 
          Go ahead & explore the destination with one of the best travel companies in Odisha. 
          “Let&apos;s start planning your vacation & make it truly memorable.”
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
          Our mission is to provide memorable travel experiences that enrich our clients' understanding of Odisha&apos;s rich culture, history, and natural beauty. We strive to create lasting connections between our guests and the destinations they visit.
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
          <li>Customer Satisfaction: We prioritize our customers&apos; needs and work tirelessly to ensure they have the best possible experience.</li>
          <li>Integrity: We operate with transparency and honesty, ensuring that our clients receive genuine services and value.</li>
          <li>Respect for Nature: We promote sustainable tourism practices to protect the beautiful landscapes and ecosystems of Odisha.</li>
          <li>Cultural Appreciation: We celebrate the diversity of Odisha&apos;s culture and promote respect for local traditions and communities.</li>
        </motion.ul>

        <motion.h3 
          className="text-3xl font-semibold mb-2"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Why Us?
        </motion.h3>
        <motion.ul 
          className="list-disc list-inside text-lg text-gray-700 mb-4"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <li>Customised stay options tailor-made to suit your needs.</li>
          <li>A personal agent for round-the-clock assistance.</li>
          <li>Affordable prices that don&apos;t strain your pocket.</li>
          <li>We believe in providing safe & comfortable services to the guests.</li>
          <li>Free custom planning for trips to Odisha.</li>
        </motion.ul>

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
          We would love to help you plan your next adventure in Odisha! Feel free to <Link href="/contact"><a className="text-blue-600 underline">contact us</a></Link> for more information about our tours and services.
        </motion.p>

        <motion.h3 
          className="text-3xl font-semibold mb-2"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 1 }}
        >
          Contact Information
        </motion.h3>
        <motion.p 
          className="text-lg text-gray-700 mb-4"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          Plot-1218, LIG K-4, Khandagiri, Bhubaneswar, Odisha<br />
          Mob: 7008131282<br />
          Email: <a href="mailto:odishaparadise@gmail.com" className="text-blue-600 underline">odishaparadise@gmail.com</a>
        </motion.p>
      </div>
    </Layout>
  );
};

export default About;
