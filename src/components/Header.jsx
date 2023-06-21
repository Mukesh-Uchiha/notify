import * as React from 'react';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

import Lhs from './Lhs';
function Headers() {
  return (
    <header>
      <h1>
        <NotificationsActiveIcon className="Icon" /> Notify
      </h1>
      <Lhs />
    </header>
  );
}

export default Headers;
