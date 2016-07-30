import React, { Component } from 'react';
import classNames from 'classnames/bind';

import styles from './Page.css'
import PageHeader from '../organisms/PageHeader';
import ProductList from '../organisms/ProductList';
import SectionTitle from '../atoms/SectionTitle';
import BlogLogo from '../atoms/BlogLogo';

let cx = classNames.bind(styles);

export default class Page extends Component {
  render() {
    return (
      <div className={styles.root}>
        <div className={cx('g- -ng -co', 'lines')}>
          <div className={cx('g_ g- -ng -c -m', 'pageHeader')}>
            <PageHeader />
          </div>

          <section className={cx('g_', 'section')}>
            <div className={styles.sectionTitle}>
              <SectionTitle image="static/images/section_blog.svg" title="ブログ" />
            </div>
            <a className={styles.blogLink} href="http://blog.ruedap.com/">
              <div className={styles.blogLogo}>
                <BlogLogo />
              </div>
            </a>
          </section>

          <section className={cx('g_', 'section')}>
            <div className={styles.sectionTitle}>
              <SectionTitle image="static/images/section_products.svg" title="プロダクツ"/>
            </div>
            <ProductList />
          </section>

          <div className={cx('g_ g- -ng -c -m', 'pageHeader')}>
            <PageHeader />
          </div>
        </div>
      </div>
    );
  }
}
