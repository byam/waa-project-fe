import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HeartIcon } from '@heroicons/react/24/outline';
import { CurrentUser } from '../context/CurrentUser';
import dummyData from '../dummy-data';

function PropertiesSaved() {
  const [flag, setFlag] = useState(0);
  const currentUser = useContext(CurrentUser);
  const [properties, setProperties] = useState([]);

  const fetchProperties = () => {
    setProperties(
      dummyData.properties.filter((property) => currentUser.favorites.includes(property.id))
    );
  };

  const heartClick = (property) => {
    if (currentUser.favorites.includes(property.id)) {
      currentUser.favorites = currentUser.favorites.filter((item) => item !== property.id);
      setFlag(flag + 1);
    } else {
      currentUser.favorites.push(property.id);
      setFlag(flag + 1);
    }
  };

  const heartIcon = (property) => (
    <HeartIcon
      className="h-6 w-6 text-red-500 hover:text-grey-500 cursor-pointer"
      onClick={() => heartClick(property)}
    />
  );

  useEffect(() => {
    fetchProperties();
  }, [currentUser, flag]);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {properties.map((p) => (
            <div key={p.id}>
              <Link key={p.id} to={`/properties/${p.id}`} className="group">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={p.imageSrc}
                    alt={p.description}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{p.title}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">${p.price}</p>
              </Link>
              {heartIcon(p)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PropertiesSaved;
