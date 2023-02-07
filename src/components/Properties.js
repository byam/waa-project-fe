import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import dummyData from '../dummy-data';
import Property from './Property';

function Properties() {
  const [properties, setProperties] = useState([]);

  const fetchProperties = async () => {
    setProperties(dummyData.properties);
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4">
      {properties.map((property) => (
        <div key={property.id}>
          <Link to={`/properties/${property.id}`} key={property.id}>
            <Property
              key={property.id}
              title={property.title}
              description={property.description}
              price={property.price}
              image={property.image}
            />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Properties;
