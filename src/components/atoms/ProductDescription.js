import React, { Component } from 'react';
import styles from './ProductDescription.css'

export default class ProductDescription extends Component {
  render() {
    const html = { __html: this.props.description };
    return (
      // TODO: Fix innerHTML
      <div className={styles.root} dangerouslySetInnerHTML={html} />
    );
  }
}
