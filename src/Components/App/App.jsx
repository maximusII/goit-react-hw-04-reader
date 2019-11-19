import React from 'react';
import styles from './App.module.css';
import Reader from '../Reader/Reader';
import publications from '../Reader/data/publications.json';

const App = () => (
  <div className={styles.App}>
    <Reader
      items={publications}
      initialPageNumber={1}
      isPrevButtonActive={true}
      isNextButtonActive={true}
    />
  </div>
);

export default App;
