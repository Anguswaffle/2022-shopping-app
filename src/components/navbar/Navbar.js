import { NavLink } from 'react-router-dom'
import useCart from '../../hooks/useCart'
import { ShoppingCartOutlined } from '@ant-design/icons'
import { Badge } from 'antd';

export default function Navbar() {
  const { totalCartCount } = useCart()

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/cart">
        Cart
        <Badge count={totalCartCount()}>
          <ShoppingCartOutlined />
        </Badge>
      </NavLink>

    </nav>
  )
}