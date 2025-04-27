import React from 'react';
import { motion } from 'framer-motion';
import ProblemCard from '../components/sections/ProblemCard';
import { Anchor, Fish, Trash2, Thermometer, Waves } from 'lucide-react';

const Problems = () => {
  const problems = [
    {
      id: 'overfishing',
      title: "Overfishing",
      description: "Harvesting fish faster than populations can reproduce leads to depleted stocks and ecosystem imbalance. Globally, 34% of fish stocks are already being fished at biologically unsustainable levels.",
      icon: Fish,
      imageSrc: "https://images.pexels.com/photos/3707822/pexels-photo-3707822.jpeg"
    },
    {
      id: 'habitat',
      title: "Habitat Degradation",
      description: "Destructive fishing practices damage essential habitats like coral reefs, seagrass beds, and mangroves. These habitats provide breeding grounds and shelter for countless marine species.",
      icon: Anchor,
      imageSrc: "https://images.pexels.com/photos/1645028/pexels-photo-1645028.jpeg"
    },
    {
      id: 'bycatch',
      title: "Bycatch & Waste",
      description: "Unintended capture of non-target species threatens many marine animals. Nearly 40% of global marine catch is bycatch, often discarded, wasting valuable resources and harming vulnerable species.",
      icon: Trash2,
      imageSrc: "https://images.pexels.com/photos/2318555/pexels-photo-2318555.jpeg"
    },
    {
      id: 'climate',
      title: "Climate Change",
      description: "Rising ocean temperatures and acidification stress marine ecosystems. Climate change causes coral bleaching, alters migration patterns, and threatens the survival of temperature-sensitive species.",
      icon: Thermometer,
      imageSrc: "https://images.pexels.com/photos/1295036/pexels-photo-1295036.jpeg"
    },
    {
      id: 'pollution',
      title: "Ocean Pollution",
      description: "Plastics, chemicals, and other pollutants harm marine life and their habitats. About 8 million tons of plastic waste enter our oceans annually, affecting marine species through ingestion and entanglement.",
      icon: Waves,
      imageSrc: `${import.meta.env.BASE_URL}pollution.png`
    }
  ];

  return (
    <div>
      <div className="bg-navy py-20 px-4">
        <div className="container mx-auto">
          <motion.div 
            className="text-center max-w-3xl mx-auto text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-heading text-4xl md:text-5xl mb-6">The Challenges Facing Our Oceans</h1>
            <p className="text-lg md:text-xl">
              Understanding these issues is the first step toward creating positive change.
              Learn about the key threats to our marine ecosystems and how they impact the future of fishing.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="section bg-light-blue">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <ProblemCard
                key={problem.id}
                id={problem.id}
                title={problem.title}
                description={problem.description}
                icon={problem.icon}
                imageSrc={problem.imageSrc}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container mx-auto">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="font-heading text-3xl md:text-4xl text-navy mb-6">The Impact on Recreational Fishing</h2>
            <p className="text-lg text-gray-700 mb-6">
              These environmental challenges directly affect recreational fishing experiences. Depleted stocks result in smaller catches and fewer fish. Damaged habitats reduce fish populations and diversity. Pollution makes certain areas unsafe for fishing and consumption.
            </p>
            <p className="text-lg text-gray-700">
              But there's hope. As recreational fishers, we can be part of the solution by adopting sustainable practices and advocating for marine conservation.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Problems;