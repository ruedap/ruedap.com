import React, { Component } from 'react';
import styles from './App.css'

export default class App extends Component {
  render() {
    return (
      <div className={styles.base_modifier}>
        <h1 className={styles.heading_modifier}>Hello, world.</h1>
      </div>
    );
  }
}
