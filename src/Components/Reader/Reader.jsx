import React, { Component } from "react";
import Controls from "./Controls/Controls";
import Counter from "./Counter/Counter";
import Publication from "./Publication/Publication";
import styles from "./Reader.module.css";
import publications from "../Reader/data/publications.json";
import queryString from "query-string";

class Reader extends Component {
  state = {};

  componentDidMount() {
    const { location, history } = this.props;
    history.push({
      ...location,
      search: location.search
        ? `item=${+queryString.parse(location.search).item}`
        : "item=1"
    });
  }

  handlePageNumber = e => {
    const buttonName = e.target.name;
    const { location, history } = this.props;
    const currentItemNumber = Number(location.search.slice(6));

    if (buttonName === "forward" && currentItemNumber < publications.length) {
      history.push({
        ...location,
        search: `item=${currentItemNumber + 1}`
      });
    } else if (buttonName !== "forward" && currentItemNumber > 1) {
      history.push({
        ...location,
        search: `item=${currentItemNumber - 1}`
      });
    }
  };

  render() {
    const { location } = this.props;
    const activePageNumber = +queryString.parse(location.search).item || 1;
    const items = publications;
    const article = publications[activePageNumber - 1];

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
