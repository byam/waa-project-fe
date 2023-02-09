import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button, Modal } from 'antd';
import { PROPERTY_STATUS, USER_ROLES } from '../app/constants';
import { httpDelete, httpGet } from '../api';
import { notifyError, notifySuccess } from '../helpers/notification';
import Property from './Property';

function PropertiesOwner() {
  const navigate = useNavigate();

  const auth = useSelector((state) => state.auth);
  const user = auth.user || {};
  const isOwner = USER_ROLES.OWNER === user.role;

  const [properties, setProperties] = useState([]);

  const [flag, setFlag] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleDelete = (propertyId) => async () => {
    console.log('handleDelete:', propertyId);
    try {
      const res = await httpDelete({
        url: `properties/${propertyId}`,
      });
      if (res.data) {
        console.log('Deleted:', res.data);
        notifySuccess('Deleted successfully');
        setIsModalOpen(false);
        setFlag(flag + 1);
      }
    } catch (err) {
      notifyError('Failed to delete');
      console.log(err);
    }
  };

  const fetchProperties = async () => {
    if (isOwner) {
      try {
        const res = await httpGet({
          url: `/properties?owner_id=${user.userId}`,
        });
        if (res.data) setProperties(res.data);
      } catch (err) {
        notifyError('Failed to fetch from system');
        console.log(err);
      }
    }
  };

  const handleEdit = (id) => {
    navigate(`/properties/${id}/edit`);
  };

  useEffect(() => {
    fetchProperties();
  }, [user, flag]);

  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">ps</h2>

          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {properties.map((p) => (
              <div key={p.id}>
                <Property key={p.id} p={p} />
                <Button onClick={() => handleEdit(p.id)} type="default">
                  Edit
                </Button>{' '}
                {p.propertyStatus !== PROPERTY_STATUS.PENDING && (
                  <div>
                    <Button onClick={showModal} type="default">
                      Delete
                    </Button>

                    <Modal
                      title={`Deleting this "${p.title}" ?`}
                      open={isModalOpen}
                      onOk={handleDelete(p.id)}
                      onCancel={handleCancel}
                      okType="danger"
                      okText="Delete"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertiesOwner;
