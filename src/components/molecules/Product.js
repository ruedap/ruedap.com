import React, { Component } from 'react';
import styles from './Product.css'
import ProductDescription from '../atoms/ProductDescription'

export default class Product extends Component {
  render() {
    const html = { __html: this.props.description };
    return (
      <article className={styles.root_wideImage}>
        <h1 className={styles.name}>{this.props.name}</h1>
        <a className={styles.imageLink} href={this.props.imageLink}>
          <img className={styles.image} src={this.props.image} alt={this.props.name} />
        </a>
        <div className={styles.body}>
          <time className={styles.time} dateTime={this.props.pubdate}>
            {this.props.time}
          </time>
          <h2 className={styles.heading}>
            <a className={styles.headingLink} href={this.props.headingLink}>
              {this.props.heading}
            </a>
          </h2>
          <ProductDescription description={this.props.description} />
        </div>
        <nav className={styles.more}>
          <a className={styles.moreLink} href={this.props.headingLink}>
            {/*TODO: 日本語だとbuild時に文字化けする*/}
            {/*続きを読む*/}
            more
          </a>
        </nav>
      </article>
    );
  }
}
