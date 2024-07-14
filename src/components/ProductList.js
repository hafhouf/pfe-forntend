// import React, { useState, useEffect, useContext } from 'react';
// import axios from 'axios';
// import { AuthContext } from '../context/AuthContext';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const ProductList = () => {
//   const [products, setProducts] = useState([]);
//   const { user } = useContext(AuthContext);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get('http://localhost:8086/api/products');
//         setProducts(response.data);
//       } catch (error) {
//         console.error('Failed to fetch products', error);
//       }
//     };
//     fetchProducts();
//   }, []);

//   const handlePurchase = async (productId, price) => {
//     try {
//       // Check if user has enough points
//       if (user.points < price) {
//         toast.error('Not enough points to purchase this product');
//         return;
//       }
  
//       // Deduct points from user and perform purchase
//       const response = await axios.post(`http://localhost:8086/api/users/${user.id}/purchase`, { productId }, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
//       if (response.data === "Product purchased successfully") {
//         toast.success('Product purchased successfully');
//       } else {
//         toast.error('Failed to purchase product');
//       }
//     } catch (error) {
//       console.error('Failed to purchase product', error);
//       toast.error('Failed to purchase product');
//     }
//   };
  

//   return (
//     <div>
//       <ToastContainer />
//       <h2 className="text-center mb-4">Products</h2>
//       <div className="row">
//         {products.map(product => (
//           <div key={product.id} className="col-md-4 mb-4">
//             <div className="card h-100">
//               <div className="card-body">
//                 <h5 className="card-title">{product.name}</h5>
//                 <p className="card-text">{product.description}</p>
//                 <p className="card-text">Price: {product.price} points</p>
//                 <button
//                   className="btn btn-primary"
//                   onClick={() => handlePurchase(product.id, product.price)}
//                 >
//                   Buy
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductList;
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8086/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Failed to fetch products', error);
      }
    };
    fetchProducts();
  }, []);

  const handlePurchase = async (productId) => {
    try {
      const response = await axios.post(`http://localhost:8086/api/products/${user.id}/purchase`, { productId });
      if (response.status === 200) {
        toast.success('Product purchased successfully');
        // Optionally, update user points and purchased products here
      } else {
        toast.error(response.data || 'Failed to purchase product');
      }
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(error.response.data);
      } else {
        toast.error('Failed to purchase product');
      }
    }
  };

  return (
    <div>
      <ToastContainer />
      <h2 className="text-center mb-4">Products</h2>
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">Price: {product.price} points</p>
                <button
                  className="btn btn-primary"
                  onClick={() => handlePurchase(product.id)}
                >
                  Buy
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
