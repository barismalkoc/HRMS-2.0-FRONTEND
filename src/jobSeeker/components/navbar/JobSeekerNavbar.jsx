import { Link, useHistory } from "react-router-dom";
import React, { useState } from "react";
import JobSeekerDropdown from "../dropDown/JobSeekerDropdown";
import JobSeekerButton from "../button/JobSeekerButton";
import { MenuItemJSAdd, MenuItemJSView } from "../menuItem/MenuItemJobSeeker";
export default function JobSeekerNavbar() {
  const [click, setClick] = useState(false);
  const [dropdownAdd, setDropdownAdd] = useState(false);
  const [dropdownView, setDropdownView] = useState(false);

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
          src="https://www.w3schools.com/w3images/avatar2.png"
          alt="Avatar"
          class="avatar"
        ></img>
        <Link
          onClick={() => history.push("/jobSeeker/home")}
          className="navbar-logo"
        >
          JOB SEEKER
          <i class="fas fa-microscope"></i>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              onClick={(() => history.push("/jobSeeker/home"), closeMobileMenu)}
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
            {dropdownAdd && <JobSeekerDropdown props={MenuItemJSAdd} />}
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnterView}
            onMouseLeave={onMouseLeaveView}
          >
            <Link className="nav-links">View</Link>
            {dropdownView && <JobSeekerDropdown props={MenuItemJSView} />}
          </li>
          <li className="nav-item">
            <Link
              onClick={
                (() => history.push("/jobSeeker/contact"), closeMobileMenu)
              }
              className="nav-links"
            >
              Contact
            </Link>
          </li>
        </ul>
        <JobSeekerButton />
      </nav>
    </>
  );
}
