import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Button from '../components/ui/Button';

const problemDetails = {
  overfishing: {
    title: "Overfishing: A Global Crisis",
    image: "https://images.pexels.com/photos/3707822/pexels-photo-3707822.jpeg",
    content: `Overfishing represents one of the most significant threats to ocean ecosystems worldwide. When fish are caught faster than they can reproduce, entire populations can collapse, disrupting marine food webs and threatening the livelihoods of millions who depend on fishing.

The statistics are alarming: according to the UN Food and Agriculture Organization, 34% of global fish stocks are being exploited at biologically unsustainable levels. This means that these populations are being depleted faster than they can recover naturally.

The impacts of overfishing extend far beyond just the targeted species. When a fish population is severely reduced, it can create a ripple effect throughout the entire ecosystem. Predator-prey relationships become unbalanced, affecting everything from tiny plankton to large marine mammals.

For recreational fishers, the effects of overfishing are becoming increasingly apparent. Popular fishing spots that once teemed with life now yield smaller catches, and some species that were once common are becoming rare. This isn't just about having fewer fish to catch – it's about maintaining the health and biodiversity of our oceans for future generations.

The good news is that fish populations can recover when given the chance. Studies have shown that implementing science-based fishing limits, creating marine protected areas, and adopting sustainable fishing practices can help depleted populations bounce back. As recreational fishers, we can contribute to this recovery by following bag limits, practicing catch and release, and supporting conservation efforts in our local waters.`
  },
  habitat: {
    title: "Habitat Degradation: Destroying Marine Homes",
    image: "https://images.pexels.com/photos/1645028/pexels-photo-1645028.jpeg",
    content: `Marine habitat degradation is a silent crisis occurring beneath the waves. Essential ecosystems like coral reefs, seagrass beds, and mangroves are disappearing at an alarming rate, taking with them the countless species that depend on these habitats for survival.

Coral reefs, often called the rainforests of the sea, are particularly vulnerable. These complex ecosystems provide shelter, breeding grounds, and feeding areas for thousands of marine species. Yet, they face multiple threats: rising ocean temperatures cause coral bleaching, ocean acidification weakens their skeletal structures, and physical damage from destructive fishing practices and coastal development causes direct destruction.

Seagrass meadows, which many don't even know exist, are equally important. These underwater gardens provide crucial nursery areas for juvenile fish, help stabilize coastal sediments, and sequester significant amounts of carbon dioxide. However, they're being lost at a rate of about 7% annually due to coastal development, water pollution, and physical damage from boat anchors and fishing gear.

Mangrove forests, the guardians of our coastlines, are also under threat. These unique trees create essential habitats where land meets sea, protecting coastlines from storms and erosion while providing crucial nursery areas for many fish species. Despite their importance, mangroves are being cleared for coastal development, aquaculture, and other human activities.

The degradation of these habitats has direct implications for recreational fishing. When nursery areas are destroyed, fish populations decline. When coral reefs die, the diverse communities of fish they support disappear. When mangroves are cleared, coastal fisheries suffer. Protecting these habitats is crucial for maintaining healthy fish populations and ensuring quality fishing experiences for future generations.`
  },
  bycatch: {
    title: "Bycatch & Waste: The Hidden Cost of Fishing",
    image: "https://images.pexels.com/photos/2318555/pexels-photo-2318555.jpeg",
    content: `Bycatch – the unintentional capture of non-target species – represents one of the most significant challenges in modern fishing. This hidden cost of fishing affects not just commercial operations but has implications for the entire marine ecosystem that recreational fishers depend on.

The scale of the problem is staggering: for every pound of target fish caught, up to five pounds of marine life may be accidentally captured and discarded. This includes endangered species, juvenile fish, and marine mammals. Global estimates suggest that about 40% of global marine catch is bycatch, amounting to billions of pounds of wasted marine life annually.

The impacts of bycatch are far-reaching. When juvenile fish are caught before they can reproduce, it affects the future population size. When endangered species like sea turtles or marine mammals are accidentally caught, it further threatens their survival. Even when bycatch is released, many animals don't survive the stress of capture and handling.

For recreational fishers, understanding and minimizing bycatch is crucial. While commercial fishing accounts for the majority of bycatch, recreational fishing can also contribute to the problem. Using appropriate gear, practicing proper catch and release techniques, and being able to identify protected species are essential skills for responsible anglers.

The solution to bycatch requires a combination of better fishing practices, improved gear technology, and stronger regulations. Many innovations, such as turtle excluder devices and circle hooks, have already shown promise in reducing bycatch while maintaining fishing efficiency. As recreational fishers, we can support these efforts by advocating for sustainable fishing practices and using selective fishing techniques.`
  },
  climate: {
    title: "Climate Change: Warming Waters, Changing Seas",
    image: "https://images.pexels.com/photos/1295036/pexels-photo-1295036.jpeg",
    content: `Climate change is fundamentally altering our oceans in ways that affect every aspect of marine life and, consequently, fishing. As greenhouse gases trap more heat in Earth's atmosphere, our oceans absorb about 90% of this excess heat, leading to rising water temperatures and a cascade of ecological changes.

Ocean warming has multiple effects on marine life. Fish are temperature-sensitive, and many species are moving toward cooler waters, typically heading toward higher latitudes or deeper waters. This shift disrupts traditional fishing grounds and can lead to conflicts over fishing rights as stocks cross jurisdictional boundaries.

Ocean acidification, often called climate change's evil twin, occurs as the ocean absorbs more carbon dioxide. This makes the water more acidic, making it harder for shellfish and corals to build their shells and skeletons. The effects ripple through the food web, potentially affecting all marine life.

Rising sea levels and more intense storms threaten coastal habitats that many fish species depend on for spawning and juvenile development. Salt marshes, mangroves, and other coastal ecosystems are at risk of being submerged or damaged, potentially reducing fish populations.

Changes in ocean circulation patterns can affect nutrient distribution and larval transport, potentially impacting fish reproduction and population dynamics. Water temperature changes can also affect the timing of spawning and migration, potentially creating mismatches between predators and their prey.

For recreational fishers, these changes mean adapting to new patterns and potentially targeting different species as traditional target species move or decline. Understanding these changes is crucial for successful fishing and for contributing to conservation efforts.`
  },
  pollution: {
    title: "Ocean Pollution: Poisoning Our Waters",
    image: `${import.meta.env.BASE_URL}pollution.png`,
    content: `Ocean pollution represents a complex and growing threat to marine ecosystems and human health. From visible plastic waste to invisible chemical contaminants, pollution affects every level of marine life and poses significant challenges for sustainable fishing.

Plastic pollution has become one of the most visible forms of ocean pollution. An estimated 8 million metric tons of plastic enter our oceans annually, breaking down into microplastics that can be ingested by marine life at all levels of the food chain. These plastics can cause direct harm through entanglement and ingestion, and may also transport toxic chemicals throughout marine ecosystems.

Chemical pollution from agricultural runoff, industrial discharge, and oil spills poses another significant threat. Nutrients from fertilizers can cause algal blooms that create dead zones – areas where oxygen levels are so low that marine life cannot survive. Heavy metals and persistent organic pollutants can accumulate in fish tissue, potentially making them unsafe for consumption.

Marine debris, including lost or abandoned fishing gear (ghost fishing), continues to trap and kill marine life long after it's been discarded. This not only needlessly kills fish and other marine life but also damages sensitive habitats like coral reefs and seagrass beds.

For recreational fishers, pollution affects both the quality of the fishing experience and the safety of consuming caught fish. Some areas may become unfishable due to contamination, while others may require careful monitoring of fish consumption due to accumulated toxins.

Addressing ocean pollution requires action at all levels, from individual choices to international cooperation. As recreational fishers, we can contribute by properly disposing of fishing gear, participating in cleanup efforts, and supporting policies that reduce pollution at its source.`
  }
};

const ProblemDetail = () => {
  const { id } = useParams();
  const problem = id ? problemDetails[id as keyof typeof problemDetails] : null;

  if (!problem) {
    return (
      <div className="min-h-screen bg-white pt-20">
        <div className="container mx-auto px-4 py-8">
          <h1>Problem not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      <div 
        className="w-full h-[400px] bg-cover bg-center"
        style={{ backgroundImage: `url(${problem.image})` }}
      />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Link to="/problems">
            <Button variant="secondary" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Issues
            </Button>
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-heading font-bold text-navy mb-6">
              {problem.title}
            </h1>
            
            <div className="prose prose-lg max-w-none">
              {problem.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProblemDetail;