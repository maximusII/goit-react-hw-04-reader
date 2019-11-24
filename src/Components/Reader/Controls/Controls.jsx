import React, { Fragment } from "react";
import styles from "./Controls.module.css";
import PropTypes from "prop-types";

const Controls = ({
  handlePageNumber,
  isPrevButtonActive,
  isNextButtonActive
}) => {
  return (
    <Fragment>
      <section className={styles.controls}>
        <button
          type="button"
          className={isPrevButtonActive ? styles.button : styles.disabled}
          disabled={!isPrevButtonActive}
          name="back"
          onClick={handlePageNumber}
        >
          Назад
        </button>
        <button
          type="button"
          className={isNextButtonActive ? styles.button : styles.disabled}
          disabled={!isNextButtonActive}
          name="forward"
          onClick={handlePageNumber}
        >
          Вперед
        </button>
      </section>
    </Fragment>
  );
};

Controls.propTypes = {
  handlePageNumber: PropTypes.func.isRequired,
  isPrevButtonActive: PropTypes.bool.isRequired,
  isNextButtonActive: PropTypes.bool.isRequired
};

export default Controls;
