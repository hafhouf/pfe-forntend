import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../layouts/NavBar';
import Footer from '../layouts/Footer';

const FormList = () => {
  const [forms, setForms] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const formsPerPage = 3;

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
    <>
    <NavBar/>
    
    <br></br>
    <br></br>
    <br></br>

      <div className="container-fluid blog py-5">
        <div className="container py-5">
          <div className="section-title mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp' }}>
            <div className="sub-style">
              <h4 className="sub-title px-3 mb-0">Forms</h4>
            </div>
            <h1 className="display-3 mb-4">Browse and Respond to Forms</h1>
            <p className="mb-0">Here you can find a list of forms created by researchers. Click on a form to view and respond to it.</p>
          </div>
          <div className="row g-4 justify-content-center">
            {currentForms.map((form, index) => (
              <div key={form.id} className={`col-md-6 col-lg-6 col-xl-4 wow fadeInUp`} data-wow-delay={`${0.1 * (index % 3)}s`} style={{ visibility: 'visible', animationDelay: `${0.1 * (index % 3)}s`, animationName: 'fadeInUp' }}>
                <div className="blog-item rounded">
                  <div className="blog-img">
                    <img src={`https://via.placeholder.com/400x300?text=${form.title}`} className="img-fluid w-100" alt="Form" />
                  </div>
                  <div className="blog-content p-4">
                    <div className="d-flex justify-content-between mb-4">
                      <p className="mb-0 text-muted"><i className="fa fa-calendar-alt text-primary"></i> {new Date(form.createdAt).toLocaleDateString()}</p>
                      <a href="#" className="text-muted"><span className="fa fa-comments text-primary"></span> {form.commentsCount || 0} Comments</a>
                    </div>
                    <a href={`/form/${form.id}`} className="h4">{form.title}</a>
                    <p className="my-4">{form.description}</p>
                    <a href={`/form/${form.id}`} className="btn btn-primary rounded-pill text-white py-2 px-4 mb-1">View</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>

      <Footer/>
    </>
  );
};

export default FormList;
