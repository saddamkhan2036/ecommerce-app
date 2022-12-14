import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();
  return (
    <>
      <div
        className={` ${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}
      >
        <Link className="product-card position-relative">
          <div className="product-image">
            <div className="wishlist-icon position-absolute">
              <Link>
                <img src="images/wish.svg" alt="wishlist" />
              </Link>
            </div>
            <div className="product-image">
              <img
                src="images/headphone-01.jpg"
                className="img-fluid"
                alt="product image"
              />
              <img
                src="images/headphone-02.jpg"
                className="img-fluid"
                alt="product image"
              />
            </div>
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphones bilk 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
              <p className={`description ${grid == 12 ? "d-block" : "d-none"}`}>
              Get your content written by the #1 content writing agency in the
              US.100% Quality content. Outsource your content writing
              requirements. Choose from top content writers. Order Now. Article
              Writing Services. Product Descriptions. Quality Website Content.
              100% Original Content.
            </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src="images/prodcompare.svg" alt="compare" />
              </Link>
              <Link>
                <img src="images/view.svg" alt="view" />
              </Link>
              <Link>
                <img src="images/add-cart.svg" alt="addcart" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
      <div
        className={` ${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}
      >
        <Link className="product-card position-relative">
          <div className="product-image">
            <div className="wishlist-icon position-absolute">
              <Link>
                <img src="images/wish.svg" alt="wishlist" />
              </Link>
            </div>
            <div className="product-image">
              <img
                src="images/headphone-01.jpg"
                className="img-fluid"
                alt="product image"
              />
              <img
                src="images/headphone-02.jpg"
                className="img-fluid"
                alt="product image"
              />
            </div>
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphones bilk 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid == 12 ? "d-block" : "d-none"}`}>
              Get your content written by the #1 content writing agency in the
              US.100% Quality content. Outsource your content writing
              requirements. Choose from top content writers. Order Now. Article
              Writing Services. Product Descriptions. Quality Website Content.
              100% Original Content.
            </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src="images/prodcompare.svg" alt="compare" />
              </Link>
              <Link>
                <img src="images/view.svg" alt="view" />
              </Link>
              <Link>
                <img src="images/add-cart.svg" alt="addcart" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
