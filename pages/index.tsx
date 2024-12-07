import React from 'react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const HomePage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to ALX Listing App</h1>
      <Card
        title="Sample Property"
        description="This is a sample property description."
        imageUrl="/assets/images.png"
      />
      <div className="mt-4">
        <Button label="Book Now" onClick={() => alert('Button clicked!')} />
      </div>
    </div>
  );
};

export default HomePage;
