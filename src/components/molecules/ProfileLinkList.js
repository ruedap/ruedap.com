import React, { Component } from 'react';
import styles from './ProfileLinkList.css'
import ProfileLink from '../atoms/ProfileLink';

export default class ProfileLinkList extends Component {
  render() {
    return (
      <ul className={styles.root}>
        <li className={styles.item}>
          <ProfileLink name="twitter" href="https://twitter.com/ruedap"/>
        </li>
        <li className={styles.item}>
          <ProfileLink name="github" href="https://github.com/ruedap"/>
        </li>
        <li className={styles.item}>
          <ProfileLink name="mail" href="mailto:ruedap@ruedap.com"/>
        </li>
      </ul>
    );
  }
}
