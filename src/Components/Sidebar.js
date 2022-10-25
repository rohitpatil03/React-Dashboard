import React from 'react';
import { FaUserAlt } from 'react-icons/fa'
import logo from './logo.svg';


const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar-header'>
        <div className='sidebar-arragement'>
          <br />
          <h1><FaUserAlt/></h1>
          <h3>Admin</h3>
          <br />
          <br />
          <button className='close-btn'><h3>Dashboard</h3></button>
          <button className='close-btn'><h3>Logout</h3></button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;