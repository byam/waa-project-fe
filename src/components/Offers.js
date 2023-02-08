import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Table } from 'antd';
import dummyData from '../dummy-data';

function Offers() {
  const auth = useSelector((state) => state.auth);
  const user = auth.user || {};

  // TODO: fetch user
  const currentUser = dummyData.users.filter((u) => u.email === user.email)[0];

  const [offers, setOffers] = useState([]);
  const [flag] = useState(0);

  const fetchOffers = async () => {
    // TODO: integrate with backend
    setOffers(
      dummyData.offers
        .filter((offer) => offer.customerUserId === currentUser.id)
        .map((offer) => ({ ...offer, key: offer.id }))
    );
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
