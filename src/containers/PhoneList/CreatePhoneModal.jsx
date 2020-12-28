import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Button, Modal, Input } from '../../components';

export function CreatePhoneModal({ showModal, onClose, onCreate }) {
  const [error, setError] = useState(null);
  const [name, setName] = useState('');

  const handleCreateClick = () => {
    setError(null);
    if (name !== '') {
      onCreate(name);
    } else {
      setError('This field is required');
    }
  };

  // useEffect clean input
  useEffect(() => {
    if (showModal === false) {
      setName('');
    }
  }, [showModal]);

  return (
    <Modal title="Create item" showModal={showModal} onClose={onClose}>
      <div className="flex flex-col flex-wrap items-center justify-center p-4">
        <Input id="name" width="w-64" placeholder="Model" value={name} error={error} onChange={setName} />
        <div className="flex flex-wrap mt-5">
          <Button color={Button.COLOR_GREEN} width="w-36" onClick={handleCreateClick}>
            Create phone
          </Button>
          <Button color={Button.COLOR_YELLOW} width="w-36" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
}
CreatePhoneModal.propTypes = {
  showModal: PropTypes.bool,
  onClose: PropTypes.func,
  onCreate: PropTypes.func
};
