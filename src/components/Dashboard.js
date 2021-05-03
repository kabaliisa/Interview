import React, { Fragment } from "react";

import classes from "./Dashboard.module.css";
import Footer from "./UI/Footer";
import Header from "./UI/Header";

function Dashboard(props) {
  return (
    <Fragment>
      <Header onLogout={props.onLogoutHandler} />
      <h3 className={classes.dashboard}>dashboard content</h3>
      <Footer />
    </Fragment>
  );
}

export default Dashboard;
