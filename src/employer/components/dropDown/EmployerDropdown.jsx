import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./EmployerDropdown.css"

export default function EmployerDropdown({props}) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  console.log(props)
  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {props.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                  {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
