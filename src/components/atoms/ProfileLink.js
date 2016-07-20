import React, { Component } from 'react';
import styles from './ProfileLink.css'

export default class ProfileLink extends Component {
  render() {
    return (
      <a className={styles.root} href={this.props.href}>
        {this.props.name}
      </a>
    );
  }
}
