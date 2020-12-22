import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { routesMap } from '~/routes';
import styles from './aside.css';


export default class Aside extends React.Component{
  render(){
    return (
      <>
        <NavLink to={routesMap.shop}>
          shop
        </NavLink>
        <NavLink to={routesMap.home}>
          home
        </NavLink>
        <NavLink to={routesMap.order}>
          order
        </NavLink>
        <NavLink to={routesMap.product}>
          product
        </NavLink>
        <NavLink to={routesMap.blogPost}>
          blogPost
        </NavLink>
      </>
    );
  }
}