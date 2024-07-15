import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AdminFormList = () => {
  const [forms, setForms] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const formsPerPage = 5;

  useEffect(() => {
    const fetchForms = async () => {
      try {
        const response = await axios.get('http://localhost:8086/api/forms');
        setForms(response.data);
      } catch (error) {
        console.error('Failed to fetch forms', error);
      }
    };
    fetchForms();
  }, []);

  // Calculate the forms to display based on the current page
  const indexOfLastForm = currentPage * formsPerPage;
  const indexOfFirstForm = indexOfLastForm - formsPerPage;
  const currentForms = forms.slice(indexOfFirstForm, indexOfLastForm);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Generate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(forms.length / formsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Container>
      <h2 className="text-center my-4">Manage Forms</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Created At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentForms.map((form, index) => (
            <tr key={form.id}>
              <td>{index + 1}</td>
              <td>{form.title}</td>
              <td>{form.description}</td>
              <td>{new Date(form.createdAt).toLocaleDateString()}</td>
              <td>
              <Link to={`/form/${form.id}`} className="me-2">
                <Button variant="info">View</Button>
              </Link>
                {/* <Button variant="info" href={`/form/${form.id}`} className="me-2">View</Button> */}
                <Button variant="danger">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <nav>
        <ul className="pagination justify-content-center">
          {pageNumbers.map(number => (
            <li key={number} className="page-item">
              <a onClick={() => paginate(number)} href="#" className="page-link">
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  );
};

export default AdminFormList;
