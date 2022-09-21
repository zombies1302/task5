
import { BrowserRouter, Routes, Route, Link,NavLink,useNavigate  } from 'react-router-dom'
const Header = (props) => {
	const navi = useNavigate();



	return (
		<div className="container">
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
		<div className="container-fluid">
		<NavLink className="navbar-brand mx-1 " to='/'>
		<img src="https://statics.voz.tech/styles/next/xenforo/voz-logo_2x.png?v=3" height="40" alt=""/>
		</NavLink>
		<div className="collapse navbar-collapse" id="navbarCenteredExample">
		<ul className="navbar-nav mb-2 mb-lg-0">

		<li className="nav-item">
		<NavLink activeclassname="active" to='/home' className="nav-link"><i className="fas fa-home"></i> Trang chủ</NavLink>
		</li>
		<li className="nav-item">
		<NavLink activeclassname="active" className="nav-link" to='/categories'><i className="fas fa-bars"></i> Loại Sản Phẩm</NavLink>
		</li>
		<li className="nav-item">
		<NavLink activeclassname="active" to='/login' className="nav-link">Đăng Nhập</NavLink>
		</li>
		</ul>
		</div>

		
		</div>
		</nav>
		</div>

		);
}
export default Header;

