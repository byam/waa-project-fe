import { Popover } from '@headlessui/react';
import { Link } from 'react-router-dom';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { useContext } from 'react';
import { CurrentUser } from '../context/CurrentUser';

function Header() {
  const curentUser = useContext(CurrentUser);

  return (
    <Popover className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <Link
              to="/properties"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Properties
            </Link>
            {curentUser?.role === 'customer' && (
              <Link
                to="/properties/saved"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Saved Properties
              </Link>
            )}
            {curentUser?.role === 'owner' && (
              <Link
                to="/properties/new"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Add Property
              </Link>
            )}
            {curentUser?.role === 'admin' && (
              <>
                <Link
                  to="/admin"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Admin
                </Link>
                <Link
                  to="/admin/users"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Users
                </Link>
              </>
            )}
          </Popover.Group>
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <Link
              to="/sign-in"
              className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Sign in
            </Link>
            <Link
              to="/sign-up"
              className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </Popover>
  );
}

export default Header;
