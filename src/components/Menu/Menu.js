import React from 'react';
import './Menu.css'

const Menu = ({selectSubject, categories}) => {
    const menuButtons = Object.keys(categories).splice(0, 5).map((key, index) => {
    return <li onClick={() => selectSubject(categories[key])} key={index}>{key}</li>
  });

  return (
    <div className="menu">
      <ul>
        {menuButtons}
      </ul>
    </div>
  )
}

export default Menu;



