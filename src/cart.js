import React from 'react';
import PropTypes from 'prop-types';
import AppMinMax from './inputs/minmax/minmax.js';



export default class extends React.Component{
  state = {
    products: getProducts(),
    formDone: false
  }

  static defaultProps = {
    removeItem: function(){},
  }

  static propTypes = {
    prod: PropTypes.array,
    removeItem: PropTypes.func,
    change: PropTypes.func
  }

  // changeCnt(i, cnt){
  //   let products = [...this.state.products];
  //   products[i] = {...products[i], current: cnt};
  //   this.setState({products});
  // }

  // remove(i){
    // let products = [...this.state.products].filter((pr, j) => j !== i)
  //   let products = [...this.state.products];
  //   products.splice(i, 1);
  //   this.setState({products});
  // }

  // sendForm = () => {
  //   this.setState({formDone: true});
  // }

  render(){
    // console.log(this.props.prod);
    let total = this.props.prod.reduce((t, pr) => {
      return t + (pr.current * pr.price);
    }, 0);

    let productsRows = this.props.prod.map((product, i) => {
      return (
        <tr key={product.id}>
        <td>{product.title}</td>
        <td>{product.price}</td>
        <td>
          <AppMinMax min={1} 
                      max={product.rest} 
                      cnt={product.current} 
                      // onChange={(cnt) => this.changeCnt(i, cnt)}
                      onChange={(cnt) => this.props.change(i, cnt)}
          />
        </td>
        <td>{product.price * product.current}</td>
        <td>
          <button onClick={() => this.props.removeItem(i)}>
            X
          </button>
        </td>
        </tr>
      );
    });


    return (
      <div>
        <h2>Cart</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <td>Title</td>
              <td>Price</td>
              <td>Count</td>
              <td>Total</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {productsRows}
          </tbody> 
        </table>
        <h3>Total: {total}</h3>
        <hr/>
        {/* <button onClick={this.sendForm}>Send</button> */}
      </div>
    );
  }
}

// function showForm(productsRows, total, onSend){
//   return (
//     <div>
//       <h2>Cart</h2>
//       <table className="table table-bordered">
//         <thead>
//           <tr>
//             <td>Title</td>
//             <td>Price</td>
//             <td>Count</td>
//             <td>Total</td>
//             <td>Actions</td>
//           </tr>
//         </thead>
//         <tbody>
//           {productsRows}
//         </tbody> 
//       </table>
//       <h3>Total: {total}</h3>
//       <hr/>
//       <button onClick={onSend}>Send</button>
//     </div>
//   );
// }

// function showCongrats(){
//   return (
//     <div>
//       <h2>Congratulations! Yout order in process!</h2>
//       <p>111</p>
//     </div>
//   );
// }

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
    }
  ];
}