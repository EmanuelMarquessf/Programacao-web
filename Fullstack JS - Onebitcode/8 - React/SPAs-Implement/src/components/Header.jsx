import { Link } from "react-router-dom"

export default function Header(){
  return(
    <header>
      <nav style={{ display: "flex", gap: "2rem"}}>
        <Link to="/">Inicio</Link>
        <Link to="products">Products</Link>
        <Link to="Cart">Cart</Link>
      </nav>
  </header>
  )
}