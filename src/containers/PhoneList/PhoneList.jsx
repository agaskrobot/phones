import { useEffect } from 'react';
import { getPhoneList } from '../api';

export function PhoneList() {
  // useEffect loads all contacts.
  useEffect(() => {
    // setLoading(true);
    getPhoneList()
      .then((u) => console.log(u))
      .catch(() => console.log('error'));
    //   .finally(() => setLoading(false));
  }, []);
  return (
    <div
      style={{ backgroundSize: '100% auto' }}
      className="flex flex-col pb-64 text-center bg-no-repeat bg-bottom relative items-center justify-center w-screen h-screen bg-not-found"
    >
      Phone List
    </div>
  );
}
