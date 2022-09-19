import React from 'react';
import { connect } from 'react-redux';
import { useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { NavLink } from 'react-router-dom';

import { actAddToCart } from '../../actions/actCart';

function SingleProduct(props) {
  const [like, setFavorite] = useState(false)
  const changeFavorite = () => setFavorite(like => !like)
  // hàm thêm giỏ hàng
  const addToCart = (data) => {
    if (props.cart == 0) {
      data = {
        productId: data._id,
        quantity: 1,
        name: data.name,
        price: data.price_sale,
        images: data.images
      }
      props.AddToCart(data)
    } else {
      let check = false;
      props.cart.map((item, key) => {
        if (item.productId == data._id) {
          // statement
          props.cart[key].quantity++;
          // console.log("cộng data nè")
          check = true
        }
      })
      if (!check) {
        // statement
        let cart = {
          productId: data._id,
          quantity: 1,
          name: data.name,
          price: data.price_sale,
          images: data.images
        }
        props.AddToCart(cart)
      }
    }
    Notify.success("Đã Thêm Vào Giỏ Hàng Thành Công!")

  }
  return (
    <div className="single-product">
      <img style={{ height: '150px' }} src={'/assets/image/' + props.prod.images} alt="" />
      <div className="product-details">
        <h6>{props.prod.name}</h6>
        <div className="price">
          <h6>{props.prod.price.toLocaleString('vi-VN')} vnđ</h6>
          {/* <h6 className="l-through">$210.00</h6> */}
        </div>
        <div className="prd-bottom" >
          <span onClick={() => addToCart(props.prod)} style={{ "cursor": "pointer" }} className="social-info">
            <span className="fa-solid fa-bag-shopping"></span>
            <p className="hover-text">Bỏ giỏ</p>
          </span>
          <span style={{ "cursor": "pointer" }} className="social-info" onClick={changeFavorite}>
            <span className={"fa-solid " + (like ? 'fa-heart-crack' : 'fa-heart')}></span>
            <p className="hover-text">{like ? 'Bỏ thích' : 'Yêu thích'}</p>
          </span>
          {/* <a href="#a" className="social-info">
<span className="lnr lnr-sync"></span>
<p className="hover-text">So sánh</p>
</a> */}
          <NavLink to={"/product/" + props.prod._id} className="social-info">
            <span className="fa-solid fa-arrows-up-down-left-right"></span>
            <p className="hover-text">Xem thêm</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
const mapDispatch = (dispatch) => {
  return {
    AddToCart: (data) => {
      dispatch(actAddToCart(data))
    }
  };
};

const mapState = (state) => {
  return {
    cart: state.cart
  };
};
export default connect(mapState, mapDispatch)(SingleProduct);
