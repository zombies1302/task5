import { NavLink } from "react-router-dom";

function Login(props) {
   return (
      <div>
         <section className="banner-area organic-breadcrumb">
            <div className="container">
               <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                  <div className="col-first">
                     <h1>Đăng nhập</h1>
                     <nav className="d-flex align-items-center">
                        <NavLink exact="true" activeclass="active " to="/" className="nav-item">
                           Trang chủ <span className="lnr lnr-arrow-right"></span>
                        </NavLink>
                        <a href="#a">Đăng nhập</a>
                     </nav>
                  </div>
               </div>
            </div>
         </section>
         {/* End Banner Area */}
         {/*================Login Box Area =================*/}
         <section className="login_box_area section_gap">
            <div className="container">
               <div className="row">
                  <div className="col-lg-6">
                     <div className="login_box_img">
                        <img className="img-fluid" src="/assets/img/login.jpg" alt="" />
                        <div className="hover">
                           <h4>Bạn lần đầu đến với chúng tôi?</h4>
                           <p>
                              Có những tiến bộ trong khoa học và công nghệ
                              hàng ngày, và một ví dụ điển hình về điều này là
                           </p>
                           <a className="primary-btn" href="#a">
                              Tạo tài khoản mới
                           </a>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="login_form_inner">
                        <h3>Đăng nhập để tiếp tục</h3>
                        <form
                           className="row login_form"
                           id="contactForm"
                           noValidate="novalidate"
                        >
                           <div className="col-md-12 form-group">
                              <input
                                 type="text"
                                 className="form-control"
                                 id="name"
                                 name="name"
                                 placeholder="Tên đăng nhập"
                              />
                           </div>
                           <div className="col-md-12 form-group">
                              <input
                                 type="text"
                                 className="form-control"
                                 id="name"
                                 name="name"
                                 placeholder="Mật khẩu"
                              />
                           </div>
                           <div className="col-md-12 form-group">
                              <div className="creat_account">
                                 <input type="checkbox" id="f-option2" name="selector" />
                                 <label htmlFor="f-option2">Giữ đăng nhập</label>
                              </div>
                           </div>
                           <div className="col-md-12 form-group">
                              <button type="button" value="submit" className="primary-btn">
                                 Đăng nhập
                              </button>
                              <a href="#a">Quên mật khẩu?</a>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>

   )
}

export default Login;