import { Link, useHistory } from "react-router-dom";
import React, { useState } from "react";
import StaffButton from "../button/StaffButton";
import StaffDropDown from "../dropDown/StaffDropDown";
import { MenuItemConfirm, MenuItemView } from "../menuItem/MenuItemStaff";

export default function StaffNavbar() {
  const [click, setClick] = useState(false);
  const [dropdownConfirm, setDropdownConfirm] = useState(false);
  const [dropdownView, setDropdownView] = useState(false);

  const handleClick = () => setClick(!click);

  const history = useHistory();

  const closeMobileMenu = () => setClick(false);

  const onMouseEnterConfirm = () => {
    if (window.innerWidth < 960) {
      setDropdownConfirm(false);
    } else {
      setDropdownConfirm(true);
    }
  };

  const onMouseLeaveConfirm = () => {
    if (window.innerWidth < 960) {
      setDropdownConfirm(false);
    } else {
      setDropdownConfirm(false);
    }
  };
  const onMouseEnterView = () => {
    if (window.innerWidth < 960) {
      setDropdownView(false);
    } else {
      setDropdownView(true);
    }
  };
  const onMouseLeaveView = () => {
    if (window.innerWidth < 960) {
      setDropdownView(false);
    } else {
      setDropdownView(false);
    }
  };
  return (
    <>
      <nav className="navbar">
        <img
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt="Avatar"
          class="avatar"
        ></img>
        <Link
          onClick={() => history.push("/staff/home")}
          className="navbar-logo"
        >
          STAFF
          <i class="fas fa-microscope"></i>
        </Link>

        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              onClick={(() => history.push("/staff/home"), closeMobileMenu)}
              className="nav-links"
            >
              Home
            </Link>
          </li>

          <li
            className="nav-item"
            onMouseEnter={onMouseEnterConfirm}
            onMouseLeave={onMouseLeaveConfirm}
          >
            <Link className="nav-links">Confirm</Link>
            {dropdownConfirm && <StaffDropDown props={MenuItemConfirm} />}
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnterView}
            onMouseLeave={onMouseLeaveView}
          >
            <Link className="nav-links">View</Link>
            {dropdownView && <StaffDropDown props={MenuItemView} />}
          </li>
          <li className="nav-item">
            <Link
              onClick={(() => history.push("/staff/contact"), closeMobileMenu)}
              className="nav-links"
            >
              Contact
            </Link>
          </li>
        </ul>

        <StaffButton />
      </nav>
    </>
  );
}
