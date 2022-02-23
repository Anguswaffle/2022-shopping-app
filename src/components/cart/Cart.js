import './cart.css'
import useCart from '../../hooks/useCart'
import { useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { Card } from 'antd';
import { PlusCircleOutlined, MinusCircleOutlined, DeleteOutlined } from '@ant-design/icons';
const { Meta } = Card;
/*
user must be able to:
 increase and decrease quantities
 remove items from cart
*/

export default function Cart() {

  const { cart } = useCart();

  useEffect(() => console.log(cart))

  const cartContents = cart ? (cart.map(item => {
    return (
      <Card
        key={item.productId}
        hoverable
        cover={<img alt={item.name} src={item.img} />}
      >
        <Meta title={item.name} description={`Currently in cart: ${item.quantity}`}/>
        <PlusCircleOutlined/>
        <MinusCircleOutlined/>
        <DeleteOutlined/>
      </Card>
    )
  })) : <div>No items in cart!</div>

  return (
    <div>
      <h2>Cart</h2>
      <div className='cart-contents'>
        {cartContents}
      </div>
    </div>
  )
}