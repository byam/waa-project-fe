/* eslint-disable new-cap */
import { useEffect, useState } from 'react';
import { Table } from 'antd';
import jsPDF from 'jspdf';
import { httpGet, httpPut } from '../api';
import { OFFER_STATUS } from '../app/constants';

function Offers() {
  const [offers, setOffers] = useState([]);
  const [flag] = useState(0);

  const fetchOffers = async () => {
    const res = await httpGet({
      url: '/offers',
    });
    setOffers(res.data || []);
  };

  const handleOfferCancel = async (id) => {
    const offer = offers.find((of) => of.id === id);
    httpPut({
      url: `/offers/${offer.id}`,
      data: {
        status: 'CANCELLED',
      },
    }).then(() => {
      fetchOffers();
    });
  };

  const handleContractDownload = async (offerId) => {
    const offer = offers.find((of) => of.id === offerId);
    console.log('handleContractDownload:', offer);
    const doc = new jsPDF();

    let i = 0;
    Object.entries(offer).forEach(([key, value]) => {
      doc.text(`${key}: ${value}`, i * 10, i * 10);
      i += 1;
    });

    doc.save('receipt.pdf');
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
    {
      title: 'Action',
      dataIndex: 'offerStatus',
      key: 'offerStatus',
      render: (text, offer) => {
        if (text === OFFER_STATUS.PENDING) {
          return (
            <button
              onClick={() => handleOfferCancel(offer.id)}
              className="bg-red-500 text-white px-2"
              type="button"
            >
              Cancel
            </button>
          );
        }

        if (text === OFFER_STATUS.ACCEPTED) {
          return (
            <button
              onClick={() => handleContractDownload(offer.id)}
              className="bg-red-500 text-white px-2"
              type="button"
            >
              Download Receipt
            </button>
          );
        }

        return null;
      },
    },
  ];

  useEffect(() => {
    fetchOffers();
  }, [flag]);

  return (
    <div className="px-4 py-5 sm:px-6">
      <Table columns={columns} dataSource={offers.map((o) => ({ ...o, key: o.id }))} />
    </div>
  );
}

export default Offers;
