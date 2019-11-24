import React, { Fragment } from "react";
import styles from "./Counter.module.css";
import PropTypes from "prop-types";

const Counter = ({ activePageNumber, lastPageNumber }) => {
  return (
    <Fragment>
      <p className={styles.counter}>
        {activePageNumber}/{lastPageNumber}
      </p>
    </Fragment>
  );
};

Counter.propTypes = {
  activePageNumber: PropTypes.number.isRequired,
  lastPageNumber: PropTypes.number.isRequired
};

export default Counter;
