import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import dummyData from '../dummy-data';

function Properties() {
  const [properties, setProperties] = useState([]);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const fetchProperties = async () => {
    setProperties(dummyData.properties);
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">ps</h2>
          <form className="flex items-center">
            <div className="w-1/4 mr-10 mb-10">
              <select
                className="form-select block w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded-lg shadow-sm focus:outline-none focus:shadow-outline"
                id="category"
              >
                <option>Listing Type</option>
                <option>Sale</option>
                <option>Rent</option>
              </select>
            </div>
            <div className="w-1/4 mr-10 mb-10">
              <select
                className="form-select block w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded-lg shadow-sm focus:outline-none focus:shadow-outline"
                id="category"
              >
                <option>Property Type</option>
                <option>House</option>
                <option>Apartment</option>
                <option>Condo</option>
              </select>
            </div>
            <input
              type="number"
              className="w-1/6 mr-10 mb-10 form-input block w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded-lg shadow-sm focus:outline-none focus:shadow-outline"
              id="maxPrice"
              value={minPrice}
              placeholder="Min Price..."
              onChange={(e) => setMinPrice(e.target.value)}
            />
            <input
              type="number"
              className="w-1/6 mr-10 mb-10 form-input block w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded-lg shadow-sm focus:outline-none focus:shadow-outline"
              id="maxPrice"
              value={maxPrice}
              placeholder="Max Price..."
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <button
              type="submit"
              className="mr-10 mb-10 bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg"
            >
              Filter
            </button>
          </form>

          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {properties.map((p) => (
              <Link key={p.id} to={`/properties/${p.id}`} className="group">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={p.imageSrc}
                    alt={p.description}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{p.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Properties;
