/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { useNavigate } from 'react-router';
import dummyData from '../dummy-data';

function PropertyNew() {
  const navigate = useNavigate();
  const [property, setProperty] = useState({
    id: dummyData.properties.length + 1,
    title: '',
    description: '',
    listingType: '',
    propertyType: '',
    price: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    imageSrcs: [],
  });

  const handleChange = (event) => {
    setProperty({
      ...property,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Add your submit logic here
    console.log(property);

    dummyData.properties.push(property);
    navigate('/properties');
  };

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
                      autoComplete="listingType"
                      className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      onChange={handleChange}
                    >
                      <option value="">Select a type</option>
                      <option value="sale">Sale</option>
                      <option value="rent">Rent</option>
                    </select>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    Property Type
                    <select
                      required
                      id="propertyType"
                      name="propertyType"
                      autoComplete="propertyType"
                      className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      onChange={handleChange}
                    >
                      <option value="">Select a type</option>
                      <option value="house">House</option>
                      <option value="apartment">Apartment</option>
                      <option value="conde">Condo</option>
                    </select>
                  </div>

                  <div className="col-span-6">
                    Title
                    <input
                      type="text"
                      name="title"
                      id="title"
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
                      name="zip"
                      id="zip"
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
                  Add New Property
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PropertyNew;
