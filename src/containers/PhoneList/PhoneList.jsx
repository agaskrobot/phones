import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import actions from '../../redux/actions/phone';
import { getPhoneList } from '../../api';
import { Button } from '../../components';

export function PhoneList() {
  const history = useHistory();
  const phoneList = useSelector((s) => s.phone.items);
  const dispatch = useDispatch();

  // useEffect loads all phones.
  useEffect(() => {
    // setLoading(true);
    sessionStorage.removeItem('phoneId');
    dispatch(actions.selectedPhone(null));
    getPhoneList()
      .then((response) => dispatch(actions.loadTable(response.data)))
      .catch(() => console.log('error'));
    //   .finally(() => setLoading(false));
  }, []);

  const handlePhoneSelect = (phone) => {
    dispatch(actions.selectedPhone(phone));
    history.push(`/phone/${phone.id}/details`);
  };

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
            <Button color={Button.COLOR_INDIGO} onClick={(phone) => handlePhoneSelect(phone)}>
              See more
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
