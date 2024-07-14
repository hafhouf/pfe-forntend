import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { Container, Button, Form as BootstrapForm, Row, Col } from 'react-bootstrap';
import { AuthContext } from '../context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminAddForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [questions, setQuestions] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    console.log('User context:', user);
  }, [user]);

  const addQuestion = () => {
    setQuestions([...questions, { text: '', type: 'TEXT', options: [] }]);
  };

  const handleQuestionChange = (index, field, value) => {
    const newQuestions = [...questions];
    newQuestions[index][field] = value;
    setQuestions(newQuestions);
  };

  const handleAddOption = (index) => {
    const newQuestions = [...questions];
    newQuestions[index].options.push('');
    setQuestions(newQuestions);
  };

  const handleOptionChange = (questionIndex, optionIndex, value) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].options[optionIndex] = value;
    setQuestions(newQuestions);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user || !user.id) {
      console.error('User not logged in or user ID missing');
      return;
    }
    const form = { title, description, questions };
    try {
      await axios.post(`http://localhost:8086/api/forms/${user.id}`, form);
      toast.success('Form created successfully');
      // Clear the form fields after successful submission
      setTitle('');
      setDescription('');
      setQuestions([]);
    } catch (error) {
      console.error('Failed to create form', error);
      toast.error('Failed to create form');
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="py-5">
      <ToastContainer />
      <h2 className="text-center mb-4">Create Form</h2>
      <BootstrapForm onSubmit={handleSubmit}>
        <BootstrapForm.Group controlId="formTitle" className="mb-3">
          <BootstrapForm.Label>Title</BootstrapForm.Label>
          <BootstrapForm.Control
            type="text"
            placeholder="Enter form title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </BootstrapForm.Group>
        <BootstrapForm.Group controlId="formDescription" className="mb-3">
          <BootstrapForm.Label>Description</BootstrapForm.Label>
          <BootstrapForm.Control
            as="textarea"
            rows={3}
            placeholder="Enter form description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </BootstrapForm.Group>
        {questions.map((question, index) => (
          <div key={index} className="mb-4">
            <BootstrapForm.Group controlId={`questionText${index}`} className="mb-2">
              <BootstrapForm.Label>Question Text</BootstrapForm.Label>
              <BootstrapForm.Control
                type="text"
                placeholder="Enter question text"
                value={question.text}
                onChange={(e) => handleQuestionChange(index, 'text', e.target.value)}
                required
              />
            </BootstrapForm.Group>
            <BootstrapForm.Group controlId={`questionType${index}`} className="mb-2">
              <BootstrapForm.Label>Question Type</BootstrapForm.Label>
              <BootstrapForm.Control
                as="select"
                value={question.type}
                onChange={(e) => handleQuestionChange(index, 'type', e.target.value)}
              >
                <option value="TEXT">Text</option>
                <option value="MULTIPLE_CHOICE">Multiple Choice</option>
                <option value="CHECKBOX">Checkbox</option>
              </BootstrapForm.Control>
            </BootstrapForm.Group>
            {question.type !== 'TEXT' && (
              <>
                {question.options.map((option, optionIndex) => (
                  <BootstrapForm.Group key={optionIndex} controlId={`option${index}-${optionIndex}`} className="mb-2">
                    <BootstrapForm.Label>Option {optionIndex + 1}</BootstrapForm.Label>
                    <BootstrapForm.Control
                      type="text"
                      placeholder="Enter option text"
                      value={option}
                      onChange={(e) => handleOptionChange(index, optionIndex, e.target.value)}
                      required
                    />
                  </BootstrapForm.Group>
                ))}
                <Button variant="link" onClick={() => handleAddOption(index)}>
                  Add Option
                </Button>
              </>
            )}
          </div>
        ))}
        <Row className="mb-3">
          <Col>
            <Button variant="secondary" onClick={addQuestion}>
              Add Question
            </Button>
          </Col>
          <Col>
            <Button type="submit" variant="primary" className="float-end">
              Create Form
            </Button>
          </Col>
        </Row>
      </BootstrapForm>
    </Container>
  );
};

export default AdminAddForm;
