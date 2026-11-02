import React from 'react'
import { useCart } from '../Components/CartContext';

const Cart = () => {

  const {
    cart,
    increaseQuantity,
    decreaseQuantity
  } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  );

  return (
    <div className='cart-page'>
      <h2>Cart</h2>

      {cart.length === 0 ? (
        <p>Cart is Empty</p>
      ) : (
        <table className='cart-table'>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Sub-Total</th>
            </tr>
          </thead>

          <tbody>
            {cart.map(item =>
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>$ {item.price}</td>
                <td>
                  <button onClick={() => decreaseQuantity(item.id)}>
                    -
                  </button>
                  {' '}{item.quantity}{' '}
                  <button onClick={() => increaseQuantity(item.id)}>
                    +*
                  </button>
                </td>
                <td>$ {(item.price * item.quantity).toFixed(2)}</td>

              </tr>
            )}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={'3'}>
                <strong>Total Amount</strong>
              </td>
              <td>
                <strong>
                  $ {total.toFixed(2)}
                </strong>
              </td>
            </tr>
          </tfoot>
        </table>

      )
      }
    </div>
  )
}
export default Cart