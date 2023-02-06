import { useEffect, useState } from 'react';
import Property from './Property';

function Properties() {
  const [properties, setProperties] = useState([]);

  const data = [
    {
      id: 1,
      title: 'Property 1',
      description: 'This is the description for property 1',
      price: 100000,
      address: '123 Main St',
      city: 'New York',
      state: 'NY',
      zip: '10001',
      image: 'https://picsum.photos/200/300',
      bedrooms: 3,
      bathrooms: 2,
      yearBuilt: 2000,
    },
    {
      id: 2,
      title: 'Property 2',
      description: 'This is the description for property 1',
      price: 100000,
      address: '123 Main St',
      city: 'New York',
      state: 'NY',
      zip: '10001',
      image: 'https://picsum.photos/200/300',
      bedrooms: 3,
      bathrooms: 2,
      yearBuilt: 2000,
    },
  ];

  useEffect(() => {
    setProperties(data);
  }, []);

  return (
    <div className="flex flex-wrap">
      {properties.map((property) => (
        <Property
          key={property.id}
          title={property.title}
          description={property.description}
          price={property.price}
          image={property.image}
        />
      ))}
    </div>
  );
}

export default Properties;
