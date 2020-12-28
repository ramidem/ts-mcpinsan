import React from "react";
import { Col, Container } from "react-bootstrap";
import Pricing from "../components/workspaces/Pricing";
import MeetingRooms from "../components/workspaces/MeetingRooms";
import WorkspacesCarousel from "../components/workspaces/WorkspacesCarousel";
import AmenitiesDetails from "../components/workspaces/AmenitiesDetails";

import "./Workspaces.scss";

const Workspaces: React.FC = () => {
  return (
    <>
      <Container className="content mt-md-0">
        <Col md={4} className="mx-auto mb-5 mt-3">
          <h2 className="text-center">
            {" "}
            Personal <span className="italic">&</span> Meeting Rooms Pricing
          </h2>
        </Col>
      </Container>

      <Pricing />
      <MeetingRooms />
      <WorkspacesCarousel />
      <AmenitiesDetails />
    </>
  );
};

export default Workspaces;
