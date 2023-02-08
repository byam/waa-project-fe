import { Button, Modal } from 'antd';
import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { OFFER_STATUS } from '../app/constants';
import dummyData from '../dummy-data';

function PropertyDetails() {
  const auth = useSelector((state) => state.auth);
  const user = auth.user || {};
  // TODO: fetch user
  const currentUser = dummyData.users.filter((u) => u.email === user?.email)[0];

  const params = useParams();
  const [property, setProperty] = useState({});
  const offerRef = useRef();

  const fetchProperty = () => {
    // TODO: integrate with backend
    setProperty(dummyData.properties.find((p) => p.id === parseInt(params.id, 10)));
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    // TODO: integrate with backend
    dummyData.offers.push({
      id: dummyData.offers.length + 1,
      propertyId: property.id,
      propertyTitle: property.title,
      ownerUserId: property.owner,
      customerUserId: currentUser.id,
      customerEmail: user.email,
      offferPrice: offerRef.current.price.value,
      message: offerRef.current.message.value,
      status: OFFER_STATUS.PENDING,
    });
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    fetchProperty();
  }, [params.id, user]);

  return (
    <div>
      <div className="p-5 text-center">
        <h1>Property Details</h1>
        <h2>{property.title}</h2>
        <p>{property.description}</p>
        <p>{property.price}</p>
        <img className="block mx-auto w-1/4" src={property.imageSrcs} alt={property.title} />
      </div>
      {user?.email && (
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
              <input type="text" name="message" label="message" placeholder="Message" required />
              <input type="number" name="price" label="price" placeholder="Insert Price" required />
            </form>
          </Modal>
        </div>
      )}
    </div>
  );
}

export default PropertyDetails;
