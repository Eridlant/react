import React from 'react';
import { Link } from 'react-router-dom';
import { routesMap } from '~/routes';

// import ProductItem from '~c/products/item';
import {observer, inject} from 'mobx-react';
import { urlBuilder } from '~/routes';
import cartModel from '~s/cart.js';


@observer
export default class Prod extends React.Component{

  gePro(id){
    return cartModel.products.find(item => item.id == id);
  }

  render(){
    let aidi = this.props.match.params.id;

    // let prod = cartModel.products.find(item => item.id == aidi);

    let prod = this.gePro(aidi);

    return (
      <div key={prod.id}>
        <p>
          {prod.title}
        </p>
        <p>
          {prod.price} р.
        </p>
        <p>
          ойди {prod.id}
        </p>
      </div>
    );
  }
}

