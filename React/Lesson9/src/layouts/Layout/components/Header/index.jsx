import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";

const Header = () => {
  return (
    <>
      <ul className={styles.nav}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/analytics">Analytics</Link>
        </li>
        <li>
          <Link to="/create-post">Create Post</Link>
        </li>
      </ul>
    </>
  );
};

export default Header;
