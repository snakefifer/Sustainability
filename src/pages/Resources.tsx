import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import ResourceLink from '../components/sections/ResourceLink';
import Button from '../components/ui/Button';

const Resources = () => {
  const resources = [
    {
      title: "NOAA Fisheries",
      description: "Official resources on sustainable fishing practices, fish populations, and regulations from the National Oceanic and Atmospheric Administration.",
      url: "https://www.fisheries.noaa.gov/topic/recreational-fishing"
    },
    {
      title: "State Fishing Regulations",
      description: "Find up-to-date fishing regulations, licensing requirements, and conservation information specific to your state.",
      url: "https://www.takemefishing.org/get-a-fishing-license/"
    },
    {
      title: "Monterey Bay Aquarium Seafood Watch",
      description: "Recommendations for which seafood items are best choices or good alternatives, and which to avoid based on sustainability.",
      url: "https://www.seafoodwatch.org/"
    },
    {
      title: "Marine Conservation Institute",
      description: "Learn about marine protected areas and conservation efforts to preserve ocean ecosystems and biodiversity.",
      url: "https://marine-conservation.org/"
    },
    {
      title: "The Ocean Foundation",
      description: "Resources on ocean conservation, sustainable fishing initiatives, and opportunities to support marine protection projects.",
      url: "https://oceanfdn.org/"
    }
  ];

  return (
    <div>
      <div className="bg-green py-20 px-4">
        <div className="container mx-auto">
          <motion.div 
            className="text-center max-w-3xl mx-auto text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-heading text-4xl md:text-5xl mb-6">Helpful Resources for Sustainable Anglers</h1>
            <p className="text-lg md:text-xl">
              Expand your knowledge with these valuable resources that promote sustainable fishing practices
              and marine conservation. Stay informed to make a positive impact on our oceans.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {resources.map((resource, index) => (
              <ResourceLink
                key={index}
                title={resource.title}
                description={resource.description}
                url={resource.url}
                index={index}
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
            <h2 className="font-heading text-3xl md:text-4xl text-navy mb-6">Community Knowledge</h2>
            <p className="text-lg text-gray-700 mb-4">
              The fishing community holds valuable wisdom about sustainable practices and local ecosystems.
              Share your knowledge and learn from others to collectively promote ocean health.
            </p>
            <p className="text-lg text-gray-700">
              Remember to check with local fishing authorities and organizations for region-specific
              information about sustainable fishing practices in your area.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Resources;