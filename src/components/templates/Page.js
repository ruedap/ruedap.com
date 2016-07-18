import React, { Component } from 'react';
import styles from './Page.css'
import PageHeader from '../organisms/PageHeader';
import ProductList from '../organisms/ProductList';

export default class Page extends Component {
  render() {
    return (
      <div className={styles.root}>
        <div className={styles.lines}>
          <div className={styles.pageHeader}>
            <PageHeader />
          </div>
          <ProductList />
          <div className={styles.pageHeader}>
            <PageHeader />
          </div>
        </div>
      </div>
    );
  }
}
