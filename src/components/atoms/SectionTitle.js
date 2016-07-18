import React, { Component } from 'react';
import styles from './SectionTitle.css'

export default class SectionTitle extends Component {
  render() {
    return (
      <h1 className={styles.root}>
        <img src={this.props.image} alt={this.props.title} />
      </h1>
    );
  }
}
