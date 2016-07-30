import React, { Component } from 'react';
import ReactSVG from 'react-svg/dist/react-svg.js';

export default class BlogLogo extends Component {
  render() {
    return (
      <ReactSVG
        path={'static/images/logo_einstein.svg'}
      />
    );
  }
}
