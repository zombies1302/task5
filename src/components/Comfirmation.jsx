import { NavLink,useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';


function Confirmation() {
   useEffect(() => {
      const script = document.createElement('script');
      script.src = "/assets/js/main.js";
      script.async = true;
      document.body.appendChild(script);
      return () => {
         document.body.removeChild(script);
      }
   }, []);
   const params = useParams();
   let CodeOrder = params.id;
   const [orderInfo, setOrderInfo] = useState("");

   useEffect(() => {
      let url=`https://furniture.thaylongdeptrai.dev/api/orders/${CodeOrder}`;
      fetch(url).then(res => res.json()).then(data => {  
         if (data._id) {
            setOrderInfo(data)
         }
      });
   }, []);
   if (orderInfo) {
      return (
         <>
         <section className="banner-area organic-breadcrumb">
         <div className="container">
         <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
         <div className="col-first">
         <h1>Xác nhận</h1>
         <nav className="d-flex align-items-center">
         <NavLink exact="true" activeclass="active " to="/" className="nav-item">
         Trang chủ <span className="lnr lnr-arrow-right"></span>
         </NavLink>
         <a href="#a">Xác nhận</a>
         </nav>
         </div>
         </div>
         </div>
         </section>
         <section className="order_details section_gap">
         <div className="container">
         <h2 className="title_confirmation">
         Cảm ơn, đơn hàng của bạn đã được nhận
         </h2>
         <div className="row order_d_inner">
         <div className="col-lg-8 mx-auto">
         <div className="details_item">
         <h3 className="text-center">Thông tin đơn hàng</h3>
         <hr/>
         <div className="list">
         <h5>Mã Đơn Hàng : {orderInfo._id}</h5>
         <h5>Địa chỉ nhận hàng : {orderInfo.address}</h5>
         <h5>Trạng Thái : {orderInfo.status}</h5>
         <h5>Phương thức thanh toán : COD</h5>
         <h5>Email : {orderInfo.email}</h5>
         <h5>Số điện thoại : {orderInfo.phone}</h5>
         <h5>Ghi chú (nếu có) : {orderInfo.note}</h5>
         <h5>Ngày tạo đơn : {orderInfo.createdAt}</h5>
         <h5>Tổng Tiền : {orderInfo.amount.toLocaleString('vi-VN')} vnđ</h5>
         </div>
         </div>
         </div>
         </div>
         <div className="order_details_table">
         <h2>Chi tiết đơn hàng</h2>
         <div className="table-responsive">
         <table className="table">
         <thead>
         <tr>
         <th scope="col">Sản Phẩm</th>
         <th scope="col">Số Lượng</th>
         <th scope="col">Tổng Cộng</th>
         </tr>
         </thead>
         <tbody>
         {
            orderInfo.products.map(
               (item, index) => {
               return (  <tr>
                  <td><p>{item.name}</p></td>
                  <td><h5>x{item.quantity}</h5></td>
                  <td><p>{(item.quantity * item.price).toLocaleString('vi-VN')} vnđ</p></td>
                  </tr> )
               }
               )

         }

         <tr>
         <td><h4>Tổng Cộng</h4></td>
         <td><h5 /></td>
         <td><p>{orderInfo.amount.toLocaleString('vi-VN')} vnđ</p></td>
         </tr>
         </tbody>
         </table>
         </div>
         </div>
         </div>
         </section>
         </>
         )
   }else{
      return (
         <>
         <section className="banner-area organic-breadcrumb">
         <div className="container">
         <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
         <div className="col-first">
         <h1>Xác nhận</h1>
         <nav className="d-flex align-items-center">
         <NavLink exact="true" activeclass="active " to="/" className="nav-item">
         Trang chủ <span className="lnr lnr-arrow-right"></span>
         </NavLink>
         <a href="#a">Xác nhận</a>
         </nav>
         </div>
         </div>
         </div>
         </section>
         <section className="order_details section_gap">
         <div className="container">
         <h3 className="title_confirmation">
         Thông tin mã đơn hàng không hợp lệ hoặc không có trên hệ thống
         </h3>
         
         </div>
         </section>
         </>
         )
   }

}
export default Confirmation