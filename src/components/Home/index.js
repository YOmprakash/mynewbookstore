import Cookies from "js-cookie";
import { Redirect, Link } from "react-router-dom";

import "./index.css";

import Header from "../Header";
import ReactSlider from "../ReactSlider";

const Home = () => {
  const jwtToken = Cookies.get("jwt_token");
  if (jwtToken === undefined) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      <Header />
      <div className="home-container">
        <img
          src="https://justjaneedoe.files.wordpress.com/2023/02/person-holds-a-book-over-a-stack-and-turns-the-page.jpg?w=2046"
          alt="clothes that get you noticed"
          className="home-desktop-img"
        />
        <div className="home-content">
          <h1 className="home-heading">
            Get Lost in the World of Books and Unleash Your Imagination
          </h1>
          <img
            src="https://justjaneedoe.files.wordpress.com/2023/02/person-holds-a-book-over-a-stack-and-turns-the-page.jpg?w=2046"
            alt="clothes that get you noticed"
            className="home-mobile-img"
          />
          <p className="home-description">
            Bookswagon your best source to buy cheap book online, make online
            book purchase, making us the best book website in India to read book
            online.
          </p>
          <Link to="/books">
            <button type="button" className="shop-now-button">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
      <ReactSlider />
    </>
  );
};

export default Home;
