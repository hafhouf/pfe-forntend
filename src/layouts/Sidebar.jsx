import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/admin/add-product">Add Product</Link>
        </li>
        <li>
          <Link to="/admin/add-form">Add Form</Link>
        </li>
        <li>
          <Link to="/admin/forms">Manage Forms</Link>
        </li>
        <li>
          <Link to="/admin/users">Manage Users</Link>
        </li>
        <li>
          <Link to="/admin/profile">Profile</Link>
        </li>
        <li>
          <Link to="/admin/gift-card-store">Gift Card Store</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
