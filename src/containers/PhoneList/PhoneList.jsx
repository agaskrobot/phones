import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import actions from '../../redux/actions/phone';
import { getPhoneList, addPhone } from '../../api';
import { Button, Alert, Spinner } from '../../components';
import { CreatePhoneModal } from './CreatePhoneModal';

export function PhoneList() {
  const history = useHistory();
  const phoneList = useSelector((s) => s.phone.items);
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // useEffect loads all phones.
  useEffect(() => {
    setLoading(true);
    sessionStorage.removeItem('phoneId');
    dispatch(actions.selectedPhone(null));
    getPhoneList()
      .then((response) => dispatch(actions.loadTable(response.data)))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  // Dispatch selected phone
  const handlePhoneSelect = (phone) => {
    dispatch(actions.selectedPhone(phone));
    history.push(`/phone/${phone.id}/details`);
  };

  // Create new phone
  const handleCreatePhone = (name) => {
    setLoading(true);
    addPhone(name)
      .then((response) => {
        setLoading(false);
        dispatch(actions.appendPhone(response.data.content));
        dispatch(actions.selectedPhone(response.data.content));
        history.push(`/phone/${response.data.content.id}/details`);
      })
      .catch((error) => {
        setLoading(false);
        setShowModal(false);
        setError(error.message);
      });
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-wrap md:px-20 flex-row justify-start text-gray-700 text-sm font-light min-w-min w-screen">
          <Alert error={error} onClose={() => setError(null)} />
          <CreatePhoneModal showModal={showModal} onClose={() => setShowModal(false)} onCreate={handleCreatePhone} />
          <div className="flex flex-wrap justify-center md:justify-end w-full m-6">
            <Button color={Button.COLOR_GREEN} width="w-64" onClick={() => setShowModal(true)}>
              Add new phone
            </Button>
          </div>
          {phoneList.map((phone) => (
            <div
              key={phone.id}
              className="inline-block hover:bg-white cursor-pointer p-6 rounded hover:shadow-lg"
              onClick={() => handlePhoneSelect(phone)}
            >
              {phone.imageFileName !== null && phone.imageFileName !== undefined && phone.imageFileName !== '' ? (
                <img src={phone.imageFileName} className="w-64 h-64 border border-gray-300" alt="avatar" />
              ) : (
                <div className="flex justify-center items-center text-gray-700 w-64 h-64 border border-gray-300">
                  No image available
                </div>
              )}
              <div>Model : {phone.name}</div>
              <div>Color : {phone.color}</div>
              <div>Price : {phone.price} $</div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
