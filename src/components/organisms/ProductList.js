import React, { Component } from 'react';
import styles from './ProductList.css'
import Product from '../molecules/Product'

export default class ProductList extends Component {
  render() {
    return (
      <ul className={styles.root}>
        <li className={styles.item}>
          <Product />
        </li>
        <li className={styles.item}>
          <Product />
        </li>
        <li className={styles.item}>
          <Product />
        </li>
        <li className={styles.item}>
          <Product />
        </li>
      </ul>
    );
  }
}
