import React from "react";
import styles from "./index.module.css";

/**
 * @param {string} size m | s | xl
 * @param {string} view primary | secondary | secondaryAlt
 */
export const Button = ({ size = "m", view = "primary" }) => {


  return <button className={`${styles.button} ${styles[size]}`}>ok</button>;
};
