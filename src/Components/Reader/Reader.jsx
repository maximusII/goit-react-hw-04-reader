import React, { Component } from 'react';
import Controls from './Controls/Controls';
import Counter from './Counter/Counter';
import Publication from './Publication/Publication';
import styles from './Reader.module.css';
import PropTypes from 'prop-types';

class Reader extends Component {
  static propTypes = {
    items: PropTypes.array,
    initialPageNumber: PropTypes.number.isRequired,
    isPrevButtonActive: PropTypes.bool,
    isNextButtonActive: PropTypes.bool,
  };

  state = {
    activePageNumber: this.props.initialPageNumber,
  };

  handlePageNumber = e => {
    const buttonName = e.target.name;

    buttonName === 'forward'
      ? this.setState(prevState => {
          return { activePageNumber: prevState.activePageNumber + 1 };
        })
      : this.setState(prevState => {
          return { activePageNumber: prevState.activePageNumber - 1 };
        });
  };

  render() {
    const { activePageNumber } = this.state;
    const { items } = this.props;
    const article = items[activePageNumber - 1];

    return (
      <div className={styles.reader}>
        <Controls
          handlePageNumber={this.handlePageNumber}
          isPrevButtonActive={activePageNumber !== 1}
          isNextButtonActive={activePageNumber !== items.length}
        />
        <Counter
          activePageNumber={activePageNumber}
          lastPageNumber={items.length}
        />
        <Publication publication={article} />
      </div>
    );
  }
}

export default Reader;
