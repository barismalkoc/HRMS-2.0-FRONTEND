import React, { useState } from "react";
import "./EmployerNavbar.css";
import { Link, useHistory } from "react-router-dom";
import EmployerDropdown from "../dropDown/EmployerDropdown";
import EmployerButton from "../button/EmployerButton";
import { ControlEmployer, MenuItemsAdd } from "../menuItem/MenuItem";

export default function EmployerNavbar() {
  const [click, setClick] = useState(false);
  const [dropdownAdd, setDropdownAdd] = useState(false);
  const [dropdownControl, setDropdownControl] = useState(false);

  const handleClick = () => setClick(!click);

  const history = useHistory();

  const closeMobileMenu = () => setClick(false);

  const onMouseEnterAdd = () => {
    if (window.innerWidth < 960) {
      setDropdownAdd(false);
    } else {
      setDropdownAdd(true);
    }
  };

  const onMouseLeaveAdd = () => {
    if (window.innerWidth < 960) {
      setDropdownAdd(false);
    } else {
      setDropdownAdd(false);
    }
  };
  
  const onMouseLeaveControl = () => {
    if (window.innerWidth < 960) {
      setDropdownControl(false);
    } else {
      setDropdownControl(false);
    }
  };
  const onMouseEnterControl = () => {
    if (window.innerWidth < 960) {
      setDropdownControl(false);
    } else {
      setDropdownControl(true);
    }
  };

  return (
    <>
      <nav className="navbar">
        <img
          src="https://www.w3schools.com/howto/img_avatar2.png"
          alt="Avatar"
          class="avatar"
        ></img>
        <Link
          onClick={() => history.push("/employer/home")}
          className="navbar-logo"
        >
          EMPLOYER
          <i class="fas fa-user-tie"></i>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              onClick={(() => history.push("/employer/home"), closeMobileMenu)}
              className="nav-links"
            >
              Home
            </Link>
          </li>

          <li
            className="nav-item"
            onMouseEnter={onMouseEnterAdd}
            onMouseLeave={onMouseLeaveAdd}
          >
            <Link className="nav-links">Add</Link>
            {dropdownAdd && <EmployerDropdown props={MenuItemsAdd} />}
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnterControl}
            onMouseLeave={onMouseLeaveControl}
          >
            <Link className="nav-links">Control JA</Link>
            {dropdownControl && <EmployerDropdown props={ControlEmployer} />}
          </li>
          <li className="nav-item">
            <Link
              onClick={(history.goForward("employer/contact"), closeMobileMenu)}
              className="nav-links"
            >
              Contact
            </Link>
          </li>
        </ul>
        <EmployerButton />
      </nav>
    </>
  );
}
