/* eslint-disable new-cap */
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Table } from 'antd';
import jsPDF from 'jspdf';

function Contracts() {
  const auth = useSelector((state) => state.auth);
  const user = auth.user || {};

  const [contracts, setContracts] = useState([]);
  const [flag, setFlag] = useState(0);

  const fetchContracts = async () => {
    console.log('fetchContracts: ', user);
    // TODO: fetch contracts from backend
    setContracts([{ id: '1', message: 'contract 1', price: '100' }]);
    setFlag(flag + 1);
  };

  const handleContractDownload = async (con) => {
    console.log('handleContractDownload:', con);
    const doc = new jsPDF();

    let i = 0;
    Object.entries(con).forEach(([key, value]) => {
      doc.text(`${key}: ${value}`, i * 10, i * 10);
      i += 1;
    });

    doc.save('receipt.pdf');
  };

  const columns = [
    {
      title: 'Contract ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Message',
      dataIndex: 'message',
      key: 'message',
    },
    {
      title: 'Price $',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Action',
      dataIndex: 'Download',
      key: 'Download',
      render: (_, contract) => (
        <button
          onClick={() => handleContractDownload(contract)}
          className="bg-red-500 text-white px-2"
          type="button"
        >
          Download Receipt
        </button>
      ),
    },
  ];

  useEffect(() => {
    fetchContracts();
  }, [flag]);

  return (
    <div className="px-4 py-5 sm:px-6">
      <Table columns={columns} dataSource={contracts.map((c) => ({ ...c, key: c.id }))} />
    </div>
  );
}

export default Contracts;
