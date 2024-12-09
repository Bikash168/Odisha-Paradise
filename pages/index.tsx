import Head from 'next/head';
import Layout from '../pages/components/Layout';
import Link from 'next/link';
import { useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { motion } from 'framer-motion';
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface TourCardProps {
  imageSrc: string;
  title: string;
  description: string;
  link: string;
}

const TourCard: React.FC<TourCardProps> = ({ imageSrc, title, description, link }) => (
  <div className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-300">
    <img src={imageSrc} alt={title} className="w-full h-48 object-cover rounded" />
    <h3 className="text-xl font-semibold mt-2">{title}</h3>
    <p>{description}</p>
    <Link href={link}>
      <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">Learn More</button>
    </Link>
  </div>
);

interface TestimonialProps {
  text: string;
  author: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ text, author }) => (
  <div className="bg-white p-4 rounded shadow transition-shadow duration-300 hover:shadow-lg">
    <p className="italic">"{text}"</p>
    <h4 className="font-semibold mt-2">- {author}</h4>
  </div>
);

const Home = () => {
  useEffect(() => {
    // Initialize animations or libraries here
  }, []);

  return (
    <Layout>
      <Head>
        <title>Odisha Paradise Tours and Travels</title>
        <meta name="description" content="Explore the beauty of Odisha, India, and the world with our exclusive tours and travel services." />
      </Head>

      {/* Hero Section */}
      <section className="relative w-full h-[800px]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('../images/hero-image.jpg')" }}
        >
          <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-50">
            <h1 className="text-white text-4xl md:text-6xl font-bold animate-bounce text-center">Welcome to Odisha Paradise!<br />Your Gateway to Global Destinations</h1>
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
            <TourCard
              imageSrc="../images/tour1.jpg"
              title="Odisha Wonders"
              description="Explore the heritage, beaches, and culture of Odisha."
              link="/tours/odisha"
            />
            <TourCard
              imageSrc="../images/tour2.jpg"
              title="National Highlights"
              description="Discover India's diverse landscapes and iconic destinations."
              link="/tours/india"
            />
            <TourCard
              imageSrc="../images/tour3.jpg"
              title="International Adventures"
              description="Experience the best of global travel with our curated packages."
              link="/tours/international"
            />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold mb-4">About Us</h2>
              <p className="mb-4">
                At Odisha Paradise Tours and Travels, we specialize in offering bespoke travel experiences. From the ancient temples of Odisha to exotic international destinations, we are your trusted partner in creating unforgettable journeys.
              </p>
              <p className="mb-4">
              <p className="mb-4">
                At Odisha Paradise Tours and Travels, we specialize in offering bespoke travel experiences. From the ancient temples of Odisha to exotic international destinations, we are your trusted partner in creating unforgettable journeys.
              </p>
              </p>
              <Link href="/about">
                <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">Learn More</button>
              </Link>
            </div>
            <div className="md:w-1/2">
              <img src="../images/about-us.jpg" alt="About Us" className="rounded shadow-lg" />
            </div>
          </div>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Testimonial text="An incredible tour of Odisha! Highly professional service." author="Amit S." />
            <Testimonial text="Our international trip was seamless and amazing." author="Neha P." />
            <Testimonial text="A well-organized and enjoyable national tour experience." author="Rahul M." />
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-10 bg-orange-400 text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-4">Ready to Explore the World?</h2>
          <p className="mb-6">
            Whether you're seeking adventure, culture, or relaxation, we have something for everyone. Book your tour today and embark on a journey of discovery!
          </p>
          <Link href="/contact">
            <button className="bg-white text-blue-600 py-2 px-4 rounded hover:bg-gray-200 transition duration-300">
              Contact Us
            </button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Home;