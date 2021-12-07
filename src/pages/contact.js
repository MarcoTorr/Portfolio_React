import React, { useState } from 'react';
import styled, { createGlobalStyle } from "styled-components";
import {Form, Button, FloatingLabel} from 'react-bootstrap';


function ContactForm(props) {
  
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  // First we check to see if "edit" prop exists. If not, we render the normal form
  // If the prop "edit" exists, we know to render the update form instead
  return (
    <section style={{marginTop: '30px',marginBottom: '50px'}}>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="validationCustom01">
          <Form.Label>Name</Form.Label>
          <FloatingLabel
            controlId="floatingInput"
            label="Enter your full name"
            className="mb-3"
          >
          <Form.Control required type="text" placeholder="First and Last Name" />
          </FloatingLabel>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>Email address</Form.Label>
          <Form.Control required type="email" placeholder="name@example.com" />
          <Form.Control.Feedback type="invalid">Please provide a valid email!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control required type="text" as="textarea" rows={3} />
          <Form.Control.Feedback type="invalid">A message is necessary before submission!</Form.Control.Feedback>
        </Form.Group>
        <Button type="submit">Submit</Button>
    </Form>
    </section>
  );
}


export default ContactForm;
