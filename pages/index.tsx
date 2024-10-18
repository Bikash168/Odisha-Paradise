import Head from 'next/head';
import Layout from '../pages/components/Layout';
import Link from 'next/link';
import { useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel'; // Install this package if you haven't already
import { motion } from 'framer-motion'; // Import Framer Motion

import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

const Home = () => {
  useEffect(() => {
    // Any animations or libraries can be initialized here
  }, []);

  return (
    <Layout>
      <Head>
        <title>Odisha Paradise Tours and Travels</title>
        <meta name="description" content="Explore the beauty of Odisha with our tours and travel services." />
      </Head>

      {/* Hero Section */}
      <section className="relative w-full h-[400px]">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('../images/hero-image.jpg')" }}>
          <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-50">
            <h1 className="text-white text-4xl font-bold animate-bounce">Welcome to Odisha Paradise!</h1>
          </div>
        </div>
      </section>

      {/* Featured Tours Section */}
      <section className="py-10 bg-gray-100">
        <div className="container mx-auto text-center">
          <motion.h2 
            className="text-4xl font-semibold mb-6 text-[#316b9e]"
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
          >
            Featured Tours
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Tour Card Example */}
            <TourCard 
              imageSrc="../images/tour1.jpg"
              title="Tour to Konark"
              description="Explore the beautiful Sun Temple of Konark."
              link="/tours1/konark"
            />
            <TourCard 
              imageSrc="../images/tour2.jpg"
              title="Puri Beach Tour"
              description="Enjoy the sandy beaches of Puri."
              link="/tours/puri"
            />
            <TourCard 
              imageSrc="../images/tour3.jpg"
              title="Chilika Lake Tour"
              description="Experience the beauty of Asia's largest coastal lagoon."
              link="/tours/chilika"
            />
          </div>
        </div>
      </section>

      {/* Image Carousel Section */}
      <section className="py-10">
        <div className="container mx-auto">
          <motion.h2 
            className="text-4xl font-semibold text-center mb-6 text-[#316b9e]"
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
          >
            Explore Odisha
          </motion.h2>
          <Carousel showArrows={true} infiniteLoop={true} autoPlay={true} interval={3000}>
            <div>
              <img src="../images/image1.jpg" alt="Image 1" />
            </div>
            <div>
              <img src="../images/image2.jpg" alt="Image 2" />
            </div>
            <div>
              <img src="../images/image3.jpg" alt="Image 3" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-10 bg-gray-100">
        <div className="container mx-auto text-center">
          <motion.h2 
            className="text-4xl font-semibold mb-6 text-[#316b9e]"
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
          >
            What Our Customers Say
          </motion.h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
            <Testimonial 
              text="An unforgettable experience! Highly recommended."
              author="- Customer Name"
            />
            <Testimonial 
              text="The best tours in Odisha! Everything was well organized."
              author="- Customer Name"
            />
            <Testimonial 
              text="Amazing sights and wonderful guides. Will book again!"
              author="- Customer Name"
            />
          </div>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="py-10 text-center bg-white">
        <div className="container mx-auto">
          <motion.h2 
            className="text-4xl font-semibold mb-4 text-[#316b9e]"
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
          >
            Discover Odisha's Unique Culture
          </motion.h2>
          <p className="text-lg text-gray-700 mb-4">
            Odisha is home to some of the most breathtaking landscapes, diverse cultures, and rich traditions in India. From its pristine beaches to ancient temples, every corner of Odisha has a story to tell.
          </p>
          <Link href="/about">
            <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">Learn More About Us</button>
          </Link>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-10 text-center bg-orange-400 text-white">
        <motion.h2 
          className="text-4xl font-semibold mb-4"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
        >
          Ready to Explore?
        </motion.h2>
        <Link href="/tours">
          <button className="mt-4 bg-white text-blue-600 py-2 px-4 rounded hover:bg-gray-200 transition duration-300">Explore Tours</button>
        </Link>
      </section>
    </Layout>
  );
};

// Define prop types for TourCard component
interface TourCardProps {
  imageSrc: string;
  title: string;
  description: string;
  link: string;
}

// TourCard Component
const TourCard: React.FC<TourCardProps> = ({ imageSrc, title, description, link }) => {
  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-300">
      <img src={imageSrc} alt={title} className="w-full h-48 object-cover rounded" />
      <h3 className="text-xl font-semibold mt-2">{title}</h3>
      <p>{description}</p>
      <Link href={link}>
        <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">Learn More</button>
      </Link>
    </div>
  );
};

// Define prop types for Testimonial component
interface TestimonialProps {
  text: string;
  author: string;
}

// Testimonial Component
const Testimonial: React.FC<TestimonialProps> = ({ text, author }) => {
  return (
    <div className="bg-white p-4 rounded shadow transition-shadow duration-300 hover:shadow-lg">
      <p>{text}</p>
      <h4 className="font-semibold mt-2">{author}</h4>
    </div>
  );
};

export default Home;
