import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import dummyData from '../dummy-data';

function PropertyDetails() {
  const params = useParams();
  const [property, setProperty] = useState({});

  const fetchProperty = async () => {
    const data = dummyData.properties.find((p) => p.id === parseInt(params.id, 10));
    setProperty(data);
  };

  useEffect(() => {
    fetchProperty();
  }, [params.id]);

  return (
    <div>
      <h1>Property Details</h1>
      <h2>{property.title}</h2>
      <p>{property.description}</p>
      <p>{property.price}</p>
      <img src={property.image} alt={property.title} />
    </div>
  );
}

export default PropertyDetails;
