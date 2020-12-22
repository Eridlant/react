import React from 'react';
import PropTypes from 'prop-types';

import cartModel from '~s/cart.js';
import formix from '~s/form.js';

import {observer} from 'mobx-react';

import { routesMap } from '~/routes';
import { urlBuilder } from '~/routes';
import { Link } from 'react-router-dom';

// import styles from '~p/shop/shop.css';
// import styles from './shop.css';
import styles from './shop.module.css';

@observer
export default class Shop extends React.Component{
  
  render(){
    let productsRows = cartModel.products.map((product, i) => {
      return (
        <div key={product.id} className={styles.card}>
          <p className={styles.product}>{product.title}</p>
          <p>{product.price}</p>
          <Link to={urlBuilder('product', {id: product.id})}>Post {product.id}</Link>
        </div>
      );
    });

    return (
      <div>
        <div className={styles.container}>
          {productsRows}
        </div>
        <Link to={routesMap.home} className="btn btn-primary">
          Return
        </Link>
      </div>
    )
  }
}
