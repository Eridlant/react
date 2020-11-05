import React from 'react';

import cartModel from '~s/cart.js';
import router from '~s/router.js'; 
import formix from '~s/form.js';

export default class extends React.Component{
  render(){
    return (
      <div>
        <h2>Congratulations! {formix.formName}</h2>
        <p><strong>Total: {cartModel.total}</strong></p>
        <button className="btn btn-primary" onClick={() => router.moveTo('cart')}>
          Return
        </button>
      </div>
    )
  }
}