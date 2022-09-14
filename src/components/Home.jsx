import { useEffect } from 'react';

import SingleSlider from './add-in/singleSlider';

const Home = (props) => {
  const listProducts = [
    {
      id: 1,
      name: 'Bộ giường ngủ trẻ em cao cấp tại Nội Thất Xanh',
      images: 'giuong-ngu-tre-em-cao-cap-tai-noi-that-xanh-18.png',
      price: 15000000,
    },
    {
      id: 2,
      name: 'SOFA MOON 2 chỗ – vải màu xanh lá',
      images: 'Phong-khach-hien-dai-cung-voi-gam-mau-moi-1.jpg',
      price: 9000000,
    },
    {
      id: 3,
      name: 'Sofa Combo 3 chỗ da Bali 520',
      images: 'phong-khach-modern-luxury-1-1221x800.jpg',
      price: 5500000,
    },
    {
      id: 4,
      name: 'Bàn nước Bam Ceramic Trắng/Xám',
      images: '3105393.jpg',
      price: 1200000,
    },
    {
      id: 5,
      name: 'Bàn nước Lego',
      images: '62950_ban_nuoc_lego_mau_trang_a_l.jpg',
      price: 2015000,
    },
    {
      id: 6,
      name: 'Armchair Bridge Gỗ Tự nhiên Da đen',
      images: 'armchair_bridge_black_1.jpg',
      price: 55165000,
    },
    {
      id: 7,
      name: 'Tủ tivi Glamour trắng',
      images: '1000-tu-tv-glamour-3-600x400.jpg',
      price: 14441500,
    },
    {
      id: 8,
      name: 'Sofa 3 chỗ Penny vải xanh A2',
      images: '17-1-600x400.jpg',
      price: 22865000,
    },
    {
      id: 9,
      name: 'Armchair Garbo vàng đậm',
      images: 'armchair-garbo-vang-101197.jpg',
      price: 10353000,
    },
    {
      id: 10,
      name: 'Armchair Royal màu đỏ 2041/17',
      images: 'Armchair-Royal-mau-do-204117-600x400.jpg',
      price: 10115001,
    },
    {
      id: 11,
      name: 'Sofa Poppy góc trái vải màu cam',
      images: 'sofa_vai_poppy_mau_hong_12_goc_trai-600x399.jpeg',
      price: 24956000,
    },
    {
      id: 12,
      name: 'Đôn Bridge Gỗ Tự nhiên Da Đen',
      images: '500-73908-nha-xinh-phong-khach-don-bridge.jpg',
      price: 16736500,
    },
  ];
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/assets/js/main.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* start banner Area */}
      <section className="banner-area">
        <div className="container">
          <div className="row fullscreen align-items-center justify-content-start">
            <div className="col-lg-12">
              <div className="active-banner-slider owl-carousel">
                {/* single-slide */}
                <div className="row single-slide align-items-center d-flex">
                  <div className="col-lg-5 col-md-6">
                    <div className="banner-content">
                      <h1>
                        New <br />
                        Collection!
                      </h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation.
                      </p>
                      <div className="add-bag d-flex align-items-center">
                        <a className="add-btn" href="!`">
                          <span className="lnr lnr-cross" />
                        </a>
                        <span className="add-text text-uppercase">
                          Thêm vào giỏ hàng
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="banner-img">
                      <img
                        className="img-fluid"
                        src="assets/img/banner/banner1.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                {/* single-slide */}
                <div className="row single-slide">
                  <div className="col-lg-5">
                    <div className="banner-content">
                      <h1>
                        New <br />
                        Collection!
                      </h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation.
                      </p>
                      <div className="add-bag d-flex align-items-center">
                        <a className="add-btn" href="!">
                          <span className="lnr lnr-cross" />
                        </a>
                        <span className="add-text text-uppercase">
                          Thêm vào giỏ hàng
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="banner-img">
                      <img
                        className="img-fluid"
                        src="assets/img/banner/banner2.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End banner Area */}
      {/* start features Area */}
      <section className="features-area section_gap">
        <div className="container">
          <div className="row features-inner">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-features">
                <div className="f-icon">
                  <img src="/assets/img/features/f-icon1.png" alt="" />
                </div>
                <h6>Miễn phí giao hàng</h6>
                <p>Giao hàng miễn phí cho tất cả các đơn đặt hàng.</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-features">
                <div className="f-icon">
                  <img src="/assets/img/features/f-icon2.png" alt="" />
                </div>
                <h6>Chính sách đổi trả</h6>
                <p>Đổi trả trong 7 ngày nếu lỗi nhà sản xuất.</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-features">
                <div className="f-icon">
                  <img src="/assets/img/features/f-icon3.png" alt="" />
                </div>
                <h6>Hỗ trợ 24/7</h6>
                <p>Chúng tôi luôn hỗ trợ khách hàng mọi lúc.</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-features">
                <div className="f-icon">
                  <img src="/assets/img/features/f-icon4.png" alt="" />
                </div>
                <h6>Bảo mật thanh toán</h6>
                <p>Luôn nâng cao bảo mật cho phương thức thanh toán.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end features Area */}
      {/* Start category Area */}
      {/* <section className="category-area">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-8 col-md-12">
							<div className="row">
								<div className="col-lg-8 col-md-8">
									<div className="single-deal">
										<div className="overlay" />
										<img
											className="img-fluid w-100"
											src="assets/img/category/c1.jpg"
											alt=""
										/>
										<a
											href="img/category/c1.jpg"
											className="img-pop-up"
											target="_blank"
										>
											<div className="deal-details">
												<h6 className="deal-title">Sneaker for Sports</h6>
											</div>
										</a>
									</div>
								</div>
								<div className="col-lg-4 col-md-4">
									<div className="single-deal">
										<div className="overlay" />
										<img
											className="img-fluid w-100"
											src="assets/img/category/c2.jpg"
											alt=""
										/>
										<a
											href="img/category/c2.jpg"
											className="img-pop-up"
											target="_blank"
										>
											<div className="deal-details">
												<h6 className="deal-title">Sneaker for Sports</h6>
											</div>
										</a>
									</div>
								</div>
								<div className="col-lg-4 col-md-4">
									<div className="single-deal">
										<div className="overlay" />
										<img
											className="img-fluid w-100"
											src="assets/img/category/c3.jpg"
											alt=""
										/>
										<a
											href="img/category/c3.jpg"
											className="img-pop-up"
											target="_blank"
										>
											<div className="deal-details">
												<h6 className="deal-title">Product for Couple</h6>
											</div>
										</a>
									</div>
								</div>
								<div className="col-lg-8 col-md-8">
									<div className="single-deal">
										<div className="overlay" />
										<img
											className="img-fluid w-100"
											src="assets/img/category/c4.jpg"
											alt=""
										/>
										<a
											href="img/category/c4.jpg"
											className="img-pop-up"
											target="_blank"
										>
											<div className="deal-details">
												<h6 className="deal-title">Sneaker for Sports</h6>
											</div>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="single-deal">
								<div className="overlay" />
								<img className="img-fluid w-100" src="assets/img/category/c5.jpg" alt="" />
								<a
									href="img/category/c5.jpg"
									className="img-pop-up"
									target="_blank"
								>
									<div className="deal-details">
										<h6 className="deal-title">Sneaker for Sports</h6>
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section> */}
      {/* End category Area */}
      {/* start product Area */}
      <section className="owl-carousel active-product-area section_gap">
        <div className="single-product-slider" id="lastest-product">
          <SingleSlider
            caption="Sản phẩm mới"
            ListProds={listProducts.slice(0, 8)}
          />
        </div>
        <div className="single-product-slider" id="lastest-product">
          <SingleSlider
            caption="Sản phẩm nổi bật"
            ListProds={listProducts.slice(0, 8)}
          />
        </div>
        <div className="single-product-slider" id="lastest-product">
          <SingleSlider
            caption="Sản phẩm xem nhiều"
            ListProds={listProducts.slice(0, 8)}
          />
        </div>
      </section>
      {/* end product Area */}
    </div>
  );
};
export default Home;
