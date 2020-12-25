import { useState } from 'react';

import { Button } from '../../components';

export function PhoneDetails() {
  return (
    <div className="flex flex-col m-6 items-center justify-center text-gray-700 text-sm font-light min-w-min w-screen">
      <Button color={Button.COLOR_GREEN} width="w-64" onClick={() => null}>
        Edit
      </Button>
    </div>
  );
}
