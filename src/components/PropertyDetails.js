import { Button, Modal } from 'antd';
import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { httpGet, httpPost } from '../api';
import { notifySuccess } from '../helpers/notification';
import { USER_ROLES } from '../app/constants';

function PropertyDetails() {
  const auth = useSelector((state) => state.auth);
  const user = auth.user || {};

  const params = useParams();
  const [property, setProperty] = useState({});
  const [formData, setFormData] = useState({
    price: '',
    message: '',
  });
  const offerRef = useRef();
  const isCustomer = USER_ROLES.CUSTOMER === user.role;

  const fetchProperty = async () => {
    const res = await httpGet({
      url: `/properties/${params.id}`,
    });
    setProperty(res.data);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = async () => {
    await httpPost({
      url: `/properties/${params.id}/offer`,
      data: formData,
    });
    notifySuccess('Offer sent!');
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    fetchProperty();
  }, [params.id]);

  const p = property;

  return (
    <div>
      <div className="p-5 text-center">
        <h1>Property Details</h1>
        <h2>{property.title}</h2>
        <p>{property.description}</p>
        <p>${property.price}</p>
        <p>listingType: {p.listingType}</p>
        <p>propertyStatus: {p.propertyStatus}</p>
        <p>
          Location: {p.address} {p.city} {p.state}, {p.zipCode}
        </p>
        <img className="block mx-auto w-1/4" src={property.image} alt={property.title} />
      </div>
      {user?.email && isCustomer && (
        <div className="flex justify-center">
          <Button onClick={showModal} type="default">
            Make Offer?
          </Button>
          <Modal
            title="Make an Offer to the Seller"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            okType="danger"
            okText="Send Offer"
          >
            <form ref={offerRef} className="flex flex-col">
              <input
                type="text"
                onChange={handleInputChange}
                value={formData.message}
                name="message"
                placeholder="Message"
                required
              />
              <input
                type="number"
                onChange={handleInputChange}
                value={formData.price}
                name="price"
                placeholder="Insert Price"
                required
              />
            </form>
          </Modal>
        </div>
      )}
    </div>
  );
}

export default PropertyDetails;
