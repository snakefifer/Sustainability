import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from '../components/ui/Hero';
import Button from '../components/ui/Button';

const Home = () => {
  return (
    <div>
      <Hero
        title="Protect Our Oceans: Fish Sustainably for the Future."
        backgroundImage="https://images.pexels.com/photos/3894878/pexels-photo-3894878.jpeg"
        buttonText="Learn How"
        buttonLink="/solutions"
      />

      <section className="section bg-white">
        <div className="container mx-auto">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="font-heading text-3xl md:text-4xl text-navy mb-6">Why Sustainable Fishing Matters</h2>
            <p className="text-lg text-gray-700 mb-8">
              Our oceans are facing unprecedented threats from overfishing, habitat destruction, and climate change. 
              As recreational fishers, we have both the opportunity and responsibility to protect marine ecosystems 
              while enjoying our passion. Sustainable fishing practices ensure healthy fish populations, thriving 
              ecosystems, and secure fishing opportunities for generations to come.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/problems">
                <Button variant="secondary">Learn About The Issues</Button>
              </Link>
              <Link to="/solutions">
                <Button variant="primary">Discover Solutions</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section bg-light-blue">
        <div className="container mx-auto">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                className="flex flex-col justify-center"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <h2 className="font-heading text-3xl md:text-4xl text-navy mb-6">The Mission</h2>
                <p className="text-lg text-gray-700 mb-4">
                  To educate and empower recreational fishers with knowledge, tools, and practices 
                  that protect our oceans while preserving the joy of fishing for future generations.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Through education, community engagement, and promoting responsible practices, 
                  I aim to create a global movement of environmentally-conscious anglers.
                </p>
                <Link to="/pledge">
                  <Button variant="success">Join The Cause</Button>
                </Link>
              </motion.div>

              <motion.div
                className="rounded-xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <img 
                  src={`${import.meta.env.BASE_URL}home-fishing.jpg`} 
                  alt="Sustainable fishing practices" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="font-heading text-3xl md:text-4xl text-navy mb-6">Take Action Today</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              Ready to make a difference? Explore the resources, learn about sustainable practices, 
              and join other anglers who have pledged to fish responsibly.
            </p>
            <Link to="/pledge">
              <Button variant="success" size="lg">Make The Pledge</Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;