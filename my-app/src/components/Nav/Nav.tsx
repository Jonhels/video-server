import React from 'react';
import './Nav.css';
import Search from './Search';
import MonthButton from './MonthButton';

function Nav() {
  return (
    <div className="Nav">
      <Search />
      <MonthButton />
    </div>
  );
}

export default Nav;
