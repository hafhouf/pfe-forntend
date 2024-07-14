import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { Container, Form, Button, Row, Col, Card, Pagination } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../layouts/Footer';
import NavBar from '../layouts/NavBar';
import './UserProfile.css';

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  const [userData, setUserData] = useState({});
  const [responses, setResponses] = useState([]);
  const [purchasedProducts, setPurchasedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 3;

  useEffect(() => {
    if (user && user.id) {
      fetchUserData(user.id);
      fetchUserResponses(user.id);
      fetchPurchasedProducts(user.id);
    }
  }, [user]);

  const fetchUserData = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:8086/api/auth/${userId}`);
      setUserData(response.data);
      setLoading(false);
    } catch (error) {
      setError('Failed to fetch user data');
      setLoading(false);
    }
  };

  const fetchUserResponses = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:8086/api/auth/${userId}/responses`);
      setResponses(response.data);
      setLoading(false);
    } catch (error) {
      setError('Failed to fetch user responses');
      setLoading(false);
    }
  };

  const fetchPurchasedProducts = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:8086/api/users/${userId}/purchased-products`);
      setPurchasedProducts(response.data);
      setLoading(false);
    } catch (error) {
      setError('Failed to fetch purchased products');
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8086/api/auth/${user.id}`, userData);
      toast.success('Profile updated successfully');
    } catch (error) {
      setError('Failed to update profile');
      toast.error('Failed to update profile');
    }
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = purchasedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <NavBar />
      <br></br>
      <br></br>
      <br></br>

      <div className="container-fluid position-relative p-0">
        <div className="container-fluid service py-5">
          <Container>
            <br />
            <ToastContainer />
            <h2 className="mb-4">User Profile</h2>
            <Card className="p-4 mb-5">
              <Form onSubmit={handleSubmit} className="profile-form">
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="firstName">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="firstName"
                        value={userData.firstName || ''}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="lastName">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="lastName"
                        value={userData.lastName || ''}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="phoneNumber">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="text"
                        name="phoneNumber"
                        value={userData.phoneNumber || ''}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={userData.email || ''}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="dateOfBirth">
                      <Form.Label>Date of Birth</Form.Label>
                      <Form.Control
                        type="date"
                        name="dateOfBirth"
                        value={userData.dateOfBirth ? userData.dateOfBirth.substring(0, 10) : ''}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="birthLocation">
                      <Form.Label>Birth Location</Form.Label>
                      <Form.Control
                        type="text"
                        name="birthLocation"
                        value={userData.birthLocation || ''}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Enter new password if you want to change it"
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-3">
                  Update Profile
                </Button>
              </Form>
            </Card>

            <div className="section mt-5">
              <h3 className="section-title">Total Points</h3>
              <Card className="points-card">
                <Card.Body>
                  <Card.Title>{userData.points}</Card.Title>
                </Card.Body>
              </Card>
            </div>

            <div className="section mt-5">
              <h3 className="section-title">My Responses</h3>
              {responses.length === 0 ? (
                <p>You haven't responded to any forms yet.</p>
              ) : (
                <Row className="g-4 justify-content-center">
                  {responses.map((response) => (
                    <Col md={6} lg={4} xl={3} key={response.id} className="wow fadeInUp" data-wow-delay="0.1s">
                      <Card className="p-4 feature-item">
                        <Card.Body>
                          <Card.Title>Form ID: {response.form.id}</Card.Title>
                          <Card.Text>{response.form.description}</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              )}
            </div>

            <div className="section mt-5">
              <h3 className="section-title">Purchased Products</h3>
              {purchasedProducts.length === 0 ? (
                <p>You haven't purchased any products yet.</p>
              ) : (
                <>
                  <Row className="g-4 justify-content-center">
                    {currentProducts.map((product) => (
                      <Col md={6} lg={4} xl={3} key={product.id} className="wow fadeInUp" data-wow-delay="0.1s">
                        <Card className="p-4 feature-item">
                          <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>{product.description}</Card.Text>
                            <Card.Text>Price: {product.price} points</Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                  <Pagination className="mt-4 justify-content-center">
                    {[...Array(Math.ceil(purchasedProducts.length / productsPerPage)).keys()].map(number => (
                      <Pagination.Item key={number + 1} active={number + 1 === currentPage} onClick={() => paginate(number + 1)}>
                        {number + 1}
                      </Pagination.Item>
                    ))}
                  </Pagination>
                </>
              )}
            </div>
          </Container>
        </div>
      </div>
      <br></br>
      <br></br>

      <Footer />
    </>
  );
};

export default UserProfile;
