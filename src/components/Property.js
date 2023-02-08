import { Link } from 'react-router-dom';

function Property({ p }) {
  return (
    <div className="relative">
      <div className="absolute z-10 right-0 w-fit text-center px-2 py-1 bg-red-600 text-white">
        {p.propertyStatus}
      </div>
      <div className="absolute z-10 w-fit right-0 text-center bg-red-600 text-white px-2 py-1 top-8">
        {p.listingType}
      </div>
      <Link key={p.id} to={`/properties/${p.id}`} className="group">
        <div className="relative aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
          <img
            src={p.image}
            alt={p.title}
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
        <h3 className="mt-4 text-sm text-gray-700">Title: {p.title}</h3>
        <h3 className="mt-4 text-sm text-gray-700">Description: {p.description}</h3>
        <h3 className="mt-4 text-sm text-gray-700">
          Location: {p.address} {p.city} {p.state}, {p.zipCode}
        </h3>
        <p className="mt-1 text-lg font-medium text-gray-900">${p.price}</p>
      </Link>
    </div>
  );
}

export default Property;
