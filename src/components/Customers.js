import { useEffect, useState } from 'react';
import dummyData from '../dummy-data';
import Customer from './Customer';

function Customers() {
  const [customers, setCustomers] = useState([]);

  const fetchCustomers = async () => {
    setCustomers(dummyData.users.filter((user) => user.role === 'customer'));
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4">
      {customers.map((customer) => (
        <div key={customer.id}>
          <Customer
            firsName={customer.firsName}
            lastName={customer.lastName}
            email={customer.email}
          />
        </div>
      ))}
    </div>
  );
}

export default Customers;
