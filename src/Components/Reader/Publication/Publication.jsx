import React, { Fragment } from "react";
import styles from "./Publication.module.css";
import PropTypes from "prop-types";

const Publication = ({ publication }) => {
  const { title, text } = publication;
  return (
    <Fragment>
      <article className={styles.publication}>
        <h2>{title}</h2>
        <p>{text}</p>
      </article>
    </Fragment>
  );
};

Publication.propTypes = {
  publication: PropTypes.object
};

export default Publication;
