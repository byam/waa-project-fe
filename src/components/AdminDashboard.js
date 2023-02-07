import { useState } from 'react';
import dummyData from '../dummy-data';
import Customers from './Customers';
import Properties from './Properties';

function AdminDashboard() {
  const [user] = useState(dummyData.users[0]);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>{user.firstName}</p>
      <h2>Properties</h2>
      <Properties />
      <h2>Customers</h2>
      <Customers />
    </div>
  );
}

export default AdminDashboard;
