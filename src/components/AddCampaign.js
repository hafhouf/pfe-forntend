import React, { useState } from 'react';
import axios from 'axios';
import { Container, Button, Form as BootstrapForm } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from '../layouts/NavBar';
import Footer from '../layouts/Footer';

const AddCampaign = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const campaign = { name, description };
    try {
      await axios.post('http://localhost:8086/api/campaigns', campaign);
      toast.success('Campaign created successfully');
      setName('');
      setDescription('');
    } catch (error) {
      console.error('Failed to create campaign', error);
      toast.error('Failed to create campaign');
    }
  };

  return (
    <>
      <Container className="py-5">
        <ToastContainer />
        <h2 className="text-center mb-4">Create Campaign</h2>
        <BootstrapForm onSubmit={handleSubmit}>
          <BootstrapForm.Group controlId="campaignName" className="mb-3">
            <BootstrapForm.Label>Campaign Name</BootstrapForm.Label>
            <BootstrapForm.Control
              type="text"
              placeholder="Enter campaign name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </BootstrapForm.Group>
          <BootstrapForm.Group controlId="campaignDescription" className="mb-3">
            <BootstrapForm.Label>Campaign Description</BootstrapForm.Label>
            <BootstrapForm.Control
              as="textarea"
              rows={3}
              placeholder="Enter campaign description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </BootstrapForm.Group>
          <Button type="submit" variant="primary" className="float-end">
            Create Campaign
          </Button>
        </BootstrapForm>
      </Container>
    </>
  );
};

export default AddCampaign;
