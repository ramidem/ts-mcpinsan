import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import "./Menu.scss";

const Menu: React.FC = () => {
  return (
    <>
      <Container className="content mt-md-0">
        <Col md={4} className="mx-auto mb-5 mt-3">
          <h2 className="text-center">Menu</h2>
        </Col>
        <Row>
          <Col xs={10} md={6} className="mx-auto menu-tables">
            <h3>Coffee</h3>
            <table className="table table-borderless table-menu">
              <thead>
                <tr>
                  <th colSpan={2}>Classics</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    Americano
                    <span>Espresso and hot water</span>
                  </th>
                  <td>
                    <span>&#8369;</span> 110
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    Espresso
                    <span>Strong concentrated coffe with a rich flavor</span>
                  </th>
                  <td>
                    <span>&#8369;</span> 100
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    Red Eye
                    <span>Espresso poured into freshly brewed coffee</span>
                  </th>
                  <td>
                    <span>&#8369;</span> 115
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    Milk
                    <span>Special milk beverage made from grass-fess cows</span>
                  </th>
                  <td>
                    <span>&#8369;</span> 110
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    Caramel Macchiato
                    <span>Espresso, steamed milk and caramel</span>
                  </th>
                  <td>
                    <span>&#8369;</span> 130
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    Latte
                    <span>Espresso with steamed milk</span>
                  </th>
                  <td>
                    <span>&#8369;</span> 120
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    Cappuccino
                    <span>
                      Espresso and equal proportions of steamed milk and foam
                    </span>
                  </th>
                  <td>
                    <span>&#8369;</span> 120
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    White Choco Mocha
                    <span>
                      Espresso, steamed milk, white chocolate and whip
                    </span>
                  </th>
                  <td>
                    <span>&#8369;</span> 135
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    Mocha
                    <span>Espresso with steamed milk, chocolate whip</span>
                  </th>
                  <td>
                    <span>&#8369;</span> 130
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    Cold Brew
                    <span>Espresso with steamed milk, chocolate whip</span>
                  </th>
                  <td>
                    <span>&#8369;</span> 130
                  </td>
                </tr>
              </tbody>
            </table>
          </Col>

          <div className="col-10 col-md-6 mx-auto menu-tables mb-5">
            <h3 className="mt-5 mt-md-0">
              Original <span className="italic">&</span> Healthy
            </h3>
            <table className="table table-borderless table-menu">
              <thead>
                <tr>
                  <th colSpan={2}>Signature Drinks</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    Native Chocolate
                    <span>Homegrown tablea from Jolo, Sulu</span>
                  </th>
                  <td>
                    <span>&#8369;</span> 130
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    Match Green Tea
                    <span>
                      Finely ground powder of specially grown green tea leaves
                    </span>
                  </th>
                  <td>
                    <span>&#8369;</span> 130
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    Cha De Leche
                    <span>Milk tea with Han Tien jelly</span>
                  </th>
                  <td>
                    <span>&#8369;</span> 130
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="table table-borderless table-menu">
              <thead>
                <tr>
                  <th colSpan={2}>Healthy Drinks</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    Tea
                    <span>
                      Finest teas for every taste: Mint Tea, Early Grey, English
                      Breakfast, Green Tea
                    </span>
                  </th>
                  <td>
                    <span>&#8369;</span> 110
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    Calamansi Juice
                    <span>
                      Made from pure tropical calamansi from the farms of Jolo
                    </span>
                  </th>
                  <td>
                    <span>&#8369;</span> 120
                  </td>
                </tr>
              </tbody>
            </table>

            <h3 className="mt-5">
              Frappes <span className="italic">&</span> Shakes
            </h3>
            <table className="table table-borderless table-menu frappes-shakes">
              <thead>
                <tr>
                  <th colSpan={2}>Cold Blended</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Cookies n' Cream</th>
                  <td>
                    <span>&#8369;</span> 165
                  </td>
                </tr>
                <tr>
                  <th scope="row">Vanilla</th>
                  <td>
                    <span>&#8369;</span> 155
                  </td>
                </tr>
                <tr>
                  <th scope="row">Matcha</th>
                  <td>
                    <span>&#8369;</span> 165
                  </td>
                </tr>
                <tr>
                  <th scope="row">Mocha</th>
                  <td>
                    <span>&#8369;</span> 165
                  </td>
                </tr>
                <tr>
                  <th scope="row">Caramel</th>
                  <td>
                    <span>&#8369;</span> 165
                  </td>
                </tr>
                <tr>
                  <th scope="row">Mango</th>
                  <td>
                    <span>&#8369;</span> 130
                  </td>
                </tr>
                <tr>
                  <th scope="row">Strawberry</th>
                  <td>
                    <span>&#8369;</span> 130
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Menu;
