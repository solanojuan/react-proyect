import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <div>
        <header>
            <h1> Billikem</h1>

            <nav>
                <ul>
                    <li>figuritas</li>
                    <li>Albunes</li>
                    <li>libros</li>
                </ul>
            </nav>

            <CartWidget/>
        </header>
    </div>
  )
}

export default NavBar