import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { ROOMS } from "../../assets/data";

const MeetingRooms: React.FC = () => {
  const roomPricingTable = ROOMS.map((room) => {
    return (
      <Col sm={10} md={4} className="mx-auto mb-3" key={room.name}>
        <h4>{room.name}</h4>
        <p className="small italic">{room.description}</p>
        <Table striped className="meeting-table">
          <tbody>
            {room.pricing.map((roomPrice) => {
              return (
                <tr key={roomPrice.price}>
                  <th scope="row">
                    <span className="small">&#8369;</span> {roomPrice.price}
                  </th>
                  <td className="small">{roomPrice.hours}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Col>
    );
  });

  return (
    <>
      <Container fluid className="meeting-rooms">
        <Container className="py-5">
          <Col sm={10} md={6} className="mx-auto mx-md-0">
            <h3 className="mb-5">Meeting Rooms</h3>
            <hr />
          </Col>

          <Row>
            {roomPricingTable}

            <Col sm={10} md={6} className="mx-auto mt-5">
              <p className="inclusion small">
                <strong className="italic">Inclusive of the following: </strong>{" "}
                LCD Projector, Whiteboard, Complimentary Drink per person,
                Unlimited Wi-Fi, Ergonomic Seats
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default MeetingRooms;
