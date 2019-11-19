import React, { Component, Fragment } from 'react';
import styles from './Controls.module.css';
import PropTypes from 'prop-types';

class Controls extends Component {
  static propTypes = {
    handlePageNumber: PropTypes.func.isRequired,
    isPrevButtonActive: PropTypes.bool.isRequired,
    isNextButtonActive: PropTypes.bool.isRequired,
  };

  render() {
    const {
      handlePageNumber,
      isPrevButtonActive,
      isNextButtonActive,
    } = this.props;

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
  }
}

export default Controls;
