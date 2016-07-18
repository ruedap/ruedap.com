import React, { Component } from 'react';
import styles from './Page.css'
import PageHeader from '../organisms/PageHeader';

export default class Page extends Component {
  render() {
    return (
      <div className={styles.root}>
        <div className={styles.lines}>
          <PageHeader />
        </div>
      </div>
    );
  }
}
