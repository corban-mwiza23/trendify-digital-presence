
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
    <div className="w-12 h-12 bg-tech-accent/10 rounded-full flex items-center justify-center mb-4">
      <span className="text-tech-accent text-2xl">{icon}</span>
    </div>
    <h3 className="text-xl font-semibold mb-2 text-tech-blue">{title}</h3>
    <p className="text-tech-gray">{description}</p>
  </div>
);

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  category: string;
}

const ProductCard = ({ image, name, price, category }: ProductCardProps) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
    <img src={image} alt={name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <span className="text-xs font-medium text-tech-accent bg-tech-accent/10 px-2 py-1 rounded-full">
        {category}
      </span>
      <h3 className="text-lg font-medium mt-2">{name}</h3>
      <div className="mt-2 flex items-center justify-between">
        <span className="text-tech-blue font-semibold">{price}</span>
        <Button variant="outline" className="text-tech-accent border-tech-accent hover:bg-tech-accent hover:text-white">
          View Details
        </Button>
      </div>
    </div>
  </div>
);

const Home = () => {
  const features = [
    {
      icon: "⚡",
      title: "Latest Technology",
      description: "Access cutting-edge electronic gadgets with the most advanced technology available in the market."
    },
    {
      icon: "💼",
      title: "Business Solutions",
      description: "Specialized electronic equipment for businesses to enhance productivity and efficiency."
    },
    {
      icon: "🛠️",
      title: "Technical Support",
      description: "Expert technical assistance for all our products with quick response times."
    },
    {
      icon: "🔒",
      title: "Warranty & Security",
      description: "Extended warranty options and security guarantees on all our electronic products."
    }
  ];

  const featuredProducts = [
    {
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
      name: "Ultra HD Smart TV",
      price: "RWF 450,000",
      category: "Home Entertainment"
    },
    {
      image: "https://images.unsplash.com/photo-1592286927505-1def25115fd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
      name: "Wireless Noise-Canceling Headphones",
      price: "RWF 120,000",
      category: "Audio"
    },
    {
      image: "https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
      name: "Pro Gaming Laptop",
      price: "RWF 750,000",
      category: "Computers"
    },
    {
      image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
      name: "Smartphone X Pro",
      price: "RWF 350,000",
      category: "Mobile"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-tech-blue to-tech-accent text-white">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        
        <div className="container-custom relative z-20 min-h-[90vh] flex flex-col justify-center py-16 px-4 md:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Leading the Future in Electronic Gadgets
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              TechTrends Ltd offers cutting-edge electronic devices and solutions for both individuals and businesses in Rwanda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-tech-blue hover:bg-gray-100">
                <Link to="/about">Discover More</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-tech-blue mb-4">
              Why Choose TechTrends
            </h2>
            <p className="text-tech-gray max-w-2xl mx-auto">
              We're committed to providing the best electronic gadgets and services with exceptional customer support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section">
        <div className="container-custom">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-tech-blue mb-2">
                Featured Products
              </h2>
              <p className="text-tech-gray">
                Explore our selection of top electronic gadgets
              </p>
            </div>
            <Button asChild variant="outline" className="hidden md:flex border-tech-accent text-tech-accent hover:bg-tech-accent hover:text-white">
              <Link to="/">View All</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Button asChild variant="outline" className="border-tech-accent text-tech-accent hover:bg-tech-accent hover:text-white">
              <Link to="/">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-tech-blue text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Upgrade Your Electronic Experience?
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Visit our store in Kigali or contact us for personalized assistance with your electronic needs.
            </p>
            <Button asChild size="lg" className="bg-white text-tech-blue hover:bg-gray-100">
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
