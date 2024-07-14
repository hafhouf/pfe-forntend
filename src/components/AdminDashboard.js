import React, { useContext, useEffect } from 'react';
import { useNavigate, Routes, Route, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { Container, Row, Col, Nav, NavDropdown } from 'react-bootstrap';
import AdminAddForm from './AdminAddForm';
import AdminFormList from './AdminFormList';
import UserProfile from './UserProfile';
import GiftCardStore from './GiftCardStore';
import AddProduct from './AddProduct';
import AdminProductList from './AdminProductList';
import AdminUserList from './AdminUserList';
import AdminPurchasedProductList from './AdminPurchasedProductList';
import AddCampaign from './AddCampaign'; // Import AddCampaign component
import './AdminDashboard.css';

const AdminDashboard = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    } else if (user.role !== 'ADMIN') {
      navigate('/login');
    }
  }, [user, navigate]);

  return (
    <Container fluid className="admin-dashboard">
      <Row>
        <Col md={2} className="sidebar vh-100 p-3">
          <div className="sidebar-header">
            <img src="/admin.jpg" alt="Admin" className="sidebar-avatar" />
            <h2 className="sidebar-title">Focus-Group</h2>
            <p className="sidebar-role">Admin</p>
          </div>
          <Nav className="flex-column">
            <Nav.Link as={Link} to="dashboard" className="nav-item">
              <i className="fas fa-home"></i> Dashboard
            </Nav.Link>
            <NavDropdown title="Form Management" id="form-management-dropdown" className="nav-item">
              <NavDropdown.Item as={Link} to="add-form">Add Form</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="forms">View Forms</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Product Management" id="product-management-dropdown" className="nav-item">
              <NavDropdown.Item as={Link} to="add-product">Add Product</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="products">View Products</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Campaign Management" id="campaign-management-dropdown" className="nav-item">
              <NavDropdown.Item as={Link} to="add-campaign">Add Campaign</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="users" className="nav-item">
              <i className="fas fa-users"></i> View Users
            </Nav.Link>
            <Nav.Link as={Link} to="purchased-products" className="nav-item">
              <i className="fas fa-shopping-cart"></i> Purchased Products
            </Nav.Link>
            <Nav.Link as={Link} to="/login" className="nav-item" onClick={() => { /* add logout logic here */ }}>
              <i className="fas fa-sign-out-alt"></i> Logout
            </Nav.Link>
          </Nav>
        </Col>
        <Col md={10} className="content">
          <Container className="py-4">
            <Routes>
              <Route path="add-form" element={<AdminAddForm />} />
              <Route path="forms" element={<AdminFormList />} />
              <Route path="profile" element={<UserProfile />} />
              <Route path="gift-card-store" element={<GiftCardStore />} />
              <Route path="add-product" element={<AddProduct />} />
              <Route path="products" element={<AdminProductList />} />
              <Route path="users" element={<AdminUserList />} />
              <Route path="purchased-products" element={<AdminPurchasedProductList />} />
              <Route path="add-campaign" element={<AddCampaign />} /> {/* Add this line */}
            </Routes>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;
