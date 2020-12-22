import React from 'react';

import cartModel from '~s/cart.js';
import router from '~s/router.js'; 
import formix from '~s/form.js';

import { routesMap } from '~/routes';
import { Link } from 'react-router-dom';

import { urlBuilder } from '~/routes';

export default class extends React.Component{
  render(){
    let postsTmp = [1, 2, 3];
    let links = postsTmp.map(post => {
      return <div key={post}>
        <Link to={urlBuilder('blogPost', {some: post})}>Post {post}</Link>
      </div>
    });
    return (
      <div>
        <h2>Congratulations! {formix.formName}</h2>
        <p><strong>Total: {cartModel.total}</strong></p>
        <div>
          {links}
        </div>
        <Link to={routesMap.home} className="btn btn-primary">
          Return
        </Link>

      </div>
    )
  }
}
