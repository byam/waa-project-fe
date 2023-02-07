import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Space, Table } from 'antd';
import dummyData from '../dummy-data';

function Users(props) {
  const [users, setUsers] = useState([]);
  const [userRoles] = useState(props?.userRoles || ['owner', 'customer']);

  const fetchCustomers = async () => {
    setUsers(
      dummyData.users
        .filter((user) => userRoles.includes(user.role))
        .slice(0, props?.usersMaxNum || 100)
    );
  };

  const columns = [
    {
      title: '#',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'First Name',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName',
    },
    {
      title: 'Type',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Link to="/properties">Activate {record.name}</Link>
          <Link to="/properties">Deactivate {record.name}</Link>
          <Link to="/properties">Reset Password {record.name}</Link>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    fetchCustomers();
  }, []);

  return (
    <div className="px-4 py-5 sm:px-6">
      <Table columns={columns} dataSource={users} />
    </div>
  );
}

export default Users;
