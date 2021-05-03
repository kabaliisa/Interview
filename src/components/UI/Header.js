import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import classes from "./Header.module.css";

function Header(props) {
  const history = useHistory();
  const logoutHandler = () => {
    history.push("/");
    props.onLogout();
  };
  return (
    <Fragment>
      <div className={classes.header}>
        <a href="#default" className={classes.logo}>
          CompanyLogo
        </a>
        <div className={classes["header-right"]}>
          {/* <a class="active" href="#home">
            Home
          </a>
          <a href="#contact">Contact</a> */}
          <button className={classes["btn-logout"]} onClick={logoutHandler}>
            Logout
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export default Header;
