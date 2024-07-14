import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box, List, ListItem, Checkbox, Radio, FormControlLabel, FormGroup, RadioGroup, Button, Card, CardContent, TextField, CircularProgress } from '@mui/material';
import { AuthContext } from '../context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from '../layouts/NavBar';
import Footer from '../layouts/Footer';
import './FormDetails.css';  // Custom CSS for this component

const FormDetails = () => {
  const { formId } = useParams();
  const [form, setForm] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [error, setError] = useState(null);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetchFormDetails();
  }, [formId]);

  const fetchFormDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:8086/api/forms/${formId}`);
      setForm(response.data);
    } catch (error) {
      setError('Failed to fetch form details');
    }
  };

  const handleOptionChange = (questionId, option, isMultiple) => {
    setSelectedOptions(prevState => {
      if (isMultiple) {
        const currentSelections = prevState[questionId] || [];
        if (currentSelections.includes(option)) {
          return { ...prevState, [questionId]: currentSelections.filter(opt => opt !== option) };
        } else {
          return { ...prevState, [questionId]: [...currentSelections, option] };
        }
      } else {
        return { ...prevState, [questionId]: [option] };
      }
    });
  };

  const handleTextChange = (questionId, value) => {
    setSelectedOptions(prevState => ({
      ...prevState,
      [questionId]: [value]
    }));
  };

  const handleSubmit = async () => {
    if (!user || !user.id) {
      console.error('User not logged in or user ID missing');
      return;
    }

    const response = {
      user: { id: user.id },
      form: { id: formId },
      entries: Object.keys(selectedOptions).map(questionId => ({
        questionId: parseInt(questionId),
        answers: selectedOptions[questionId],
      })),
    };

    try {
      await axios.post('http://localhost:8086/api/responses', response, { params: { userId: user.id, formId: formId } });
      toast.success('Response submitted successfully!');
      setSelectedOptions({});
      fetchFormDetails();
    } catch (error) {
      console.error('Failed to submit response', error);
      toast.error('Failed to submit response');
    }
  };

  if (error) {
    return (
      <Container>
        <Typography color="error">{error}</Typography>
      </Container>
    );
  }

  if (!form) {
    return (
      <Container>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <>
      <NavBar />
      <Container maxWidth="md">
        <Box mt={4} mb={4}>
          <Typography variant="h4" gutterBottom>{form.title}</Typography>
          <Typography variant="subtitle1" gutterBottom>{form.description}</Typography>
          <Card variant="outlined" sx={{ mb: 4 }}>
            <CardContent>
              <List>
                {form.questions.map((question, index) => (
                  <ListItem key={question.id} alignItems="flex-start">
                    <Box mt={2} width="100%">
                      <Typography variant="h6">{`${index + 1}. ${question.text}`}</Typography>
                      {question.type === 'TEXT' && (
                        <TextField
                          fullWidth
                          margin="normal"
                          variant="outlined"
                          placeholder="Enter your answer"
                          value={selectedOptions[question.id]?.[0] || ''}
                          onChange={(e) => handleTextChange(question.id, e.target.value)}
                        />
                      )}
                      {question.type === 'MULTIPLE_CHOICE' && (
                        <FormGroup>
                          {question.options.map((option, optionIndex) => (
                            <FormControlLabel
                              key={optionIndex}
                              control={
                                <Checkbox
                                  checked={selectedOptions[question.id]?.includes(option) || false}
                                  onChange={() => handleOptionChange(question.id, option, true)}
                                />
                              }
                              label={option}
                            />
                          ))}
                        </FormGroup>
                      )}
                      {question.type === 'CHECKBOX' && (
                        <RadioGroup
                          value={selectedOptions[question.id]?.[0] || ''}
                          onChange={(e) => handleOptionChange(question.id, e.target.value, false)}
                        >
                          {question.options.map((option, optionIndex) => (
                            <FormControlLabel
                              key={optionIndex}
                              control={<Radio />}
                              label={option}
                              value={option}
                            />
                          ))}
                        </RadioGroup>
                      )}
                    </Box>
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
          <Box textAlign="center">
            <Button variant="contained" color="primary" onClick={handleSubmit}>Submit Response</Button>
          </Box>
        </Box>
      </Container>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default FormDetails;
