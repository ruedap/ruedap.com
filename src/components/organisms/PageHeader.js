import React, { Component } from 'react';
import styles from './PageHeader.css'
import Avatar from '../atoms/Avatar';
import Logo from '../atoms/Logo';
import ProfileLink from '../atoms/ProfileLink';

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
        <ProfileLink name="twitter" href="https://twitter.com/ruedap"/>
        <ProfileLink name="github" href="https://github.com/ruedap"/>
        <ProfileLink name="mail" href="mailto:ruedap@ruedap.com"/>
      </div>
    );
  }
}
