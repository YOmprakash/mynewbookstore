import { Component } from "react";

import Cookies from "js-cookie";
import BookCard from "../BookCard";

import "./index.css";
import Header from "../Header";


const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "IN_PROGRESS",
};

const sortbyOptions = [
  {
    optionId: "PRICE_HIGH",
    displayText: "Price (High-Low)",
  },
  {
    optionId: "PRICE_LOW",
    displayText: "Price (Low-High)",
  },
];

class Books extends Component {
  state = {
    bookList: [],
    apiStatus: apiStatusConstants.initial,
  
  };

  componentDidMount() {
    this.getBooksList();
  }

  getBooksList = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    });
    const jwtToken = Cookies.get("jwt_token");
    const apiUrl = "https://apis.ccbp.in/products";
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: "GET",
    };
    const response = await fetch(apiUrl, options);
    console.log(response);
    if (response.ok) {
      const fetchedData = await response.json();
      const updatedData = fetchedData.products.map((product) => ({
        title: product.title,
        brand: product.brand,
        price: product.price,
        id: product.id,
        imageUrl: product.image_url,
        rating: product.rating,
      }));
      console.log(fetchedData);
      this.setState({
        bookList: updatedData,
        apiStatus: apiStatusConstants.success,
      });
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      });
    }
  };


  renderBooksView = () => {
    const { bookList } = this.state;

    return (
        <div className='all-product-container'>
        
      <ul className="ul-book-list-container">
        {bookList.map((eachBook) => (
          <BookCard key={eachBook.id} bookDetails={eachBook} />
        ))}
      </ul>
    );
  };

  renderFailureView = () => (
    <div className="products-error-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-products-error-view.png"
        alt="products failure"
        className="products-failure-img"
      />
      <h1 className="product-failure-heading-text">
        Oops! Something Went Wrong
      </h1>
      <p className="products-failure-description">
        We are having some trouble processing your request. Please try again.
      </p>
    </div>
  );

  renderLoadingView = () => (
    <div className="products-loader-container">
      <h1>Loading</h1>
    </div>
  );

  renderAllBooks = () => {
    const { apiStatus } = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderBooksView();
      case apiStatusConstants.failure:
        return this.renderFailureView();
      case apiStatusConstants.inProgress:
        return this.renderLoadingView();
      default:
        return null;
    }
  };

  render() {
    return (
      <>
        <Header />
        <h1 className="books-main-heading">Books</h1>
        <div className="books-container">{this.renderAllBooks()}</div>
      </>
    );
  }
}

export default Books;
