import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import { Check } from 'lucide-react';

const Pledge = () => {
  const [formState, setFormState] = useState({
    firstName: '',
    email: '',
    agreedToPledge: false
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [pledgeCount, setPledgeCount] = useState(1237); // Mock initial count
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a server
    setIsSubmitted(true);
    setPledgeCount(prev => prev + 1);
  };

  const handleShare = (platform: string) => {
    const shareUrls = {
      facebook: 'https://www.facebook.com',
      twitter: 'https://www.twitter.com',
      email: 'mailto:?subject=Join%20the%20Sustainable%20Fishing%20Movement&body=I%20just%20took%20the%20pledge%20to%20fish%20sustainably.%20Join%20me%20in%20protecting%20our%20oceans!'
    };
    
    window.open(shareUrls[platform as keyof typeof shareUrls], '_blank');
  };

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
            <h1 className="font-heading text-4xl md:text-5xl mb-6">Make a Difference Today</h1>
            <p className="text-lg md:text-xl">
              Join a community of anglers committed to protecting our oceans and preserving
              the future of fishing through sustainable practices.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              className="flex flex-col justify-center"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading text-3xl md:text-4xl text-navy mb-6">The Sustainable Fishing Pledge</h2>
              <p className="text-lg text-gray-700 mb-4">
                By taking this pledge, you're committing to:
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <Check className="text-green mt-1 mr-2 flex-shrink-0" />
                  <span>Practicing catch and release whenever possible</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green mt-1 mr-2 flex-shrink-0" />
                  <span>Following all fishing regulations and size limits</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green mt-1 mr-2 flex-shrink-0" />
                  <span>Using sustainable fishing tackle and practices</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green mt-1 mr-2 flex-shrink-0" />
                  <span>Properly disposing of fishing line and other waste</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green mt-1 mr-2 flex-shrink-0" />
                  <span>Respecting marine habitats and ecosystems</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green mt-1 mr-2 flex-shrink-0" />
                  <span>Sharing sustainable fishing knowledge with others</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700">
                Your commitment helps ensure that future generations can enjoy
                the beauty and bounty of our oceans.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-light-blue p-8 rounded-xl shadow-md">
                {!isSubmitted ? (
                  <>
                    <h3 className="font-heading text-2xl text-navy mb-6">Take the Pledge</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="firstName" className="block text-navy font-medium mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formState.firstName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-blue focus:border-ocean-blue"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-navy font-medium mb-2">
                          Email (optional)
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-blue focus:border-ocean-blue"
                        />
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="agreedToPledge"
                            name="agreedToPledge"
                            type="checkbox"
                            checked={formState.agreedToPledge}
                            onChange={handleInputChange}
                            required
                            className="w-4 h-4 text-ocean-blue border-gray-300 rounded focus:ring-ocean-blue"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="agreedToPledge" className="text-navy">
                            I pledge to fish responsibly and protect coastal ecosystems
                          </label>
                        </div>
                      </div>
                      
                      <Button
                        type="submit"
                        variant="success"
                        fullWidth
                        disabled={!formState.agreedToPledge}
                      >
                        I Pledge
                      </Button>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-green rounded-full">
                      <Check className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-heading text-2xl text-navy mb-4">Thank You for Your Pledge!</h3>
                    <p className="text-gray-700 mb-6">
                      Your commitment to sustainable fishing makes a real difference.
                      Together, we can protect our oceans for generations to come.
                    </p>
                    <div className="text-center">
                      <p className="text-sm text-gray-600 mb-2">TOTAL PLEDGES</p>
                      <p className="font-heading text-4xl text-green">{pledgeCount}</p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
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
            <h2 className="font-heading text-3xl md:text-4xl text-navy mb-6">Spread the Word</h2>
            <p className="text-lg text-gray-700 mb-6">
              Share your commitment to sustainable fishing with friends and family.
              The more people who adopt these practices, the greater our collective impact.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="primary" onClick={() => handleShare('facebook')}>Share on Facebook</Button>
              <Button variant="secondary" onClick={() => handleShare('twitter')}>Share on Twitter</Button>
              <Button variant="primary" onClick={() => handleShare('email')}>Share via Email</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Pledge;