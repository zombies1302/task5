
import app from "../firebaseConfig.js"
import { getStorage,ref,uploadBytesResumable, getDownloadURL } from "firebase/storage";


import { BrowserRouter, Routes, Route, Link, NavLink, Redirect } from "react-router-dom";
import {useState} from "react"
function Testupload() {
   const [file, setFile] = useState("");

   const [percent, setPercent] = useState(0);
   const storage = getStorage();
   // Handles input change event and updates state
   function handleChange(event) {
      setFile(event.target.files[0]);

   }
   function handleUpload() {
      console.log(file)
      if (!file) {
         alert("Please upload an image first!");
      }
      const storageRef = ref(storage, `/img/${file.name}`)
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
         "state_changed",
         (snapshot) => {
            const percent = Math.round(
               (snapshot.bytesTransferred / snapshot.totalBytes) * 100
               );


            setPercent(percent);
            console.log(percent)
         },
         (err) => console.log(err),
         () => {
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
               console.log(url);

            });
         }
         );

   }
   const [check, setCheck] = useState("none");
   function Changebt(){
      if (check == "none") {
         setCheck("block")

         // statement
      }else{
         setCheck("none")

      }
   }


   return (
      <>

      <section className="banner-area organic-breadcrumb">
      <div className="container">
      <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
      <div className="col-first">
      <h1>Sản phẩm</h1>
      <nav className="d-flex align-items-center">
      <NavLink exact="true" activeclass="active " to="/" className="nav-item">
      Trang chủ <span className="lnr lnr-arrow-right"></span>
      </NavLink>
      <a href="#a">Sản phẩm</a>
      </nav>
      </div>
      </div>
      </div>
      </section>
      <div className="container">

      <div className="input-group mb-3">
      <div className="input-group-prepend">
      <div>
      <input id="me" type="checkbox" aria-label="Checkbox for following text input" onChange={Changebt} />
      <label htmlFor="me">Mẹ</label>
      </div>
      <div style={{display :`${check}`}}>
      <div>
      <input id="con" type="checkbox" aria-label="Checkbox for following text input" />
      <label htmlFor="con">Con</label>
      </div>

      <input id="con" type="checkbox" aria-label="Checkbox for following text input" />
      <label htmlFor="con">Con</label>
      <br/>
      <input id="con" type="checkbox" aria-label="Checkbox for following text input" />
      <label htmlFor="con">Con</label>
      </div>


      </div>

      </div>



      <input type="file" accept="image/*" onChange={handleChange}/>
      <button className="btn btn-danger" onClick={handleUpload}>Upload to Firebase</button>
      <div className="percentage">
      <div className="progress">
      <div className="progress-bar color-6" role="progressbar" style={{ width: `${percent}%` }} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100}/>
      </div>


      </div>

      </div>
      </>
      )
}
export default Testupload;