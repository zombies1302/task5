import React, { useState, useRef } from "react";

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { BrowserRouter, Routes, Route, Link,NavLink,useNavigate  } from 'react-router-dom'

function Login (props){ 
  const refEmail = useRef('');
  const refPassword = useRef('');
  const navi = useNavigate();


  const loginEmail = (e)=>{
    let data = {
      "username":refEmail.current.value,
      "password": refPassword.current.value
    }
    
    fetch(`https://furniture.thaylongdeptrai.dev/api/users/login`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {'Content-Type':'application/json',
    }
  }).then((res) => res.json()).then(data => {   
    console.log(data)  
    if (data.status_code == 401) {
       Notify.failure(`${data.message}`);
     } else if(data.role == "admin"){
       let token = data.accessToken
       Notify.success("Đăng Nhập Thành Công")
       localStorage.setItem('token', token);
       navi('/categories');
     }else {
       Notify.failure(`Vui lòng đăng nhập bằng tài khoản Admin`);
     }



   });
  



  
  // console.log(data)


}
return (
  <div className="container">
  <h1 className="text-center">Đăng Nhập</h1>
  <div className="col-6 m-auto">
  <label className="form-label" htmlFor="typeEmail" >Email</label>
  <input type="text" id="typeEmail" className="form-control" ref={refEmail}  />
  <label className="form-label" htmlFor="typeEmail">Mật Khẩu</label>
  <input type="email" id="typeEmail" className="form-control" ref={refPassword} />
  <div className="mt-4">
  <button className="btn btn-info mx-2" onClick={loginEmail} >Đăng Nhập</button>

  </div>
  </div>
  </div>
  );
};

export default Login;
