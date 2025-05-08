
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface TeamMemberProps {
  image: string;
  name: string;
  position: string;
}

const TeamMember = ({ image, name, position }: TeamMemberProps) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-md text-center">
    <img 
      src={image} 
      alt={name} 
      className="w-full h-64 object-cover object-center" 
    />
    <div className="p-4">
      <h3 className="text-xl font-semibold text-tech-blue">{name}</h3>
      <p className="text-tech-gray">{position}</p>
    </div>
  </div>
);

const About = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapIsLoaded, setMapIsLoaded] = useState(false);
  const [mapApiKey, setMapApiKey] = useState<string>("");

  useEffect(() => {
    // Check if the API key is already stored in localStorage
    const storedApiKey = localStorage.getItem('googleMapsApiKey');
    if (storedApiKey) {
      setMapApiKey(storedApiKey);
      loadGoogleMapsScript(storedApiKey);
    }
  }, []);

  const handleApiKeySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const apiKey = formData.get('apiKey') as string;
    
    if (apiKey) {
      // Store the API key in localStorage
      localStorage.setItem('googleMapsApiKey', apiKey);
      setMapApiKey(apiKey);
      loadGoogleMapsScript(apiKey);
    }
  };

  const loadGoogleMapsScript = (apiKey: string) => {
    // Check if the script is already loaded
    if (document.querySelector(`script[src*="maps.googleapis.com/maps/api/js?key=${apiKey}"]`)) {
      initMap();
      return;
    }

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initGoogleMap`;
    script.async = true;
    script.defer = true;
    
    window.initGoogleMap = initMap;
    
    document.head.appendChild(script);
  };

  const initMap = () => {
    if (mapRef.current && window.google && window.google.maps) {
      // Set coordinates for Kigali, Rwanda
      const kigaliLocation = { lat: -1.9441, lng: 30.0619 };
      
      const map = new window.google.maps.Map(mapRef.current, {
        center: kigaliLocation,
        zoom: 15,
      });

      new window.google.maps.Marker({
        position: kigaliLocation,
        map,
        title: "TechTrends Ltd",
      });

      setMapIsLoaded(true);
    }
  };

  const teamMembers = [
    {
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      name: "Samuel Johnson",
      position: "CEO & Founder"
    },
    {
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      name: "Maria Nakamura",
      position: "CTO"
    },
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      name: "David Niyonzima",
      position: "Sales Director"
    },
    {
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      name: "Claudine Uwase",
      position: "Customer Relations"
    }
  ];

  return (
    <div>
      {/* About Hero Section */}
      <section className="relative bg-tech-blue text-white py-20">
        <div className="container-custom px-4 md:px-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">About TechTrends Ltd</h1>
            <p className="text-lg opacity-90 mb-6">
              Pioneering technology solutions in Rwanda since 2010. We bring the latest electronic gadgets to individuals and businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-tech-blue mb-4">Our Story</h2>
              <p className="text-tech-gray mb-4">
                TechTrends Ltd was founded in 2010 with a vision to transform the technological landscape in Rwanda. What began as a small shop selling electronic accessories has evolved into one of the leading providers of cutting-edge electronic gadgets in Kigali.
              </p>
              <p className="text-tech-gray mb-4">
                Our journey has been marked by a commitment to quality, innovation, and exceptional customer service. As technology evolved, so did we, constantly updating our inventory and expertise to meet the changing needs of our clients.
              </p>
              <p className="text-tech-gray">
                Today, we pride ourselves on offering not just products, but complete electronic solutions tailored to both individual consumers and businesses throughout Rwanda.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="TechTrends team meeting" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="section bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-tech-blue mb-6">Our Mission</h2>
          <p className="text-xl text-tech-gray max-w-3xl mx-auto">
            "To empower individuals and businesses in Rwanda with innovative electronic solutions that enhance productivity, connectivity, and quality of life."
          </p>
        </div>
      </section>

      {/* Our Team */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-tech-blue mb-4">Our Leadership Team</h2>
            <p className="text-tech-gray max-w-2xl mx-auto">
              Meet the experienced professionals who guide our company's vision and operations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Location */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-tech-blue mb-4">Visit Our Store</h2>
            <p className="text-tech-gray max-w-2xl mx-auto">
              Located in the heart of Kigali, our flagship store offers a hands-on experience with the latest electronic gadgets.
            </p>
          </div>

          {!mapApiKey ? (
            <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Enter Google Maps API Key</h3>
              <p className="text-sm text-gray-600 mb-4">
                To view our location on the map, please enter your Google Maps API Key.
              </p>
              <form onSubmit={handleApiKeySubmit}>
                <div className="mb-4">
                  <input
                    type="text"
                    name="apiKey"
                    placeholder="Enter Google Maps API Key"
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Your API key will be stored locally and not shared.
                  </p>
                </div>
                <Button type="submit" className="w-full bg-tech-accent hover:bg-tech-blue">
                  Load Map
                </Button>
              </form>
            </div>
          ) : (
            <>
              {!mapIsLoaded && <div className="text-center py-12">Loading map...</div>}
              <div 
                ref={mapRef} 
                className="w-full h-[400px] rounded-lg shadow-lg"
                style={{ display: mapIsLoaded ? 'block' : 'none' }}
              ></div>
              {mapIsLoaded && (
                <div className="mt-6 text-center">
                  <p className="text-tech-gray mb-2">
                    <strong>Address:</strong> KG 123 Street, Kigali City, Rwanda
                  </p>
                  <p className="text-tech-gray">
                    <strong>Opening Hours:</strong> Monday-Friday: 8:00 AM - 6:00 PM | Saturday: 9:00 AM - 4:00 PM
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-tech-accent text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Visit our store or contact us today to explore our range of electronic gadgets and solutions tailored for your needs.
          </p>
          <Button asChild size="lg" className="bg-white text-tech-accent hover:bg-gray-100">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

// Add type definition for Google Maps API
declare global {
  interface Window {
    google: any;
    initGoogleMap: () => void;
  }
}

export default About;
