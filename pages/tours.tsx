import Head from 'next/head';
import Layout from '../pages/components/Layout';
import { motion } from 'framer-motion';

const Tours = () => {
  return (
    <Layout>
      <Head>
        <title>Tours - Odisha Paradise Tours</title>
      </Head>

      <h2 className="text-3xl font-semibold text-center mt-10 mb-6 text-[#316b9e]">Explore Odisha with Us</h2>
      
      <div className="max-w-4xl mx-auto px-4">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {toursData.map((tour, index) => (
            <motion.li
              key={index}
              className="border rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h3 className="text-xl font-bold mb-2 text-[#316b9e]">{tour.title}</h3>
              <p className="text-gray-700">{tour.description}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

// Sample tour data
const toursData = [
  {
    title: 'Puri Beach Tour',
    description: 'Enjoy a relaxing day at Puri Beach with our guided tour.',
  },
  {
    title: 'Bhubaneswar Temple Tour',
    description: 'Discover the ancient temples of Bhubaneswar.',
  },
  {
    title: 'Konark Sun Temple Tour',
    description: 'Visit the UNESCO World Heritage Site of Konark Sun Temple.',
  },
  {
    title: 'Chilika Lake Tour',
    description: 'Experience the stunning beauty of Chilika Lake, the largest coastal lagoon in India.',
  },
  {
    title: 'Odisha Tribal Tour',
    description: 'Immerse yourself in the rich culture of Odisha’s tribal communities.',
  },
  {
    title: 'Khandagiri and Udayagiri Tour',
    description: 'Explore the ancient rock-cut caves of Khandagiri and Udayagiri.',
  },
];

export default Tours;
