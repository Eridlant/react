import React from 'react';
import {makeObservable, observable, computed, action} from 'mobx';

import Cart from '~p/cart';
import Order from '~p/order';
import Result from '~p/result';

class Router{
  constructor() {
    makeObservable(this);
  }

  routes = {
    cart: () => <Cart/>,
    order: () => <Order/>,
    result: () => <Result/>,
  }

  @observable activeRoute = 'cart'

  @computed get component(){
    // проверка есть ли роут в списке, если нет -> p404
    console.log(1);
    return this.routes[this.activeRoute]();
  }

  @action moveTo(route){
    // проверка есть ли роут в списке
    this.activeRoute = route;
  }
}

export default new Router();












// server api
function getProducts(){
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
      id: 107,
      title: 'Huawei XX',
      price: 15000,
      rest: 8,
      current: 1
    }
  ];
}