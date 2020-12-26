import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Button, Input } from '../../components';

export function EditPhoneForm({ readOnly, phone, onSave }) {
  const [error, setError] = useState(null);

  const [name, setName] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [description, setDescription] = useState('');
  const [color, setColor] = useState('');
  const [price, setPrice] = useState(0);
  const [imageFileName, setImageFileName] = useState('');
  const [screen, setScreen] = useState('');
  const [processor, setProcessor] = useState('');
  const [ram, setRam] = useState('');

  useEffect(() => {
    if (phone) {
      setName(phone.name);
      setManufacturer(phone.manufacturer ? phone.manufacturer : '');
      setDescription(phone.description ? phone.description : '');
      setColor(phone.color ? phone.color : '');
      setPrice(phone.price ? phone.price : 0);
      setScreen(phone.screen ? phone.screen : '');
      setProcessor(phone.processor ? phone.processor : '');
      setRam(phone.ram ? phone.manufacturer : 0);
    }
  }, [phone]);

  const handleSaveClick = () => {
    setError(null);
    if (name !== '') {
      const data = { name, manufacturer, description, color, price, imageFileName, screen, processor, ram };
      onSave(data);
    } else {
      setError('This field is required');
    }
  };

  return (
    <form className="flex flex-col items-center justify-center">
      <div className="flex flex-col justify-start items-start my-3">
        <Input
          id="name"
          width="w-64"
          placeholder="Model"
          value={name}
          error={error}
          readOnly={readOnly}
          onChange={setName}
        />
        <Input
          id="manufacturer"
          width="w-64"
          placeholder="Manufacturer"
          value={manufacturer}
          readOnly={readOnly}
          onChange={setManufacturer}
        />
        <Input
          id="description"
          width="w-64"
          placeholder="Description"
          textarea={true}
          value={description}
          readOnly={readOnly}
          onChange={setDescription}
        />
        <Input id="color" width="w-64" placeholder="Color" value={color} readOnly={readOnly} onChange={setColor} />
        <Input
          id="price"
          width="w-64"
          placeholder="Price"
          value={price}
          readOnly={readOnly}
          onChange={setPrice}
          type="number"
        />
        <Input id="screen" width="w-64" placeholder="Screen" value={screen} readOnly={readOnly} onChange={setScreen} />
        <Input
          id="processor"
          width="w-64"
          placeholder="Processor"
          value={processor}
          readOnly={readOnly}
          onChange={setProcessor}
        />
        <Input
          id="ram"
          width="w-64"
          placeholder="Ram"
          value={ram}
          readOnly={readOnly}
          onChange={setRam}
          type="number"
        />
      </div>
      {!readOnly ? (
        <Button color={Button.COLOR_GREEN} width="w-64" disabled={readOnly} onClick={handleSaveClick}>
          Save Changes
        </Button>
      ) : (
        <div className="h-12" />
      )}
    </form>
  );
}
EditPhoneForm.propTypes = {
  phone: PropTypes.object,
  readOnly: PropTypes.bool,
  onSave: PropTypes.func,
};
