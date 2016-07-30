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
          <div className={cx('g_ _0 g- -ng -c -m', 'pageHeader')}>
            <PageHeader />
          </div>

          <section className={cx('g_ _0', 'section')}>
            <h1 className={cx('g- -ng -c', 'sectionTitle')}>
              <ReactSVG path={'static/images/section_blog.svg'} />
            </h1>
            <div className={cx('g- -ng -c', 'blogLogo')}>
              <a className={styles.blogLink} href="http://blog.ruedap.com/">
                <BlogLogo />
              </a>
            </div>
          </section>

          <section className={cx('g_ _0', 'section')}>
            <h1 className={cx('g- -ng -c', 'sectionTitle')}>
              <ReactSVG path={'static/images/section_products.svg'} />
            </h1>
            <div className="g- -ng -c">
              <ProductList />
            </div>
          </section>

          <div className={cx('g_ _0 g- -ng -c -m', 'pageHeader')}>
            <PageHeader />
          </div>
        </div>
      </div>
    );
  }
}
