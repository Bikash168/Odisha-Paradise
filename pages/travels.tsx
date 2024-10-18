import Head from 'next/head';
import Layout from './components/Layout';
import { motion } from 'framer-motion';

const Travel = () => {
  return (
    <Layout>
      <Head>
        <title>Travel - Odisha Paradise Tours</title>
        <meta name="description" content="Travel tips and destination highlights for Odisha." />
      </Head>

      {/* Hero Section */}
      <div className="bg-cover bg-center h-64 flex items-center justify-center text-white" style={{ backgroundImage: "url('/your-hero-image.jpg')" }}>
        <h1 className="text-4xl font-bold">Travel with Odisha Paradise</h1>
      </div>

      {/* Travel Tips Section */}
      <section className="my-10">
        <h2 className="text-3xl font-semibold text-center text-[#316b9e]">Travel Tips</h2>
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {travelTips.map((tip, index) => (
            <motion.div
              key={index}
              className="border p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-bold text-[#316b9e]">{tip.title}</h3>
              <p className="text-gray-700">{tip.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Destination Highlights Section */}
      <section className="my-10 bg-gray-100 p-6">
        <h2 className="text-3xl font-semibold text-center text-[#316b9e]">Destination Highlights</h2>
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {destinationHighlights.map((destination, index) => (
            <motion.div
              key={index}
              className="border p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-bold text-[#316b9e]">{destination.name}</h3>
              <p className="text-gray-700">{destination.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="my-10">
        <h2 className="text-3xl font-semibold text-center text-[#316b9e]">Featured Services</h2>
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {featuredServices.map((service, index) => (
            <motion.div
              key={index}
              className="border p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-bold text-[#316b9e]">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

// Sample data for travel tips
const travelTips = [
  {
    title: 'Pack Light',
    description: 'Traveling light will make your journey more comfortable. Only pack essentials.',
  },
  {
    title: 'Stay Hydrated',
    description: 'Carry a water bottle and stay hydrated while exploring.',
  },
  {
    title: 'Plan Ahead',
    description: 'Research your destinations and plan your itinerary in advance.',
  },
  {
    title: 'Respect Local Culture',
    description: 'Be aware of local customs and traditions to ensure a positive experience.',
  },
];

// Sample data for destination highlights
const destinationHighlights = [
  {
    name: 'Puri',
    description: 'Famous for its beaches and the Jagannath Temple, Puri offers a rich cultural experience.',
  },
  {
    name: 'Bhubaneswar',
    description: 'The capital city, known for its ancient temples and modern infrastructure.',
  },
  {
    name: 'Konark',
    description: 'Home to the Sun Temple, a UNESCO World Heritage Site showcasing stunning architecture.',
  },
];

// Sample data for featured services
const featuredServices = [
  {
    title: 'Customized Tours',
    description: 'Personalized itineraries to suit your preferences and interests.',
  },
  {
    title: 'Travel Assistance',
    description: '24/7 support to help you during your travel journey.',
  },
  {
    title: 'Accommodation Booking',
    description: 'Hassle-free booking of hotels and guesthouses at your destination.',
  },
];

export default Travel;
