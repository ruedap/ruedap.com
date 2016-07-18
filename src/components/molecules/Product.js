import React, { Component } from 'react';
import styles from './Product.css'

export default class Product extends Component {
  render() {
    return (
      <article className={styles.root_wideImage}>
        <h1 className={styles.name}>アインシュタインの電話番号</h1>
        <a className={styles.imageLink} href="#">
          <img className={styles.image} src="static/images/products/daplog.png" alt="アインシュタインの電話番号"
 />
        </a>
        <div className={styles.body}>
          <time className={styles.time} pubdate="2013-11-11">2013.11.11</time>
          <h2 className={styles.heading}>
            <a className={styles.headingLink} href="#">
              Pull RequestとCIを使ったGitHub Flowなブログ環境を作ってみた
            </a>
          </h2>
          <div className={styles.description}>
            今から1年ほど前に、自分でお気に入りのブログ環境を構築する記事が話題になっていて、それを読んだ時から、自分用のブログ環境を作りたいと思っていた。
          </div>
        </div>
        <nav className={styles.more}>
          <a className={styles.moreLink} href="#">
            続きを読む
          </a>
        </nav>
      </article>
    );
  }
}
