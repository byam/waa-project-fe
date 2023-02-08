import { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Table } from 'antd';
import { httpGet } from '../api';

function Offers() {
  // const auth = useSelector((state) => state.auth);
  // const user = auth.user || {};

  const [offers, setOffers] = useState([]);
  const [flag] = useState(0);

  const fetchOffers = async () => {
    const res = await httpGet({
      url: '/offers',
    });
    setOffers(res.data || []);
  };

  const columns = [
    {
      title: '#',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Property',
      dataIndex: 'propertyTitle',
      key: 'propertyTitle',
      render: (text, record) => (
        <Link to={`/properties/${record.propertyId}`} key={`${record.id}`}>
          {text}
        </Link>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Offer Price',
      dataIndex: 'offferPrice',
      key: 'offferPrice',
    },
  ];

  useEffect(() => {
    fetchOffers();
  }, [flag]);

  return (
    <div className="px-4 py-5 sm:px-6">
      <Table columns={columns} dataSource={offers} />
    </div>
  );
}

export default Offers;
