import React, { Component } from 'react';
import styles from './Page.css'
import PageHeader from '../organisms/PageHeader';
import ProductList from '../organisms/ProductList';
import SectionTitle from '../atoms/SectionTitle';

export default class Page extends Component {
  render() {
    return (
      <div className={styles.root}>
        <div className={styles.lines}>
          <div className={styles.pageHeader}>
            <PageHeader />
          </div>
          <SectionTitle image="static/images/section_products.svg" title="プロダクツ"/>
          <ProductList />
          <div className={styles.pageHeader}>
            <PageHeader />
          </div>
        </div>
      </div>
    );
  }
}
