import React, { Component } from 'react';
import styles from './PageHeader.css'
import Avatar from '../atoms/Avatar';
import Logo from '../atoms/Logo';
import ProfileLinkList from '../molecules/ProfileLinkList';

export default class PageHeader extends Component {
  render() {
    return (
      <div className={styles.root}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.avatar}>
          <Avatar />
        </div>
        <ProfileLinkList />
      </div>
    );
  }
}
