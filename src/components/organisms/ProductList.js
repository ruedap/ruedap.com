import React, { Component } from 'react';
import styles from './ProductList.css';
import Product from '../molecules/Product';

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    fetch('/static/data.json').then(response => {
      return response.json();
    }).then(json => {
      this.setState({ products: json.products });
    });
  }

  render() {
    return (
      <ul className={styles.root}>
        {this.state.products.map(product => {
          return (
            <li className={styles.item} key={product.id}>
              <Product {...product} />
            </li>
          )
        })}
      </ul>
    );
  }
}
