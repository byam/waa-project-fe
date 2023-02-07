import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { notifyError, notifySuccess } from '../helpers/notification';
import { signUp } from '../store/slices/auth';

function SignUp() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: 'United States',
    street: '',
    city: '',
    region: '',
    zipCode: '',
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignupInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      // await TODO: signup API call
      dispatch(signUp(formData));
      notifySuccess('Successfully signed up');
      // replace: true means Browser navigation history will be cleared
      navigate('/', { replace: true });
    } catch (err) {
      notifyError(`Error while signing up ${err}`);
    }
  };

  return (
    <div className="flex items-center justify-center py-16">
      <div className="md:grid-cols-3 md:gap-6">
        <div className="mt-5 md:col-span-2 md:mt-0">
          <form onSubmit={handleSignupSubmit}>
            <div className="overflow-hidden shadow sm:rounded-md">
              <div className="bg-white px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    First name
                    <input
                      type="text"
                      name="firstName"
                      onChange={handleSignupInputChange}
                      value={formData.firstName}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    Last name
                    <input
                      type="text"
                      name="lastName"
                      onChange={handleSignupInputChange}
                      value={formData.lastName}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-4">
                    Email address
                    <input
                      type="text"
                      name="email"
                      onChange={handleSignupInputChange}
                      value={formData.email}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    Country
                    <select
                      name="country"
                      onChange={handleSignupInputChange}
                      value={formData.country}
                      className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div>

                  <div className="col-span-6">
                    Street address
                    <input
                      type="text"
                      name="street"
                      onChange={handleSignupInputChange}
                      value={formData.street}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                    City
                    <input
                      type="text"
                      name="city"
                      onChange={handleSignupInputChange}
                      value={formData.city}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    State / Province
                    <input
                      type="text"
                      name="region"
                      onChange={handleSignupInputChange}
                      value={formData.region}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    ZIP / Postal code
                    <input
                      type="text"
                      name="zipCode"
                      onChange={handleSignupInputChange}
                      value={formData.zipCode}
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
                  Sign up
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
