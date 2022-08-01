import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import Cart from '../components/Cart';
import { useStoreContext } from '../utils/GlobalState';
import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_PRODUCTS,
  ADD_REVIEW
} from '../utils/actions';
import { QUERY_PRODUCTS } from '../utils/queries';
import { idbPromise } from '../utils/helpers';
import spinner from '../assets/spinner.gif';




function Detail() {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();

  const [currentProduct, setCurrentProduct] = useState({});

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const { products, cart } = state;

  useEffect(() => {
    // already in global store
    if (products.length) {
      setCurrentProduct(products.find((product) => product._id === id));
    }
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });

      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise('products', 'get').then((indexedProducts) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: indexedProducts,
        });
      });
    }
  }, [products, data, loading, dispatch, id]);

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...currentProduct, purchaseQuantity: 1 },
      });
      idbPromise('cart', 'put', { ...currentProduct, purchaseQuantity: 1 });
    }
  };

  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: currentProduct._id,
    });

    idbPromise('cart', 'delete', { ...currentProduct });
  };


  const postNewReview = (event) => {
    event.preventDefault();

    const textField = document.querySelector("#review-area");
    const textData = textField.value;


    localStorage.setItem(`review-${currentProduct.name}-${(localStorage.length) + 1}`, `${textData}`); //saves new review in localStorage

    textField.value = '';

  }
  // cannot get below code working (supposed to fetch all the items in storage)

  const reviewList = document.querySelector(".review-container");

  let storedReviews = (event) => {
    event.preventDefault();

    let i = 0;
    for (i = 0; i < localStorage.length; i++) {
      const reviewText = localStorage.getItem(`review-${currentProduct.name}-${i + 1}`);

      console.log(reviewText)

      reviewList.innerHTML +=
        ` 
       <div class="review">
           <h4>${currentProduct.name} Review #${i + 1}</h4>
           <p>${reviewText}</p>
       </div>
       `
        ;

      const showBtn = document.getElementById('show-reviews');

      if (reviewList.length == 0) {
        showBtn.classList.add('show');
      } else {
        showBtn.classList.add('no-show');
      }
    }
  };


  return (
    <>
      {currentProduct && cart ? (
        <div className="container my-1">
          <Link to="/">← Back to Products</Link>

          <div className='center-column'>

            <img
              src={`/images/${currentProduct.image}`}
              alt={currentProduct.name}
              className='product-image-detail'
            />



            <h2>{currentProduct.name}</h2>

            <p>{currentProduct.description}</p>

            <p>
              <strong>Price:</strong>${currentProduct.price}{' '}
              <button onClick={addToCart}>Add to Cart</button>
              <button
                disabled={!cart.find((p) => p._id === currentProduct._id)}
                onClick={removeFromCart}
              >
                Remove from Cart
              </button>
            </p>

            <br />
            <h3>Reviews</h3> <br />
            <form className='center-column'>
              <textarea required={true} cols="40" rows="5" id="review-area" placeholder='Add your review here'></textarea>
              <br />
              <button
                onClick={postNewReview}
                id="review-submit"
              >Submit Review
              </button>
            </form>
            {/* comments displayed in container below */}
            <br />
            <button
              onClick={storedReviews}
              id='show-reviews'
            >Show Reviews</button>
            <div className="review-container center-column">

            </div>
          </div>

        </div>
      ) : null}
      {loading ? <img src={spinner} alt="loading" /> : null}
      <Cart />
    </>
  );
}

export default Detail;
