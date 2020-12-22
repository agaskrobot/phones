import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from '../../components';

const dummyPhoneList = [
  {
    id: 0,
    name: 'iPhone 7',
    manufacturer: 'Apple',
    description: 'lorem ipsum dolor sit amet consectetur.',
    color: 'black',
    price: 769,
    imageFileName: 'IPhone_7.png',
    screen: '4,7 inch IPS',
    processor: 'A10 Fusion',
    ram: 2,
  },
  {
    id: 1,
    name: 'iPhone 6',
    manufacturer: 'Apple',
    description: 'lorem ipsum dolor sit amet consectetur.',
    color: 'white',
    price: 769,
    imageFileName: 'IPhone_7.png',
    screen: '4,7 inch IPS',
    processor: 'A10 Fusion',
    ram: 2,
  },
  {
    id: 2,
    name: 'Samsung S20',
    manufacturer: 'Samsung',
    description: 'lorem ipsum dolor sit amet consectetur.',
    color: 'gold',
    price: 769,
    imageFileName: 'IPhone_7.png',
    screen: '4,7 inch IPS',
    processor: 'A10 Fusion',
    ram: 2,
  },
  {
    id: 3,
    name: 'iPhone 7',
    manufacturer: 'Apple',
    description: 'lorem ipsum dolor sit amet consectetur.',
    color: 'black',
    price: 769,
    imageFileName: 'IPhone_7.png',
    screen: '4,7 inch IPS',
    processor: 'A10 Fusion',
    ram: 2,
  },
  {
    id: 4,
    name: 'iPhone 6',
    manufacturer: 'Apple',
    description: 'lorem ipsum dolor sit amet consectetur.',
    color: 'white',
    price: 769,
    imageFileName: 'IPhone_7.png',
    screen: '4,7 inch IPS',
    processor: 'A10 Fusion',
    ram: 2,
  },
  {
    id: 5,
    name: 'Samsung S20',
    manufacturer: 'Samsung',
    description: 'lorem ipsum dolor sit amet consectetur.',
    color: 'gold',
    price: 769,
    imageFileName: 'IPhone_7.png',
    screen: '4,7 inch IPS',
    processor: 'A10 Fusion',
    ram: 2,
  },
];
export function PhoneList() {
  const history = useHistory();
  const [phoneList, setPhoneList] = useState(dummyPhoneList);

  return (
    <div className="flex flex-wrap justify-center text-gray-700 text-sm font-light min-w-min w-screen">
      <div className="flex w-full m-6">
        <Button color={Button.COLOR_GREEN} width="w-64" onClick={() => null}>
          Add new phone
        </Button>
      </div>
      {phoneList.map((phone) => (
        <div key={phone.id}>
          <div className="w-64 m-6">
            <img src={phone.imageFileName} className="w-64 h-64 border border-gray-500" alt="phone" />
            <div>Model : {phone.name}</div>
            <div>Color : {phone.color}</div>
            <div>Price : {phone.price} $</div>
            <Button color={Button.COLOR_INDIGO} onClick={() => history.push(`/phone/${phone.id}/details`)}>
              See more
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
