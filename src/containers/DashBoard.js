import { React, useState } from 'react';
import { CurrentUser } from '../context/CurrentUser';
import dummyData from '../dummy-data';
import Header from './Header';
import PageRoutes from './PageRoutes';

function Dashboard() {
  const [curentUser, setCurrentUser] = useState({});

  const handleSetUser = (role) => {
    if (role === 'veiwer') setCurrentUser({});
    else setCurrentUser(dummyData.users.filter((u) => u.role === role)[0]);
  };

  return (
    <div>
      <button type="button" onClick={() => handleSetUser('admin')}>
        {' '}
        Set Admin{' '}
      </button>
      <br />
      <button type="button" onClick={() => handleSetUser('owner')}>
        {' '}
        Set Owner{' '}
      </button>
      <br />{' '}
      <button type="button" onClick={() => handleSetUser('customer')}>
        {' '}
        Set Customer{' '}
      </button>
      <br />
      <button type="button" onClick={() => handleSetUser('viewer')}>
        {' '}
        Set Viewer{' '}
      </button>
      <br />
      <CurrentUser.Provider value={curentUser}>
        <div>
          <Header />
        </div>
        <div>
          <PageRoutes />
        </div>
      </CurrentUser.Provider>
    </div>
  );
}

export default Dashboard;
