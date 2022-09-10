import SingleProduct from "./singleProduct";

function SingleSlider(props) {
   let listProducts = [];
   props.ListProds.forEach((item, index) => {
      listProducts.push(
         <div className="col-lg-3 col-md-6" key={index}>
            <SingleProduct prod={item} />
         </div>
      );
   });

   let result =
      <div className="container">
         <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
               <div className="section-title">
                  <h1>{props.caption}</h1>
                  <p>Những sản phẩm mới nhất luôn được cập nhật</p>
               </div>
            </div>
         </div>
         <div className="row">
            {listProducts}
         </div>
      </div>
   return result;
}
export default SingleSlider;