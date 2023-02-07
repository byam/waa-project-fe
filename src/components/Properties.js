import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import dummyProperties from '../dummy-data';
import Property from './Property';

function Properties() {
  const [properties, setProperties] = useState([]);

  const fetchProperties = async () => {
    setProperties(dummyProperties);
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  return (
    <div>
      {properties.map((property) => (
        <Link to={`/properties/${property.id}`} key={property.id}>
          <Property
            key={property.id}
            title={property.title}
            description={property.description}
            price={property.price}
            image={property.image}
          />
        </Link>
      ))}
    </div>
  );
}

export default Properties;
