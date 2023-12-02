import "./index.css";

import { Link } from "react-router-dom";

import { FaBook, FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";

import { IoBook } from "react-icons/io5";

const Header = () => (
  <>
    <nav className="nav-header">
      <div className="header-content-container">
        <Link to="/" className="logo-link">
          <div className="logo-container">
            <FaBook className="logo" />
            <span className="logo-heading">Book Store</span>
          </div>
        </Link>

        <ul className="ul-items-container">
          <li className="icon-container">
            <Link to="/books" className="logo-link">
              <IoBook className="icon" />
              <span className="icon-name">Books</span>
            </Link>
          </li>
          <li className="icon-container">
            <FaRegHeart className="icon" />
            <span className="icon-name">Wishlist</span>
          </li>
          <li className="icon-container">
            <MdOutlineShoppingBag className="icon" />
            <span className="icon-name">Cart</span>
          </li>
        </ul>
      </div>
    </nav>
  </>
);

export default Header;
