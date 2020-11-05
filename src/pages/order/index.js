import React from 'react';
import PropTypes from 'prop-types';
// import {Form, Button, Modal} from 'react-bootstrap';

import formix from '~s/form.js';
import router from '~s/router.js';

import {observer} from 'mobx-react';

@observer
export default class Order extends React.Component{
  
  render(){

    return (
      <div>
        <h2>Order</h2>
        <form onSubmit={formix.handleSubmit}>
          <input type="text" name="name" placeholder="Enter name" 
                  value={formix.formName} onChange={formix.handleChange} />
          <input type="submit" value="Отсендить" />
        </form>

        <br/>
        <button className="btn btn-primary" onClick={() => router.moveTo('cart')}>
          Return
        </button>
      </div>
    )
  }
}