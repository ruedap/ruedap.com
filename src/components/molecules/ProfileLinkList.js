import React, { Component } from 'react';
import styles from './ProfileLinkList.css'
import ProfileLink from '../atoms/ProfileLink';

export default class ProfileLinkList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileLinks: [],
    };
  }

  componentDidMount() {
    fetch('/static/data.json').then(response => {
      return response.json();
    }).then(json => {
      this.setState({ profileLinks: json.profile_links });
    });
  }

  render() {
    return (
      <ul className={styles.root}>
        {this.state.profileLinks.map(profileLink => {
          return (
            <li className={styles.item} key={profileLink.id}>
              <ProfileLink {...profileLink} />
            </li>
          )
        })}
      </ul>
    );
  }
}
