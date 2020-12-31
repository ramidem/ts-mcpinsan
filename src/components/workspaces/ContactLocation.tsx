import React from "react";
import { Col } from "react-bootstrap";
import { CONTACT } from "../../assets/data";

import "./ContactLocation.scss";

const ContactLocation: React.FC = () => {
  const contactDetails = CONTACT.map((detail) => {
    return (
      <li className="list-group-item" key={detail.name}>
        <i className={`fas ${detail.icon}`}></i> {detail.info}
      </li>
    );
  });

  return (
    <Col sm={10} md={6} className="mx-auto mx-md-0 ml-md-auto">
      <h2 className="text-center mb-5">Come visit us</h2>
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            title="McPinsan Map"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=jolo%2C%20sulu&t=&z=15&ie=UTF8&iwloc=&output=embed"
          ></iframe>
        </div>
      </div>

      <ul className="list-group list-group-flush contact-details">
        {contactDetails}
      </ul>
    </Col>
  );
};

export default ContactLocation;
