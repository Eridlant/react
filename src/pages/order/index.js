import React from 'react';
import PropTypes from 'prop-types';
// import {Form, Button, Modal} from 'react-bootstrap';

import formix from '~s/form.js';
import router from '~s/router.js';

import {observer} from 'mobx-react';

import { routesMap } from '~/routes';
import { Link } from 'react-router-dom';

@observer
export default class Order extends React.Component{

  handleSub = (event) => {
    // router.moveTo('result');
    this.props.history.push(routesMap.result);
    event.preventDefault();
  }
  
  render(){

    return (
      <div>
        <h2>Order</h2>
        <form onSubmit={this.handleSub}>
          <input type="text" name="name" placeholder="Enter name" 
                  value={formix.formName} onChange={formix.handleChange} />
          <input type="submit" value="Отсендить" />
        </form>
        <br/>
        <Link to={routesMap.home} className="btn btn-primary">
          Return
        </Link>
      </div>
    )
  }
}