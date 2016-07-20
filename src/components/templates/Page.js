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

          <section className={styles.section}>
            <div className={styles.sectionTitle}>
              <SectionTitle image="static/images/section_blog.svg" title="ブログ" />
            </div>
            <a className={styles.blogLink} href="http://blog.ruedap.com/">
              <img className={styles.blogLogo} src="static/images/logo_einstein.svg" alt="アインシュタインの電話番号" />
            </a>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionTitle}>
              <SectionTitle image="static/images/section_products.svg" title="プロダクツ"/>
            </div>
            <ProductList />
          </section>

          <div className={styles.pageHeader}>
            <PageHeader />
          </div>
        </div>
      </div>
    );
  }
}
