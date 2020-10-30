import React from 'react';
// import PropTypes from 'prop-types';
import Cart from './cart.js';

export default class extends React.Component{
  state = {
    prod: getProd(),
    routerRi: 1,
    name: ''
  }

  removeI(i){
    let prod = [...this.state.prod];
    prod.splice(i, 1);
    this.setState({prod});
  }

  chCnt(i, cnt){
    let prod = [...this.state.prod];
    prod[i] = {...prod[i], current: cnt};
    this.setState({prod});
  }

  router = () => {
    this.setState({routerRi: 2});
  }

  handleSubmit = (event) => {
    // console.log(event.target.value);
    this.setState({routerRi: 3});
    event.preventDefault();
  }

  handleChange = (event) => {
    this.setState({name: event.target.value});
  }

  // updateProd = (value) => {
  //   this.setState({ name: value });
    
  // }

  // changeCnt(i, cnt){
  //   let products = [...this.state.products];
  //   products[i] = {...products[i], current: cnt};
  //   this.setState({products});
  // }

  render(){

    let x = 2;

    console.log(this.state.routerRi);

    switch(this.state.routerRi) {
      case 1:
        var order = 
          <React.Fragment>
            <Cart
              prod={this.state.prod}
              removeItem={(i) => this.removeI(i)}
              change={(i, cnt) => this.chCnt(i, cnt)}
            />
            <button onClick={this.router}>Send</button>
            <button onClick={() => this.chCnt(1, 4)}>
              Unreal change1
            </button>
          </React.Fragment>;
        break;
      case 2:
        var order = 
          <React.Fragment>
            <form onSubmit={this.handleSubmit}>
              <input type="text" name="name" placeholder="Enter name" 
                      value={this.state.name} onChange={this.handleChange} />
              <input type="submit" value="Отсендить" />
            </form>
          </React.Fragment>;
        break;
        case 3:
          let total = this.state.prod.reduce((t, pr) => {
            return t + (pr.current * pr.price);
          }, 0);
          var order = 
            <React.Fragment>
              <p>Yважаемый {this.state.name}</p>
              <p>Ваша срань стоит {total} рублей</p>
            </React.Fragment>;
          break;
      default:
        var order = 
          <React.Fragment>
            <p>Yважаемый вас пагалаве не били?!</p>
          </React.Fragment>;
    };

    
    
    return(
      <div className="container">
        {order}
      </div>
    )
  }
};

// function show(){
  
// }



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
      title: 'Хуевей 2ЗЮ',
      price: 100500,
      rest: 8,
      current: 1
    }
  ];
};