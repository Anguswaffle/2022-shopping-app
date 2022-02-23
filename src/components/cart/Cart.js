import './cart.css'
import useCart from '../../hooks/useCart'
import { useEffect } from 'react';
import { Card } from 'antd';
import { PlusCircleOutlined, MinusCircleOutlined, DeleteOutlined } from '@ant-design/icons';
const { Meta } = Card;
/*
user must be able to:
 increase and decrease quantities
 remove products from cart
*/

export default function Cart() {

  const { cart, addToCart } = useCart();

  useEffect(() => console.log(cart))

  const cartContents = cart ? (cart.map(product => {
    return (
      <Card
        key={product.productId}
        hoverable
        cover={<img alt={product.name} src={product.img} />}
      >
        <Meta title={product.name} description={`Currently in cart: ${product.quantity}`}/>
        <PlusCircleOutlined onClick={() => addToCart(product)}/>
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