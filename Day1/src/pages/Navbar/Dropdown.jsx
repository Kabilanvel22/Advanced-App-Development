import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuItems } from './MenuItems';
import '../../assets/css/dropdown.css';

const Dropdown = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {MenuItems.map((item, index) => (
          <li key={index}>
            <div
              className={item.cName}
              onClick={() => setClick(false)}
            >
              {item.title}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Dropdown;
