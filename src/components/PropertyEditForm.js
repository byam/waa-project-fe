import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { httpPost, httpPut } from '../api';
import { LISTING_TYPE, PROPERTY_TYPE } from '../app/constants';
import { notifyError, notifySuccess } from '../helpers/notification';

function PropertyEditForm(props) {
  const navigate = useNavigate();
  const [property, setProperty] = useState({});
  const location = useLocation();
  const isAdd = location.pathname === '/properties/new';

  const auth = useSelector((state) => state.auth);
  const user = auth.user || {};

  const handleChange = (event) => {
    setProperty({
      ...property,
      [event.target.name]: event.target.value,
    });
  };

  const handleUpdateProperty = async () => {
    try {
      const res = await httpPut({
        url: `/properties/${props.property.id}`,
        data: property,
      });
      if (res.data) {
        console.log('Updated:', res.data);
      }
      notifySuccess('Updated successfully');
    } catch (err) {
      notifyError('Failed to update to system');
      console.log(err);
    }
  };

  const handleAddProperty = async () => {
    try {
      const res = await httpPost({
        url: '/properties',
        data: { ...property, ownerId: user.id },
      });
      console.log('Added:', res.data);
      notifySuccess('Added successfully');
    } catch (err) {
      notifyError('Failed to add to system');
      console.log(err);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log('handleSubmit ', property);

    if (isAdd) {
      await handleAddProperty();
    } else {
      await handleUpdateProperty();
    }
    navigate('/properties/owner');
  };

  const fetchProperty = async () => {
    setProperty({ ...props.property });
  };

  useEffect(() => {
    fetchProperty();
  }, [location.pathname]);

  return (
    <div className="flex items-center justify-center ">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="mt-5 md:col-span-2 md:mt-0">
          <form onSubmit={handleSubmit}>
            <div className="overflow-hidden shadow sm:rounded-md">
              <div className="bg-white px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    Listing Type
                    <select
                      required
                      id="listingType"
                      name="listingType"
                      defaultValue={props.property?.listingType || ''}
                      autoComplete="listingType"
                      className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      onChange={handleChange}
                    >
                      <option value="">Select a type</option>
                      <option value={LISTING_TYPE.SALE}>SALE</option>
                      <option value={LISTING_TYPE.RENT}>RENT</option>
                    </select>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    Property Type
                    <select
                      required
                      id="propertyType"
                      name="propertyType"
                      defaultValue={props.property?.propertyType || ''}
                      autoComplete="propertyType"
                      className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      onChange={handleChange}
                    >
                      <option value="">Select a type</option>
                      <option value={PROPERTY_TYPE.HOUSE}>HOUSE</option>
                      <option value={PROPERTY_TYPE.APARTMENT}>APARTMENT</option>
                      <option value={PROPERTY_TYPE.CONDO}>CONDO</option>
                    </select>
                  </div>

                  <div className="col-span-6">
                    Title
                    <input
                      type="text"
                      name="title"
                      id="title"
                      defaultValue={props.property?.title || ''}
                      autoComplete="title"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-span-6">
                    Description
                    <input
                      type="text"
                      name="description"
                      id="description"
                      defaultValue={props.property?.description || ''}
                      autoComplete="description"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-span-6">
                    Price
                    <input
                      type="number"
                      className="mr-10 mb-10 form-input block w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded-lg shadow-sm focus:outline-none focus:shadow-outline"
                      name="price"
                      id="price"
                      defaultValue={props.property?.price || ''}
                      autoComplete="price"
                      required
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-span-6">
                    Street address
                    <input
                      type="text"
                      name="address"
                      id="address"
                      defaultValue={props.property?.address || ''}
                      autoComplete="address-level3"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                    City
                    <input
                      type="text"
                      name="city"
                      id="city"
                      defaultValue={props.property?.city || ''}
                      onChange={handleChange}
                      required
                      autoComplete="address-level2"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    State / Province
                    <input
                      type="text"
                      name="state"
                      id="state"
                      defaultValue={props.property?.state || ''}
                      onChange={handleChange}
                      required
                      autoComplete="address-level1"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    ZIP / Postal code
                    <input
                      type="text"
                      name="zipCode"
                      id="zipCode"
                      defaultValue={props.property?.zipCode || ''}
                      onChange={handleChange}
                      required
                      autoComplete="postal-code"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  {props.property ? 'Update Property' : 'Add New Property'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PropertyEditForm;
