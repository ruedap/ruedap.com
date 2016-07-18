import React, { Component } from 'react';
import styles from './Avatar.css'

export default class Avatar extends Component {
  render() {
    return (
      <div className={styles.root}>
        <img className={styles.image} src="static/images/logo_ruedap.png" alt="ruedap" />
      </div>
    );
  }
}
