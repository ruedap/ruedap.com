import React, { Component } from 'react';
import styles from './Page.css'
import Avatar from '../atoms/Avatar';
import Logo from '../atoms/Logo';

export default class Page extends Component {
  render() {
    return (
      <div className={styles.base}>
        <Avatar />
        <Logo />
      </div>
    );
  }
}
