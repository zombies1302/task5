import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';

import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { actQuantityItem } from "../actions/actCart";

function Cart(props) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "/assets/js/main.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);
  const [seed, setSeed] = useState(1);
  const reset = () => {
    setSeed(Math.random());
  }

  const handelQuantity = (definition, id) => {
    if (definition === "+") {
      props.cart.map((item, key) => {
        if (item.productId == id) {
          props.cart[key].quantity++;
          props.editItemCart(props.cart)
          reset()

        }
      })
    } else {
      props.cart.map((item, key) => {
        if (item.productId == id) {
          if (props.cart[key].quantity > 1) {
            props.cart[key].quantity--;
            console.log(props.cart)
            props.editItemCart(props.cart)
            reset()

          } else {
            deleteItem(key)
          }
        }
      })
    }
  }
  const deleteItem = (key)=>{
    Confirm.show(
      'Thông báo!',
      'Bạn có muốn xóa sản phẩm này không ?',
      'Có',
      'Không',
      () => {
                // click có return
                props.cart.splice(key, 1);
                props.editItemCart(props.cart)
                Notify.failure('Xoá khỏi giỏ hàng thành công');
                reset()
              },
              () => {
                // click không  return
              },{},);

  }

  const onChangeItem = (id) => {
    console.log(id)
  }
  let listCart = [];
  let Total = props.cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0);

  props.cart.forEach((s, index) => {
    listCart.push(
      <tr key={index}>
      <td>
      <div className="media">
      <div className="d-flex">
      <img style={{ maxWidth: '80px' }} src={'/assets/image/' + s.images} alt="" />
      </div>
      <div className="media-body text-danger">
      <strong><NavLink to={"/product/" + s.productId}>{s.name}</NavLink></strong>
      </div>
      </div>
      </td>
      <td><h5>{s.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</h5></td>
      <td>
      <div className="product_count">
      <input onChange={() => onChangeItem(s.productId)} type="text" name="qty" id="sst" maxLength={12} value={s.quantity} title="Quantity:" className="input-text qty" />
      <button className="increase items-count" type="button" onClick={() => handelQuantity("+", s.productId)}><i className="lnr lnr-chevron-up" /></button>
      <button className="reduced items-count" type="button" onClick={() => handelQuantity("-", s.productId)}><i className="lnr lnr-chevron-down" /></button>
      </div>
      </td>
      <td>
      <h5>{(s.price * s.quantity).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</h5>
      </td>
      <td>
      <button className="btn btn-sm btn-outline-danger" onClick={() => deleteItem(index)}>Xóa</button>
      </td>
      </tr>
      );
  });

  return (
    <div>
  {/* Start Banner Area */}
  <section className="banner-area organic-breadcrumb">
  <div className="container">
  <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
  <div className="col-first">
  <h1>Giỏ Hàng</h1>
  <nav className="d-flex align-items-center">
  <NavLink exact="true" activeclass="active " to="/" className="nav-item">
  Trang chủ <span className="lnr lnr-arrow-right"></span>
  </NavLink>
  <a href="#a">Giỏ Hàng</a>
  </nav>
  </div>
  </div>
  </div>
  </section>

{/* End Banner Area */}
{/*================Cart Area =================*/}
<section className="cart_area">
<div className="container">
<div className="cart_inner">
<div className="table-responsive">
<table className="table">
<thead>
<tr>
<th scope="col">Sản phẩm</th>
<th scope="col">Giá</th>
<th scope="col">Số lượng</th>
<th scope="col">Tổng</th>
<th scope="col"></th>
</tr>
</thead>
<tbody>
{listCart}
<tr className="bottom_button">
<td>
<button className="gray_btn" onClick={reset}>
Cập nhật giỏ hàng
</button>
</td>
<td></td>
<td></td>
<td>
{/* <div className="cupon_text d-flex align-items-center">
<input type="text" placeholder="Coupon Code" />
<a className="primary-btn" href="#">
Apply
</a>
<a className="gray_btn" href="#">
Close Coupon
</a>
</div> */}
</td>
</tr>
<tr>
<td>

</td>
<td>

</td>
<td>
<h5>Tổng tiền</h5>
</td>
<td>
<h5>{Total.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</h5>
</td>
<td></td>
</tr>
                  {/* <tr className="shipping_area">
                    <td></td>
                    <td></td>
                    <td>
                      <h5>Shipping</h5>
                    </td>
                    <td>
                      <div className="shipping_box">
                        <ul className="list">
                          <li>
                            <a href="#">Flat Rate: $5.00</a>
                          </li>
                          <li>
                            <a href="#">Free Shipping</a>
                          </li>
                          <li>
                            <a href="#">Flat Rate: $10.00</a>
                          </li>
                          <li className="active">
                            <a href="#">Local Delivery: $2.00</a>
                          </li>
                        </ul>
                        <h6>
                          Calculate Shipping{" "}
                          <i className="fa fa-caret-down" aria-hidden="true" />
                        </h6>
                        <select className="shipping_select">
                          <option value={1}>Bangladesh</option>
                          <option value={2}>India</option>
                          <option value={4}>Pakistan</option>
                        </select>
                        <select className="shipping_select">
                          <option value={1}>Select a State</option>
                          <option value={2}>Select a State</option>
                          <option value={4}>Select a State</option>
                        </select>
                        <input type="text" placeholder="Postcode/Zipcode" />
                        <a className="gray_btn" href="#">
                          Update Details
                        </a>
                      </div>
                    </td>
                  </tr> */}
                  <tr className="out_button_area">
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                  <div className="checkout_btn_inner d-flex align-items-center">
                  <NavLink to="/shop" className="gray_btn">
                  Mua thêm
                  </NavLink>
                  <NavLink to="/checkout" className="primary-btn">
                  Thanh toán
                  </NavLink>
                  </div>
                  </td>
                  </tr>
                  </tbody>
                  </table>
                  </div>
                  </div>
                  </div>
                  </section>

                {/*================End Cart Area =================*/}

                </div>
                )
              }


              const mapDispatch = (dispatch) => {
                return {
                  editItemCart: (data) => {
                    dispatch(actQuantityItem(data))
                  }
                };
              };

              const mapState = (state) => {
                return {
                  cart: state.cart
                };
              };
              export default connect(mapState, mapDispatch)(Cart);



