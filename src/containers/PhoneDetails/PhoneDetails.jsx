import { useState, useLayoutEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import { DeletePhoneModal } from './DeletePhoneModal';
import { EditPhoneForm } from './EditPhoneForm';
import { Button, Alert, Spinner } from '../../components';
import actions from '../../redux/actions/phone';
import { getPhone, deletePhone, updatePhone } from '../../api';

export function PhoneDetails() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const phone = useSelector((s) => s.phone.selected);
  const [readOnly, setReadOnly] = useState(true);

  const dispatch = useDispatch();
  const history = useHistory();
  const { phoneId } = useParams();

  // Load selected phone
  useLayoutEffect(() => {
    if (!phone) {
      setLoading(true);
      const id = sessionStorage.getItem('phoneId');
      if (!phoneId && !id) {
        history.push('/');
      } else {
        const newPhoneId = phoneId ? phoneId : id;
        getPhone(newPhoneId)
          .then((response) => dispatch(actions.selectedPhone(response.data)))
          .catch((error) => {
            dispatch(actions.selectedPhone(null));
            history.push('/404');
            setError(error.message);
          })
          .finally(() => setLoading(false));
      }
    }
  }, []);

  // Delete phone and dispatch the action
  const handleDelete = () => {
    setLoading(true);
    deletePhone(phone.id)
      .then(() => {
        dispatch(actions.deletePhone(phone.id));
        setLoading(false);
        history.push('/');
      })
      .catch((error) => {
        setShowModal(false);
        setLoading(false);
        setError(error.message);
      });
  };

  // Edit phone and dispatch the action
  const handleEdit = (data) => {
    setLoading(true);
    updatePhone(phone.id, data)
      .then((response) => {
        setMessage('Data has been successfully saved');
        dispatch(actions.replacePhone(response.data));
        setReadOnly(true);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
      });
  };

  const handleAlertClose = () => {
    setError(null);
    setMessage(null);
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Button color={Button.COLOR_INDIGO} width="w-36" onClick={() => history.push('/')}>
            {'<-   Back to the list'}
          </Button>
          <div className="flex flex-col items-center justify-center min-h-screen text-gray-700 text-sm font-light min-w-min">
            <Alert error={error} message={message} onClose={handleAlertClose} />
            <DeletePhoneModal
              phoneName={phone ? phone.name : ''}
              showModal={showModal}
              onClose={() => setShowModal(false)}
              onDelete={handleDelete}
            />
            <div className="flex flex-wrap flex-col m-6 p-6 items-center bg-white shadow-lg rounded-lg justify-center min-w-min">
              <div className="flex flex-wrap justify-center">
                <Button
                  color={Button.COLOR_YELLOW}
                  width="w-36"
                  disabled={!readOnly}
                  onClick={() => setReadOnly(false)}
                >
                  Edit
                </Button>
                <Button color={Button.COLOR_RED} width="w-36" disabled={!readOnly} onClick={() => setShowModal(true)}>
                  Delete
                </Button>
              </div>
              <EditPhoneForm phone={phone} onSave={handleEdit} readOnly={readOnly} />
            </div>
          </div>
        </>
      )}
    </>
  );
}
