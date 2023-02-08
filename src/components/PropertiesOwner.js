import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { USER_ROLES } from '../app/constants';
import { httpGet } from '../api';
import { notifyError } from '../helpers/notification';

function PropertiesOwner() {
  const navigate = useNavigate();

  const auth = useSelector((state) => state.auth);
  const user = auth.user || {};
  const isOwner = USER_ROLES.OWNER === user.role;

  const [properties, setProperties] = useState([]);

  const fetchProperties = async () => {
    if (isOwner) {
      try {
        const res = await httpGet({
          url: `/properties?ownerId=${user.id}`,
        });
        if (res.data) setProperties(res.data);
      } catch (err) {
        notifyError('Failed to fetch from system');
        console.log(err);
      }
    }
  };

  const handleEdit = (id) => {
    navigate(`/properties/${id}/edit`);
  };

  useEffect(() => {
    fetchProperties();
  }, [user]);

  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">ps</h2>

          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {properties.map((p) => (
              <div key={p.id}>
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={p.imageSrcs?.[0]}
                    alt={p.description}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">
                  {p.title} ({p.propertyStatus})
                </h3>
                <p className="mt-1 text-lg font-medium text-gray-900">${p.price}</p>

                <button
                  onClick={() => handleEdit(p.id)}
                  className="mt-1 text-sm font-medium text-gray-900"
                  type="submit"
                >
                  {' '}
                  Edit{' '}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertiesOwner;
