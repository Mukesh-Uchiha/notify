import React from 'react';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

import Lhs from './Lhs';
function Headers({ onButtonClicked }) {
  return (
    <header>
      <h1>
        <NotificationsActiveIcon className="Icon" /> Notify
      </h1>
      <Lhs onButtonClicked={onButtonClicked} />
    </header>
  );
}

export default Headers;
