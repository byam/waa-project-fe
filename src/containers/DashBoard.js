import React from 'react';
import Header from './Header';
import PageRoutes from './PageRoutes';

function Dashboard() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <PageRoutes />
      </div>
    </>
  );
}

export default Dashboard;
