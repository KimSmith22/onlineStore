import React from 'react';
import { connect } from  'react-redux';

const sort = (items) => {
  return items.sort((a, b) => a.id < b.id);
};

function Cart(props) {
  return <table>
    <thead>
      <tr>
        <th></th>
        <th>Item</th>
        <th>Price</th>
        <th>Quantity</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        sort(props.cart).map(item => <tr>
          < td > { < img 
            height = {100}
            src = { `/products/${item.image}`} 
            alt=''
              /> 
            }
          </td>
          <td>{ item.name }</td>
          <td>{ item.price }</td>
          <td>{ item.quantity }</td>
          <td>
            <button
              onClick={(e) => props.addToCart(item)}
            >+</button>
            <button
              onClick={(e) => props.removeFromCart(item)}
            >-</button>
          </td>
          <td>
            <button
              onClick={(e) => props.removeAllFromCart(item)}
            >Remove from cart</button>
          </td>
        </tr>)
      }
    </tbody>
  </table>
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: (item) => {
      dispatch({ type: 'ADD', payload: item })
    },
    removeFromCart: (item) => {
      dispatch({ type: 'REMOVE', payload: item })
    },
    removeAllFromCart: (item) => {
      dispatch({ type: 'REMOVE_ALL', payload: item })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)