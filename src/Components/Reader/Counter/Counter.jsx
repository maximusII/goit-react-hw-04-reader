import React, { Component, Fragment } from 'react';
import styles from './Counter.module.css';
import PropTypes from 'prop-types';

class Counter extends Component {
  static propTypes = {
    activePageNumber: PropTypes.number.isRequired,
    lastPageNumber: PropTypes.number.isRequired,
  };

  render() {
    const { activePageNumber } = this.props;
    const { lastPageNumber } = this.props;
    return (
      <Fragment>
        <p className={styles.counter}>
          {activePageNumber}/{lastPageNumber}
        </p>
      </Fragment>
    );
  }
}

export default Counter;
