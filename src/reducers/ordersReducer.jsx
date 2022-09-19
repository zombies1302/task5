import { NEW_ORDER } from "../const";


const ordersReducer = (state = [], action) => {
   switch (action.type) {
      case NEW_ORDER:
      console.log(action.data);

         // post order to server
         fetch('https://furniture.thaylongdeptrai.dev/api/orders', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(action.data)
         })
         .then(response => response.json())
         .then(data => {


         }

         );
         return state;
         default:
         return state;
      }
   };
   export default ordersReducer