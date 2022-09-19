import { NavLink } from "react-router-dom";
import { useRef, useEffect } from "react";
import { connect } from "react-redux";
import Select from "react-select";

import useLocationSelect from "./add-in/useLocationSelect";
import { actNewOrder } from "../actions/actOrders";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useNavigate  } from 'react-router-dom'

function Checkout(props) {
   useEffect(() => {
      console.log(props.itemInCart);

      const script = document.createElement('script');
      script.src = "/assets/js/main.js";
      script.async = true;
      document.body.appendChild(script);
      return () => {
         document.body.removeChild(script);
      }
   }, []);

   // for location select
   const {
      state,
      onCitySelect,
      onDistrictSelect,
      onWardSelect,
      onSubmit
   } = useLocationSelect(false);
   const {
      cityOptions,
      districtOptions,
      wardOptions,
      selectedCity,
      selectedDistrict,
      selectedWard
   } = state;
   const navi = useNavigate();

   function placeOrder(data){
               fetch('https://furniture.thaylongdeptrai.dev/api/orders', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(data)
               })
               .then(response => response.json())
               .then(data => {
                  if (data) {
                     Notify.success("Bạn Đã Đặt Hàng Thành Công!")
                     navi(`/comfirmation/${data._id}`);
                  }

               }

               );

            }
   // ref
   const refCustomerName = useRef();
   const refCustomerPhone = useRef();
   const refCustomerEmail = useRef();
   const refCustomerStreet = useRef();
   const refCustomerNote = useRef();
   const checkoutnow = () => {
      if (refCustomerName.current.value === "" || refCustomerPhone.current.value === "" || refCustomerEmail.current.value === "" || refCustomerStreet.current.value === "" || selectedCity === null || selectedDistrict === null || selectedWard === null) {
         alert('Vui lòng nhập đầy đủ thông tin');
      } else {
         let data = {
            name: refCustomerName.current.value,
            phone: refCustomerPhone.current.value,
            email: refCustomerEmail.current.value,
            address: refCustomerStreet.current.value + ", " + selectedWard.label + ", " + selectedDistrict.label + ", " + selectedCity.label,
            note: refCustomerNote.current.value,
            products: props.itemInCart,
            amount: Total
         }
         // console.log(data);
         placeOrder(data);
         // document.getElementById('customer-info-form').reset();
      }
   };


   let itemForCheckout = [];
   let Total = props.itemInCart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0);

   props.itemInCart.forEach((i, index) => {
      itemForCheckout.push(
         <li key={index}>
         <NavLink to={"/product/" + i._id}>
         {i.name} <span className="middle">x {i.quantity}</span>{" "}
         <span className="last">{(i.price * i.quantity).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
         </NavLink>
         </li>
         )
   });
   return (
      <div>
   {/* Start Banner Area */}
   <section className="banner-area organic-breadcrumb">
   <div className="container">
   <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
   <div className="col-first">
   <h1>Thanh toán</h1>
   <nav className="d-flex align-items-center">
   <NavLink exact="true" activeclass="active " to="/" className="nav-item">
   Trang chủ <span className="lnr lnr-arrow-right"></span>
   </NavLink>
   <a href="#a">Thanh toán</a>
   </nav>
   </div>
   </div>
   </div>
   </section>
{/* End Banner Area */}
{/*================Checkout Area =================*/}
<section className="checkout_area section_gap">
<div className="container">
               {/* <div className="returning_customer">
                  <div className="check_title">
                     <h2>
                        Returning Customer? <NavLink to="/login">Nhấn vào đây để đăng nhập</NavLink>
                     </h2>
                  </div>
                  <p>
                     If you have shopped with us before, please enter your details in the
                     boxes below. If you are a new customer, please proceed to the Billing
                     &amp; Shipping section.
                  </p>
                  <form
                     className="row contact_form"
                     action="#"
                     method="post"
                     noValidate="novalidate"
                  >
                     <div className="col-md-6 form-group p_star">
                        <input type="text" className="form-control" id="name" name="name" />
                        <span
                           className="placeholder"
                           data-placeholder="Username or Email"
                        />
                     </div>
                     <div className="col-md-6 form-group p_star">
                        <input
                           type="password"
                           className="form-control"
                           id="password"
                           name="password"
                        />
                        <span className="placeholder" data-placeholder="Password" />
                     </div>
                     <div className="col-md-12 form-group">
                        <button type="submit" value="submit" className="primary-btn">
                           login
                        </button>
                        <div className="creat_account">
                           <input type="checkbox" id="f-option" name="selector" />
                           <label htmlFor="f-option">Remember me</label>
                        </div>
                        <a className="lost_pass" href="#">
                           Lost your password?
                        </a>
                     </div>
                  </form>
               </div>
               <div className="cupon_area">
                  <div className="check_title">
                     <h2>
                        Have a coupon? <a href="#">Click here to enter your code</a>
                     </h2>
                  </div>
                  <input type="text" placeholder="Enter coupon code" />
                  <a className="tp_btn" href="#">
                     Apply Coupon
                  </a>
               </div> */}
               <div className="billing_details">
               <div className="row">
               <div className="col-lg-7">
               <h3>Thông tin vận chuyển</h3>
               <form id="customer-info-form" className="row contact_form" noValidate="novalidate">
               <div className="col-md-12 form-group">
               <input type="text" className="form-control" id="customer_name" name="customer_name" placeholder="Tên khách hàng" ref={refCustomerName} />
               </div>
               <div className="col-md-6 form-group">
               <input
               type="text"
               className="form-control"
               id="customer_phone"
               name="customer_phone"
               placeholder="Số điện thoại"
               ref={refCustomerPhone}
               />
               </div>
               <div className="col-md-6 form-group">
               <input
               type="email"
               className="form-control"
               id="customer_email"
               name="customer_email"
               placeholder="Email"
               ref={refCustomerEmail}
               />
               </div>
               <div className="col-md-12 form-group">
               <input
               type="text"
               className="form-control"
               id="detail_address"
               name="detail_address"
               placeholder="Địa chỉ"
               ref={refCustomerStreet}
               />
               </div>

            {/* <LocationSelect /> */}
            <div className="col-md-12 form-group">
            <Select
            className="country_select mb-3"
            name="cityId"
            key={`cityId_${selectedCity?.value}`}
            isDisabled={cityOptions.length === 0}
            options={cityOptions}
            onChange={(option) => onCitySelect(option)}
            placeholder="Tỉnh/Thành"
            defaultValue={selectedCity}
            />

            <Select
            className="country_select mb-3"
            name="districtId"
            key={`districtId_${selectedDistrict?.value}`}
            isDisabled={districtOptions.length === 0}
            options={districtOptions}
            onChange={(option) => onDistrictSelect(option)}
            placeholder="Quận/Huyện"
            defaultValue={selectedDistrict}
            />

            <Select
            className="country_select"
            name="wardId"
            key={`wardId_${selectedWard?.value}`}
            isDisabled={wardOptions.length === 0}
            options={wardOptions}
            placeholder="Phường/Xã"
            onChange={(option) => onWardSelect(option)}
            defaultValue={selectedWard}
            />
            </div>
            <div className="col-md-12 form-group">
            {/* <div className="creat_account">
            <h3>Chi tiết vận chuyển</h3>
            <input type="checkbox" id="f-option3" name="selector" />
            <label htmlFor="f-option3">
            Ship to a different address?
            </label>
         </div> */}
         <textarea
         className="form-control"
         name="message"
         id="message"
         rows={1}
         placeholder="Ghi chú"
         defaultValue={""}
         ref={refCustomerNote}
         />
         </div>
         </form>
         </div>
         <div className="col-lg-5">
         <div className="order_box">
         <h2>Đơn hàng của bạn</h2>
         <ul className="list">
         <li>
         <a>
         <strong>Sản phẩm <span>Thành tiền</span></strong>
         </a>
         </li>
         {itemForCheckout}
         </ul>
         <ul className="list list_2">
         <li>
         <a>
         Tổng tiền <span>{Total.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
         </a>
         </li>
         <li>
         <a>
         Phí vận chuyển <span>Miễn phí</span>
         </a>
         </li>
         <li>
         <a>
         Tổng thanh toán <span>{Total.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
         </a>
         </li>
         </ul>
         <div className="payment_item">
         <div className="radion_btn">
         <input type="radio" id="f-option5" name="selector" defaultChecked />
         <label htmlFor="f-option5">COD</label>
         <div className="check" />
         </div>
         <p>
         Thanh toán khi nhận hàng
         </p>
         </div>
         <div className="payment_item active">
         <div className="radion_btn">
         <input type="radio" id="f-option6" name="selector" disabled />
         <label htmlFor="f-option6">VISA </label>
         <img src="img/product/card.jpg" alt="" />
         <div className="check" />
         </div>
         <p>
         Tạm thời chưa hỗ trợ
         </p>
         </div>
         {/* <div className="creat_account">
         <input type="checkbox" id="f-option4" name="selector" />
         <label htmlFor="f-option4">I’ve read and accept the </label>
         <a href="#">terms &amp; conditions*</a>
      </div> */}
      <button className="primary-btn" onClick={checkoutnow}>
      Đặt hàng
      </button>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
   {/*================End Checkout Area =================*/}
   </div>
   )
}

const mapDispatch = (dispatch) => {
   return {
      checkout: (data) => {
         dispatch(actNewOrder(data))
      }
   };
};

const mapState = (state) => {
   return {
      itemInCart: state.cart
   };
};
export default connect(mapState, mapDispatch)(Checkout);