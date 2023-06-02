import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaHome, FaAccessibleIcon, FaStethoscope } from 'react-icons/fa';
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
          <a href="/complexity">
            {isExpanded ? (
              <>
                <FaAccessibleIcon />
                <span>Nível de Complexidade</span>
              </>
            ) : (
              <FaAccessibleIcon />
            )}
          </a>
        </li>
        <li>
          <a href="/specialty">
            {isExpanded ? (
              <>
                <FaStethoscope />
                <span>Especialidade</span>
              </>
            ) : (
              <FaStethoscope />
            )}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SideMenu;