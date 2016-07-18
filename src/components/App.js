import React, { Component } from 'react';
import styles from './App.css'
import Page from './templates/Page';

export default class App extends Component {
  render() {
    return (
      <div className={styles.root}>
        <Page />
      </div>
    );
  }
}
