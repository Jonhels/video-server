import React from 'react';
import './Leftmenu.css';
import Premiumfive from './Premiumfive';
import Promotedlive from './Promotedlive';
import Donation from './Donation';

function Leftmenu() {
  return (
    <div className="Leftmenu">
      <Premiumfive />
      <Promotedlive />
      <Donation />
    </div>
  );
}

export default Leftmenu;
