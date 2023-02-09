import { useEffect, useState } from 'react';
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
      title: 'Offer ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Message',
      dataIndex: 'message',
      key: 'message',
    },
    {
      title: 'Status',
      dataIndex: 'offerStatus',
      key: 'offerStatus',
    },
    {
      title: 'Offer Price $',
      dataIndex: 'price',
      key: 'price',
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
