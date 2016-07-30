import React, { Component } from 'react';
import ReactSVG from 'react-svg/dist/react-svg.js';
import classNames from 'classnames/bind';

import styles from './Page.css'
import PageHeader from '../organisms/PageHeader';
import ProductList from '../organisms/ProductList';
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
            <h1 className={styles.sectionTitle}>
              <ReactSVG path={'static/images/section_blog.svg'} />
            </h1>
            <a className={styles.blogLink} href="http://blog.ruedap.com/">
              <div className={styles.blogLogo}>
                <BlogLogo />
              </div>
            </a>
          </section>

          <section className={cx('g_', 'section')}>
            <h1 className={styles.sectionTitle}>
              <ReactSVG path={'static/images/section_products.svg'} />
            </h1>
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
