import React from "react";
import { Container, Row } from "react-bootstrap";
import ContactForm from "../components/workspaces/ContactForm";
import ContactLocation from "../components/workspaces/ContactLocation";

const Contact: React.FC = () => {
  return (
    <>
      <Container className="content pb-5 mt-5">
        <Row className="mb-5">
          <ContactForm />
          <ContactLocation />
        </Row>
      </Container>
    </>
  );
};

export default Contact;
