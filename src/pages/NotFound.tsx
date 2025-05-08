
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4">
      <h1 className="text-7xl font-bold text-tech-blue mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>
      <p className="text-tech-gray text-lg max-w-md text-center mb-8">
        We're sorry, the page you are looking for doesn't exist or has been moved.
      </p>
      <Button asChild className="bg-tech-accent hover:bg-tech-blue">
        <Link to="/">Return to Home</Link>
      </Button>
    </div>
  );
};

export default NotFound;
