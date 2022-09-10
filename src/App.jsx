//  import router
import { BrowserRouter, Routes, Route, Link, NavLink, Redirect } from "react-router-dom";
import { connect } from 'react-redux'
import React, { useState,useEffect, useRef } from "react";
import { actAddProductsToStore } from './actions/actProducts'
import { actAddCategoriesToStore } from './actions/actCategories'


//  import component
import Home from "./components/Home"
import Shop from "./components/Shop"
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Categories from "./components/Categories";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";


function App(props) {
  React.useEffect(() => {
    let url="https://furniture.thaylongdeptrai.dev/api/products";
    fetch(url).then(res => res.json()).then(data => {   

      props.DuaSachVaoStore(data)

    });
}, []);
React.useEffect(() => {
    let urlLoai="https://furniture.thaylongdeptrai.dev/api/categories";
    fetch(urlLoai).then(res => res.json()).then(data => {      
      props.DuaLoaiVaoStore(data)

    });
}, []);

let listCate = []
props.listCategory.forEach( (loai,index) =>{
  listCate.push(
    <li key={index} className="nav-item"><Link to={'/categories/'+loai._id} className="nav-link">{loai.name}</Link></li>

    )

})


return (
  <BrowserRouter>
  <header className="header_area sticky-header">
  <div className="main_menu">
  <nav className="navbar navbar-expand-lg navbar-light main_box">
  <div className="container">
{/* Brand and toggle get grouped for better mobile display */}
<NavLink to="/" className="navbar-brand logo_h">
<img src="/assets/img/logo.png" alt="" />
</NavLink>
<button
className="navbar-toggler"
type="button"
data-toggle="collapse"
data-target="#navbarSupportedContent"
aria-controls="navbarSupportedContent"
aria-expanded="false"
aria-label="Toggle navigation"
>
<span className="icon-bar" />
<span className="icon-bar" />
<span className="icon-bar" />
</button>
{/* Collect the nav links, forms, and other content for toggling */}
<div
className="collapse navbar-collapse offset flex-grow-0"
id="navbarSupportedContent"
>
<ul className="nav navbar-nav menu_nav ml-auto">
<NavLink exact="true" activeclass="active " to="/" className="nav-item">
<span className="nav-link"> Trang chủ </span>
</NavLink>
<NavLink exact="true" activeclass="active " to="/shop" className="nav-item">
<span className="nav-link"> Shop </span>
</NavLink>

<li className="nav-item submenu dropdown">
<a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
aria-expanded="false">Loại Sản Phẩm</a>
<ul className="dropdown-menu">
{listCate}
</ul>
</li>

<NavLink exact="true" activeclass="active " to="/blog" className="nav-item">
<span className="nav-link"> Tin tức </span>
</NavLink>
<NavLink exact="true" activeclass="active " to="/contact" className="nav-item">
<span className="nav-link"> Liên hệ </span>
</NavLink>
<NavLink exact="true" activeclass="active " to="/login" className="nav-item">
<span className="nav-link"> Đăng nhập </span>
</NavLink>

</ul>
<ul className="nav navbar-nav navbar-right">
<li className="nav-item">
<NavLink activeclass="active" to="/cart" className="cart">
<span><i className="fa-solid fa-cart-arrow-down"></i>({props.cart.length})</span>
</NavLink>
</li>
<li className="nav-item">
<button className="search">
<span><i className="fa-solid fa-magnifying-glass"></i></span>
</button>
</li>
</ul>
</div>
</div>
</nav>
</div>
<div className="search_input" id="search_input_box">
<div className="container">
<form className="d-flex justify-content-between">
<input
type="text"
className="form-control"
id="search_input"
placeholder="Tìm kiếm ở đây"
/>
<button type="submit" className="btn" />
<span
className="lnr lnr-cross"
id="close_search"
title="Close Search"
/>
</form>
</div>
</div>
</header>

<main>
<Routes>
<Route path='/' exact="true" element={<Home />} />
<Route path='/shop' exact="true" element={<Shop />} />
<Route path='/blog' exact="true" element={<Blog />} />
<Route path='/contact' exact="true" element={<Contact />} />
<Route path='/login' exact="true" element={<Login />} />
<Route path='/cart' exact="true" element={<Cart />} />
<Route path='/checkout' exact="true" element={<Checkout />} />

<Route path='/categories/:id' exact="true" element={<Categories />} />

</Routes>
</main>

<footer className="footer-area section_gap">
<div className="container">
<div className="row">
<div className="col-lg-4  col-md-4 col-sm-6">
<div className="single-footer-widget">
<h6>Về chúng tôi</h6>
<p>
H-FURNITURE là chuỗi cửa hàng nội thất cao cấp tại Việt Nam. Mang đến cho bạn những sản phẩm nội thất chất lượng với giá cả hợp lý nhất.
</p>
</div>
</div>
<div className="col-lg-4 col-md-4 col-sm-6">
<div className="single-footer-widget">
<h6>Theo dõi</h6>
<p>Theo dõi chúng tôi trên mạng xã hội</p>
<div className="footer-social d-flex align-items-center">
<a href="#a" target="_blank" rel="noreferrer noopener"> <i className="fa-brands fa-facebook-f"></i> </a>
<a href="#a"> <i className="fa-brands fa-twitter"></i> </a>
</div>
</div>
</div>
<div className="col-lg-4  col-md-4 col-sm-6">
<div className="single-footer-widget">
<h6>Đăng ký</h6>
<p>Nhận những tin tức mới nhất</p>
<div className="" id="mc_embed_signup">

<form className="form-inline">

<div className="d-flex flex-row">

<input className="form-control" name="EMAIL" placeholder="Nhập email" required="" type="email" />


<button className="click-btn btn btn-default"><i className="fa fa-long-arrow-right"
aria-hidden="true"></i></button>
<div style={{ position: "absolute", left: -5000 + "px" }}>
<input name="b_36c4fd991d266f23781ded980_aefe40901a" tabIndex="-1" type="text" />
</div>

{/* <div className="col-lg-4 col-md-4">
<button className="bb-btn btn"><span className="lnr lnr-arrow-right"></span></button>
</div> */}
</div>
<div className="info"></div>
</form>
</div>
</div>
</div>
</div>
<div className="footer-bottom d-flex justify-content-center align-items-center flex-wrap">
<p className="footer-text m-0">
Copyright &copy;
<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is redesign with <i
className="fa fa-heart" aria-hidden="true"></i> by Team 1
</p>
</div>
</div>
</footer>
</BrowserRouter>
);
}
const mapState = (state) => {  
  return {  listCategory: state.categories,
    cart:state.cart
  }; 


};
const mapDispatch = (dispatch) => {
  return {
    DuaSachVaoStore: (data) => {
      dispatch(actAddProductsToStore(data));
    },
    DuaLoaiVaoStore:(data)=>{
      dispatch(actAddCategoriesToStore(data))
    },
  };
};

export default connect(mapState, mapDispatch)(App);

