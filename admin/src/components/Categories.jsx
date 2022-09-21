import React, { useState, useRef,useEffect } from "react";
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { BrowserRouter, Routes, Route, Link,NavLink,useNavigate  } from 'react-router-dom'

function Categories (props){ 
  const [categories, setCategories] = useState([]);
    let urlLoai = 'https://furniture.thaylongdeptrai.dev/api/categories'
    useEffect(() => {
      fetch(urlLoai)
      .then((res) => res.json())
      .then((data) => setCategories(data));
    }, []);
const token = localStorage.getItem('token')
console.log(categories)
if (!token) {
  return (<h1 className="text-center">Vui lòng đăng nhập để tiếp tục</h1>)
}else{
  const hamXoa = (id)=>{
    // console.log(id)
    Confirm.show(
      'Thông Báo',
      'Xoá Thật Không ?',
      'Có',
      'Không',
      () => {
        fetch(`${urlLoai}/${id}`,{
          method: "delete",
          headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`}
          })
        .then((res) => res.json()).then((data)=>{
          console.log(data)
          if (data.status_code == 200) {
            Notify.success(`${data.message}`)
          }else {
            Notify.failure(`${data.message}`)
          }
        })},() => {
        // alert('If you say so...');
      },{},);

  }
  const kq =       <div className="row m-1">
  <h1>Quản Lý Loại Sản Phẩm</h1>
  <table className="table">
  <thead>
  <tr>
  <th scope="col">#</th>
  <th scope="col">Tên Loại Sản Phẩm</th>
  <th scope="col">Thứ Tự</th>
  <th scope="col">Hành Động</th>
  </tr>
  </thead>
  <tbody>
  {
    categories.map( (s,index) =>(
      <tr key={index}>
      <th scope="row">{index+1}</th>
      <td>{s.name}</td>
      <td>{s.rank}</td>
      <td valign="middle">
      <a className="btn btn-danger btn-floating" onClick={() => hamXoa(s._id)}><i className="far fa-trash-alt"></i></a>
      </td>
      </tr>
      )) 
    }


    </tbody>
    </table>
    </div>


    return (kq);  


  }


};

export default Categories;
