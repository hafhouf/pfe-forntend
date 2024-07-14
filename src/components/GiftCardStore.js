// import React, { useContext, useState, useEffect } from 'react';
// import { AuthContext } from '../context/AuthContext';
// import { convertPointsToGiftCard, getGiftCardsByUser } from '../api/giftCardService';
// import { Container, Button, Form, ListGroup, Alert } from 'react-bootstrap';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import ProductList from './ProductList'; // Import ProductList
// import NavBar from '../layouts/NavBar';
// import Footer from '../layouts/Footer';

// const GiftCardStore = () => {
//   const { user } = useContext(AuthContext);
//   const [points, setPoints] = useState(0);
//   const [giftCards, setGiftCards] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (user && user.id) {
//       fetchGiftCards(user.id);
//     }
//   }, [user]);

//   const fetchGiftCards = async (userId) => {
//     try {
//       const response = await getGiftCardsByUser(userId);
//       setGiftCards(response.data);
//       setLoading(false);
//     } catch (error) {
//       setError('Failed to fetch gift cards');
//       setLoading(false);
//     }
//   };

//   const handleConvertPoints = async (e) => {
//     e.preventDefault();
//     try {
//       await convertPointsToGiftCard(user.id, points);
//       toast.success('Points converted to gift card successfully');
//       fetchGiftCards(user.id); // Refresh the gift cards list
//     } catch (error) {
//       setError('Failed to convert points to gift card');
//       toast.error('Failed to convert points to gift card');
//     }
//   };

//   return (
//     <>
//     <NavBar/>
//     <Container>
//       <ToastContainer />
//       <h2>Gift Card Store</h2>
//       <Form onSubmit={handleConvertPoints}>
//         <Form.Group controlId="points">
//           <Form.Label>Points to Convert</Form.Label>
//           <Form.Control
//             type="number"
//             value={points}
//             onChange={(e) => setPoints(e.target.value)}
//             required
//           />
//         </Form.Group>
//         <Button variant="primary" type="submit" className="mt-3">
//           Convert Points
//         </Button>
//       </Form>
//       {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
      
//       {/* Product List */}
//       <h3 className="mt-5">Products</h3>
//       <ProductList />
      
//       <h3 className="mt-5">My Gift Cards</h3>
//       {loading ? (
//         <div>Loading...</div>
//       ) : (
//         <ListGroup className="mt-3">
//           {giftCards.map((giftCard) => (
//             <ListGroup.Item key={giftCard.id}>
//               Code: {giftCard.code} - Value: {giftCard.value} points
//             </ListGroup.Item>
//           ))}
//         </ListGroup>
//       )}
//     </Container>
//     <Footer/>
//     </>
//   );
// };

// export default GiftCardStore;


import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { convertPointsToGiftCard, getGiftCardsByUser } from '../api/giftCardService';
import { Container, Button, Form, ListGroup, Alert } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductList from './ProductList'; // Import ProductList
import NavBar from '../layouts/NavBar';
import Footer from '../layouts/Footer';

const GiftCardStore = () => {
  const { user } = useContext(AuthContext);
  const [points, setPoints] = useState(0);
  const [giftCards, setGiftCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (user && user.id) {
      fetchGiftCards(user.id);
    }
  }, [user]);

  const fetchGiftCards = async (userId) => {
    try {
      const response = await getGiftCardsByUser(userId);
      setGiftCards(response.data);
      setLoading(false);
    } catch (error) {
      setError('Failed to fetch gift cards');
      setLoading(false);
    }
  };

  const handleConvertPoints = async (e) => {
    e.preventDefault();
    try {
      await convertPointsToGiftCard(user.id, points);
      toast.success('Points converted to gift card successfully');
      fetchGiftCards(user.id); // Refresh the gift cards list
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(error.response.data);
      } else {
        toast.error('Failed to convert points to gift card');
      }
    }
  };

  return (
    <>
    <NavBar/>
    <Container>
    <div className="container-fluid position-relative p-0">
    <div className="container-fluid service py-5">
      <ToastContainer />
      <h2>Gift Card Store</h2>
      <Form onSubmit={handleConvertPoints}>
        <Form.Group controlId="points">
          <Form.Label>Points to Convert</Form.Label>
          <Form.Control
            type="number"
            value={points}
            onChange={(e) => setPoints(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Convert Points
        </Button>
      </Form>
      {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
      
      {/* Product List */}
      <h3 className="mt-5">Products</h3>
      <ProductList />
      
      <h3 className="mt-5">My Gift Cards</h3>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ListGroup className="mt-3">
          {giftCards.map((giftCard) => (
            <ListGroup.Item key={giftCard.id}>
              Code: {giftCard.code} - Value: {giftCard.value} points
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
      </div></div>
    </Container>
    <Footer/>
    </>
  );
};

export default GiftCardStore;

