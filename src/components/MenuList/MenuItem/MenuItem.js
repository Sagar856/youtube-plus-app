// Functional Component with Arrow Function

import React from 'react';
import { NavLink } from 'react-router-dom';
import './MenuList.scss';

const MenuList = () => {
  const menuList = [
    {
      id: '0',
      url: '/',
      title: 'Home'
    },
    {
      id: '1',
      url: '/styled-comp-demo',
      title: 'StyledCompDemo'
    },
    {
      id: '2',
      url: '/hoc-demo',
      title: 'HOC demo'
    },
    {
      id: '3',
      url: '/about',
      title: 'About'
    },
    {
      id: '4',
      url: '/contact-us',
      title: 'Contact Us'
    },
    {
      id: '5',
      url: '/insta-feed',
      title: 'Insta Photos'
    },
    {
      id: '6',
      url: '/hooks-demo',
      title: 'Hooks Demo'
    },
    {
      id: '7',
      url: '/products',
      title: 'Products'
    },
    {
      id: '8',
      url: 'render-props-demo',
      title: 'Render Props Demo'
    }
  ];

  return (
    <ul className="navbar-nav me-auto mb-2 mb-md-0">
      {menuList.map((menu) => (
        <li className="nav-item" key={menu.id}>
          <NavLink to={menu.url} className="nav-link navbar__link" aria-current="page">
            {menu.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MenuList;
