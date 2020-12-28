import React from "react";
import { Accordion, Card, Col, Media, Row } from "react-bootstrap";
import { AMENITIES } from "../../assets/data";
import { arr2D, useInnerWidth } from "../../utils";

import "./AmenitiesDetails.scss";

const amenitiesAccord = AMENITIES.map((amenity: Amenity, key: number) => {
  return (
    <Card className="card" key={key}>
      <Accordion.Toggle
        as={Card.Header}
        eventKey={key.toString()}
        className="card-header"
      >
        <div className="accordion-toggler">
          <div className="media">
            <img
              src={amenity.icon.big}
              className="align-self-start mr-4"
              alt={amenity.name}
            />
            <h4>{amenity.name}</h4>
          </div>
        </div>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={key.toString()}>
        <Card.Body className="card-body">{amenity.description}</Card.Body>
      </Accordion.Collapse>
    </Card>
  );
});

const amenitiesGrid = arr2D(AMENITIES).map((arr, key) => {
  return (
    <Row key={key}>
      {arr.map((amenity: any, item: number) => {
        return (
          <Col sm={10} md={6} className="mx-auto mb-3" key={item}>
            <Media className="media">
              <img
                alt={amenity.name}
                className="align-self-start mr-3"
                src={amenity.icon.big}
              />
              <Media.Body className="media-body">
                <h4 className="mt-0">{amenity.name}</h4>
                <p>{amenity.description}</p>
              </Media.Body>
            </Media>
          </Col>
        );
      })}
    </Row>
  );
});

const AmenitiesDetails: React.FC = () => {
  let amenitiesList;
  const innerWidth = useInnerWidth();

  if (innerWidth > 767) {
    amenitiesList = amenitiesGrid;
  }

  if (innerWidth <= 767) {
    amenitiesList = (
      <Accordion id="amenitiesAccordion" className="accordion">
        {amenitiesAccord}
      </Accordion>
    );
  }

  return (
    <>
      <div className="content container pb-5 mt-5">
        <div className="col-12 mb-5">
          <h2 id="amenities" className="text-center">
            Amenities
          </h2>
          <h3 className="small d-md-none text-center italic">
            Tap on each amenity for more details.
          </h3>
        </div>

        <div className={`${innerWidth > 767 ? "row d-none d-md-block" : ""}`}>
          {amenitiesList}
        </div>
      </div>
    </>
  );
};

export default AmenitiesDetails;
