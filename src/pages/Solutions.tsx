import React from 'react';
import { motion } from 'framer-motion';
import SolutionItem from '../components/sections/SolutionItem';
import { Scale, Ruler, Fish, Clipboard, Info, Heart } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      title: "Practice Catch and Release",
      description: "Use barbless hooks, minimize handling time, and release fish gently back into the water to ensure their survival. Consider keeping only what you need for a meal and releasing the rest.",
      icon: Fish
    },
    {
      title: "Follow Size and Bag Limits",
      description: "Respect local fishing regulations regarding minimum size limits and daily bag limits. These rules are designed to protect breeding populations and maintain sustainable fish stocks.",
      icon: Ruler
    },
    {
      title: "Use Sustainable Tackle",
      description: "Choose environmentally-friendly fishing gear like lead-free weights, biodegradable fishing line, and hooks that rust quickly if lost. Properly dispose of old fishing line and tackle.",
      icon: Scale
    },
    {
      title: "Keep a Fishing Log",
      description: "Record your catches, including species, size, location, and conditions. This data helps you track patterns over time and can contribute to citizen science efforts monitoring fish populations.",
      icon: Clipboard
    },
    {
      title: "Educate Yourself",
      description: "Learn to identify different fish species and understand their life cycles and habitat needs. Stay informed about threatened or endangered species in your local waters and fishing regulations.",
      icon: Info
    },
    {
      title: "Support Conservation Efforts",
      description: "Join or donate to organizations working to protect marine ecosystems. Participate in beach cleanups, habitat restoration projects, and advocacy for sustainable fishing policies.",
      icon: Heart
    }
  ];

  return (
    <div>
      <div className="bg-ocean-blue py-20 px-4">
        <div className="container mx-auto">
          <motion.div 
            className="text-center max-w-3xl mx-auto text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-heading text-4xl md:text-5xl mb-6">Simple Actions Every Recreational Fisher Can Take</h1>
            <p className="text-lg md:text-xl">
              Small changes in how we fish can make a big difference for our oceans.
              Explore these practical steps you can take to become a more sustainable angler.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="space-y-6 max-w-4xl mx-auto">
            {solutions.slice(0, 3).map((solution, index) => (
              <SolutionItem
                key={index}
                title={solution.title}
                description={solution.description}
                icon={solution.icon}
                index={index}
              />
            ))}
          </div>
          
          <div className="my-16 bg-light-blue rounded-xl p-8 text-center max-w-4xl mx-auto">
            <motion.blockquote
              className="text-2xl font-heading italic text-navy"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Sustainability is not about giving up fishing — it's about ensuring we can fish forever.
            </motion.blockquote>
          </div>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            {solutions.slice(3).map((solution, index) => (
              <SolutionItem
                key={index + 3}
                title={solution.title}
                description={solution.description}
                icon={solution.icon}
                index={index + 3}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-light-blue">
        <div className="container mx-auto">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="font-heading text-3xl md:text-4xl text-navy mb-6">The Collective Impact</h2>
            <p className="text-lg text-gray-700 mb-6">
              When millions of recreational fishers adopt sustainable practices, the positive impact is enormous. 
              By fishing responsibly, we help conserve fish populations, protect marine habitats, 
              and ensure that future generations can experience the joy of fishing.
            </p>
            <p className="text-lg text-gray-700">
              Remember, even small changes in your fishing habits can make a meaningful difference 
              for our oceans and the communities that depend on them.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;