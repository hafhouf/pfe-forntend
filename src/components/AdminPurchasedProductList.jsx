import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminPurchasedProductList = () => {
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    const fetchPurchases = async () => {
      try {
        const response = await axios.get('http://localhost:8086/api/users');
        setPurchases(response.data);
      } catch (error) {
        console.error('Failed to fetch purchases', error);
      }
    };
    fetchPurchases();
  }, []);

  return (
    <div className="container">
      <h2 className="my-4">Purchased Products</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">User ID</th>
            <th scope="col">Product ID</th>
            <th scope="col">username</th>

          </tr>
        </thead>
        <tbody>
          {purchases.map((purchase, index) => (
            <tr key={`${purchase.userId}-${purchase.productId}-${index}`}>
              <th scope="row">{index + 1}</th>
              <td>{purchase.userId}</td>
              <td>{purchase.productId}</td>
              <td>{purchase.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPurchasedProductList;
