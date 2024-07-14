import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';
import ResearcherDashboard from './components/ResearcherDashboard';
import UserDashboard from './components/UserDashboard';
import AddForm from './components/Form';
import FormList from './components/FormList';
import FormDetails from './components/FormDetails';
import { AuthProvider } from './context/AuthContext';
import UserProfile from './components/UserProfile';
import GiftCardStore from './components/GiftCardStore';
import AddProduct from './components/AddProduct';
import Home from './components/Home';
import Form from './components/Form';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} /> 
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin/*" element={<AdminDashboard />} />
          <Route path="/researcher" element={<ResearcherDashboard />} />
          <Route path="/user" element={<UserDashboard />} />
          <Route path="/add-form" element={<AddForm />} />
          <Route path="/forms" element={<FormList />} />
          <Route path="/form/:formId" element={<FormDetails />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/gift-card-store" element={<GiftCardStore />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/home" element={<Home />} />
          <Route path="/readdform" element={<Form />} />

        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
