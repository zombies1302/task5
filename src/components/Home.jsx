// import { connect } from 'react-redux';
import { useEffect } from 'react';

import SingleSlider from './add-in/singleSlider';

const Home = (props) => {
	const listProducts = [
		{
			"id": 1,
			"name": "Try Burning Gundam",
			"images": "try_burning_gundam.jpg",
			"price": 450000,
			"series": 2,
			"release": "2015-02-01",
			"size": 2
		},
		{
			"id": 2,
			"name": "Gundam Barbatos Lupus Rex",
			"images": "gundam_barbatos_lupus_rex.jpg",
			"price": 400000,
			"series": 5,
			"release": "2017-02-11",
			"size": 2
		},
		{
			"id": 3,
			"name": "Kamiki Burning Gundam",
			"images": "kamiki_burning_gundam.jpg",
			"price": 540000,
			"series": 2,
			"release": "2015-09-06",
			"size": 2
		},
		{
			"id": 4,
			"name": "Gundam X Maoh",
			"images": "gundam_x_maoh.jpg",
			"price": 400000,
			"series": 1,
			"release": "2013-11-09",
			"size": 2
		},
		{
			"id": 5,
			"name": "RX-0 Unicorn Gundam(Destroy mode)",
			"images": "rx-0_unicorn_gundam_destroy_mode.jpg",
			"price": 480000,
			"series": 6,
			"release": "2009-11-11",
			"size": 2
		},
		{
			"id": 6,
			"name": "RX-0 Unicorn Gundam 02 Banshee Norn",
			"images": "rx-0_unicorn_gundam_02_banshee_norn.jpg",
			"price": 780000,
			"series": 6,
			"release": "2018-02-02",
			"size": 3
		},
		{
			"id": 7,
			"name": "RX-0 Unicorn Gundam 02 Banshee(Destroy mode)",
			"images": "rx-0_unicorn_gundam_02_banshee_destroy_mode.jpg",
			"price": 500000,
			"series": 6,
			"release": "2012-02-08",
			"size": 2
		},
		{
			"id": 8,
			"name": "Unicorn Gundam Perfectibility(Destroy mode)",
			"images": "unicorn_gundam_perfectibility_destroy_mode.jpg",
			"price": 1300000,
			"series": 6,
			"release": "2018-09-28",
			"size": 2
		},
		{
			"id": 9,
			"name": "RX-0 Unicorn Gundam 03 Phenex(Unicorn mode)",
			"images": "rx-0_unicorn_gundam_03_phenex_unicorn_mode.jpg",
			"price": 950000,
			"series": 6,
			"release": "2019-08-03",
			"size": 2
		},
		{
			"id": 10,
			"name": "RX-0 Unicorn Gundam 03 Phenex(Destroy mode)",
			"images": "rx-0_unicorn_gundam_03_phenex_destroy_mode.jpg",
			"price": 1150000,
			"series": 6,
			"release": "2018-10-06",
			"size": 2
		},
		{
			"id": 11,
			"name": "Build Strike Gundam Full Package",
			"images": "build_strike_gundam_full_package.jpg",
			"price": 370000,
			"series": 1,
			"release": "2013-10-05",
			"size": 2
		},
		{
			"id": 12,
			"name": "Crossbone Gundam Maoh",
			"images": "crossbone_gundam_maoh.jpg",
			"price": 400000,
			"series": 1,
			"release": "2014-04-12",
			"size": 2
		},
		{
			"id": 13,
			"name": "Gundam Amazing Exia",
			"images": "gundam_amazing_exia.jpg",
			"price": 400000,
			"series": 1,
			"release": "2014-08-09",
			"size": 2
		},
		{
			"id": 14,
			"name": "Gundam Amazing Red Warrior",
			"images": "gundam_amazing_red_warrior.jpg",
			"price": 400000,
			"series": 2,
			"release": "2015-01-10",
			"size": 2
		},
		{
			"id": 15,
			"name": "Gundam Tryon 3",
			"images": "gundam_tryon_3.jpg",
			"price": 560000,
			"series": 2,
			"release": "2015-06-04",
			"size": 2
		},
		{
			"id": 16,
			"name": "R-GYAGYA",
			"images": "r-gyagya.jpg",
			"price": 360000,
			"series": 2,
			"release": "2014-12-11",
			"size": 2
		},
		{
			"id": 17,
			"name": "Gundam Exia Dark Matter",
			"images": "gundam_exia_dark_matter.jpg",
			"price": 430000,
			"series": 1,
			"release": "2014-03-22",
			"size": 2
		},
		{
			"id": 18,
			"name": "Gundam Barbatos",
			"images": "gundam_barbatos.jpg",
			"price": 350000,
			"series": 5,
			"release": "2015-10-03",
			"size": 2
		},
		{
			"id": 19,
			"name": "Gundam Astaroth Origin",
			"images": "gundam_astaroth_origin.jpg",
			"price": 320000,
			"series": 5,
			"release": "2016-04-27",
			"size": 2
		},
		{
			"id": 20,
			"name": "Gundam Vidar",
			"images": "gundam_vidar.jpg",
			"price": 310000,
			"series": 5,
			"release": "2016-12-01",
			"size": 2
		},
		{
			"id": 21,
			"name": "Gundam Marchosias",
			"images": "gundam_marchosias.jpg",
			"price": 440000,
			"series": 5,
			"release": "2020-03-07",
			"size": 2
		},
		{
			"id": 22,
			"name": "Sengoku Astray Gundam",
			"images": "sengoku_astray_gundam.jpg",
			"price": 380000,
			"series": 1,
			"release": "2012-12-14",
			"size": 2
		},
		{
			"id": 23,
			"name": "san pham cu",
			"price": 222222,
			"images": "ao-money-rain.gif",
			"series": 1,
			"size": 1,
			"release": "2022-08-11"
		}
	]
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
												Nike New <br />
												Collection!
											</h1>
											<p>
												Lorem ipsum dolor sit amet, consectetur adipisicing elit,
												sed do eiusmod tempor incididunt ut labore et dolore magna
												aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
											</p>
											<div className="add-bag d-flex align-items-center">
												<a className="add-btn" href="">
													<span className="lnr lnr-cross" />
												</a>
												<span className="add-text text-uppercase">Add to Bag</span>
											</div>
										</div>
									</div>
									<div className="col-lg-7">
										<div className="banner-img">
											<img
												className="img-fluid"
												src="assets/img/banner/banner-img.png"
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
												Nike New <br />
												Collection!
											</h1>
											<p>
												Lorem ipsum dolor sit amet, consectetur adipisicing elit,
												sed do eiusmod tempor incididunt ut labore et dolore magna
												aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
											</p>
											<div className="add-bag d-flex align-items-center">
												<a className="add-btn" href="">
													<span className="lnr lnr-cross" />
												</a>
												<span className="add-text text-uppercase">Add to Bag</span>
											</div>
										</div>
									</div>
									<div className="col-lg-7">
										<div className="banner-img">
											<img
												className="img-fluid"
												src="assets/img/banner/banner-img.png"
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
			<section className="category-area">
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
			</section>
			{/* End category Area */}
			{/* start product Area */}
			<section className="owl-carousel active-product-area section_gap">
				<div className="single-product-slider" id="lastest-product">
					<SingleSlider caption="Sản phẩm mới" ListProds={listProducts.slice(0, 8)} />
				</div>
				<div className="single-product-slider" id="lastest-product">
					<SingleSlider caption="Sản phẩm hot" ListProds={listProducts.slice(8, 16)} />
				</div>
			</section>
			{/* end product Area */}
		</div>
	);
}
export default Home;