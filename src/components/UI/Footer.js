import React from "react";
import classes from "./Footer.module.css";

function Footer() {
  return (
    <footer>
      <div className={classes.footer}>
        <div className={classes["footer_about"]}>
          <h3>About Us</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            aliquid, inventore veritatis, a beatae asperiores eveniet ex
            repudiandae voluptatibus tempora, optio nam harum temporibus
            tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Nisi recusandae dolore molestiae quis iste.
          </p>
        </div>
        <div className={classes["footer_main"]}>
          <h3>Quick Start</h3>
          <ul>
            <li>lorem lorem</li>
            <li>lorem</li>
            <li>lorem lorem</li>
            <li>lorem lorem</li>
          </ul>
        </div>
      </div>
      <div className={classes.copyright}>
        Copyright © 2021 All Rights Reserved .
      </div>
    </footer>
  );
}

export default Footer;
