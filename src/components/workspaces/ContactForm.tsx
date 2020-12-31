import React from "react";
import { useEffect, useState } from "react";
import { Col, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

import "./ContactForm.scss";

type Message = {
  name: string;
  email: string;
  message: string;
};

const ContactForm: React.FC = () => {
  const [theMessage, setTheMessage] = useState<Message>({
    message: "",
    email: "",
    name: "",
  });
  const { register, handleSubmit } = useForm<Message>();
  const [isDisabled, setIsDisabled] = useState(true);

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  const onChange = handleSubmit((data) => {
    setTheMessage(data);
  });

  useEffect(() => {
    if (
      theMessage.email !== "" &&
      theMessage.message !== "" &&
      theMessage.name !== ""
    ) {
      setIsDisabled(false);
    }
  }, [theMessage]);

  return (
    <Col sm={10} md={5} className="mt-5 mt-md-0 mx-auto mx-md-0 mb-5">
      <h2 className="text-center mb-3">Get in touch</h2>
      <Form onSubmit={onSubmit}>
        <Form.Group className="form-group">
          <Form.Label htmlFor="name">Name</Form.Label>
          <input
            className="form-control form-control-lg"
            id="name"
            name="name"
            type="text"
            ref={register}
            onChange={onChange}
          />
        </Form.Group>

        <Form.Group className="form-group">
          <Form.Label htmlFor="email">Email</Form.Label>
          <input
            className="form-control form-control-lg"
            id="email"
            name="email"
            type="email"
            ref={register}
            onChange={onChange}
          />
          <small className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </Form.Group>

        <Form.Group className="form-group">
          <Form.Label htmlFor="messageType">How can we help?</Form.Label>
          <Form.Control
            as="select"
            size="lg"
            id="messageType"
            name="messageType"
            className="form-control"
            ref={register}
            onChange={onChange}
          >
            <option key="hello" value="Just saying hello">
              Just saying hello
            </option>
            <option key="coffee" value="Inquiring about your coffee">
              Inquiring about your coffee
            </option>
            <option key="workspace" value="More info on workspaces">
              More info on workspaces
            </option>
          </Form.Control>
        </Form.Group>

        <Form.Group className="form-group">
          <Form.Label htmlFor="message">Message</Form.Label>
          <Form.Control
            as="textarea"
            className="form-control"
            id="message"
            name="message"
            rows={3}
            ref={register}
            onChange={onChange}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="form-group form-check pt-2 pb-4">
          <Form.Check
            type="checkbox"
            className="form-check-input"
            id="subcription"
            name="subscription"
            ref={register}
          />
          <Form.Label className="form-check-label" htmlFor="subcription">
            Never miss our promotions. Subscribe to mailing list.
          </Form.Label>
        </Form.Group>
        <button
          type="submit"
          className="btn btn-dark btn-block btn-lg"
          disabled={isDisabled}
        >
          Send Message
        </button>
      </Form>
    </Col>
  );
};

export default ContactForm;
