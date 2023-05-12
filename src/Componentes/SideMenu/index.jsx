import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaHome, FaUser, FaCog } from 'react-icons/fa';
import './index.css';
function SideMenu() {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className={`menu-lateral ${isExpanded ? 'expanded' : 'compressed'}`}>
      <div className=" arrow menu-toggle" onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? <FaChevronLeft /> : <FaChevronRight />}
      </div>
      <ul className="menu-items">
        <li>
          <a href="/">
            {isExpanded ? (
              <>
                <FaHome />
                <span>Home</span>
              </>
            ) : (
              <FaHome />
            )}
          </a>
        </li>
        <li>
          <a href="/exemple">
            {isExpanded ? (
              <>
                <FaUser />
                <span>Exemple</span>
              </>
            ) : (
              <FaUser />
            )}
          </a>
        </li>
        <li>
          <a href="/settings">
            {isExpanded ? (
              <>
                <FaCog />
                <span>Settings</span>
              </>
            ) : (
              <FaCog />
            )}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SideMenu;