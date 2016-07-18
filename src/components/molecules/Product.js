import React, { Component } from 'react';
import styles from './Product.css'

export default class Product extends Component {
  render() {
    const html = { __html: this.props.description };
    return (
      <article className={styles.root_wideImage}>
        <h1 className={styles.name}>{this.props.name}</h1>
        <a className={styles.imageLink} href={this.props.imageLink}>
          <img className={styles.image} src={this.props.image} alt={this.props.name}
 />
        </a>
        <div className={styles.body}>
          <time className={styles.time} pubdate={this.props.pubdate}>
            {this.props.time}
          </time>
          <h2 className={styles.heading}>
            <a className={styles.headingLink} href={this.props.headingLink}>
              {this.props.heading}
            </a>
          </h2>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={html}
          />
        </div>
        <nav className={styles.more}>
          <a className={styles.moreLink} href={this.props.headingLink}>
            続きを読む
          </a>
        </nav>
      </article>
    );
  }
}
