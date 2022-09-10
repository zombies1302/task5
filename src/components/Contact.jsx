import { useEffect } from "react";
import { NavLink } from "react-router-dom";
function Contact() {
   useEffect(() => {
      const script = document.createElement('script');
      script.src = "/assets/js/main.js";
      script.async = true;
      document.body.appendChild(script);
      return () => {
         document.body.removeChild(script);
      }
   }, []);
   return (
      <div>
         {/* Start Banner Area */}
         <section className="banner-area organic-breadcrumb">
            <div className="container">
               <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                  <div className="col-first">
                     <h1>Liên hệ</h1>
                     <nav className="d-flex align-items-center">
                        <NavLink exact="true" activeclass="active " to="/" className="nav-item">
                           Trang chủ <span className="lnr lnr-arrow-right"></span>
                        </NavLink>
                        <a href="#a">Liên hệ</a>
                     </nav>
                  </div>
               </div>
            </div>
         </section>

         {/* End Banner Area */}
         {/*================Contact Area =================*/}
         <section className="contact_area section_gap_bottom">
            <div className="container">
               <div className="p-3"></div>
               <div className="row">
                  <div className="col-lg-3">
                     <div className="contact_info">
                        <div className="info_item">
                           <i className="lnr lnr-home" />
                           <h6>TP.HCM, Việt Nam</h6>
                           <p>Quận 12</p>
                        </div>
                        <div className="info_item">
                           <i className="lnr lnr-phone-handset" />
                           <h6>
                              <a href="#">0987.654.321</a>
                           </h6>
                           <p>Hỗ trợ 24/7</p>
                        </div>
                        <div className="info_item">
                           <i className="lnr lnr-envelope" />
                           <h6>
                              <a href="#">support@team1.com</a>
                           </h6>
                           <p>Gửi câu hỏi cho chúng tôi mọi lúc!</p>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-9">
                     <form className="row contact_form">
                        <div className="col-md-6">
                           <div className="form-group">
                              <input
                                 type="text"
                                 className="form-control"
                                 id="name"
                                 name="name"
                                 placeholder="Tên của bạn"
                              />
                           </div>
                           <div className="form-group">
                              <input
                                 type="email"
                                 className="form-control"
                                 id="email"
                                 name="email"
                                 placeholder="Email"
                              />
                           </div>
                           <div className="form-group">
                              <input
                                 type="text"
                                 className="form-control"
                                 id="subject"
                                 name="subject"
                                 placeholder="Tiêu đề"
                              />
                           </div>
                        </div>
                        <div className="col-md-6">
                           <div className="form-group">
                              <textarea
                                 className="form-control"
                                 name="message"
                                 id="message"
                                 rows={1}
                                 placeholder="Nội dung"
                                 defaultValue={""}
                              />
                           </div>
                        </div>
                        <div className="col-md-12 text-right">
                           <button type="button" className="primary-btn">
                              Gửi
                           </button>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </section>
         {/*================Contact Area =================*/}
      </div>
   )
}
export default Contact;