import React from 'react';
// import PropTypes from 'prop-types';
import Cart from './cart.js';

export default class extends React.Component{
  state = {
    prod: getProd(),
    test: 1
  }

  render(){
    return (
      <React.Fragment>
        <Cart
          prod={this.state.prod}
        />
      </React.Fragment>
    )
  }
};

function getProd(){
  return [
    {
      id: 100,
      title: 'Ipnone 200',
      price: 12000,
      rest: 10,
      current: 1
    },
    {
      id: 101,
      title: 'Samsung AAZ8',
      price: 22000,
      rest: 5,
      current: 1
    },
    {
      id: 103,
      title: 'Nokia 3310',
      price: 5000,
      rest: 2,
      current: 1
    },
    {
      id: 105,
      title: 'Huawei ZZ',
      price: 15000,
      rest: 8,
      current: 1
    },
    {
      id: 110,
      title: 'Хуевей ЗЮЗЯ',
      price: 100500,
      rest: 8,
      current: 1
    }
  ];
};