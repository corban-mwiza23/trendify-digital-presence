
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container-custom flex justify-between items-center py-4 px-4 md:px-8">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-tech-blue">
            TechTrends<span className="text-tech-accent">Ltd</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-tech-dark hover:text-tech-accent font-medium transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-tech-dark hover:text-tech-accent font-medium transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-tech-dark hover:text-tech-accent font-medium transition-colors">
            Contact
          </Link>
          <Button asChild className="bg-tech-accent hover:bg-tech-blue">
            <Link to="/contact">Get a Quote</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-tech-dark p-2" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fadeIn">
          <nav className="flex flex-col py-4 px-6 space-y-4">
            <Link 
              to="/" 
              className="text-tech-dark hover:text-tech-accent font-medium py-2 transition-colors"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-tech-dark hover:text-tech-accent font-medium py-2 transition-colors"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-tech-dark hover:text-tech-accent font-medium py-2 transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Button asChild className="bg-tech-accent hover:bg-tech-blue w-full">
              <Link to="/contact" onClick={toggleMenu}>Get a Quote</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
