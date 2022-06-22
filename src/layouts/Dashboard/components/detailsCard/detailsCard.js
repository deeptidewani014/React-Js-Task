import React, { useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { faShirt, faHatCowboy } from "@fortawesome/free-solid-svg-icons";

//
import Innercard from "./innerCard";

// css
import "./detailsCard.css";

export default function DetailsCard() {
  const [itemList, setItemList] = useState([
    {
      borderColorClass: "warning",
      itemIconList: [faShirt],
      customerOrderType: "98659865",
      orderNumber: "ORD-0947",
    },
    {
      borderColorClass: "danger",
      itemIconList: [faShirt, faShirt],
      customerOrderType: "ARIF",
      orderNumber: "ORD-0947",
    },
    {
      borderColorClass: "secondary",
      itemIconList: [faHatCowboy],
      customerOrderType: "shiyas",
      orderNumber: "ORD-0947",
    },
    {
      borderColorClass: "secondary",
      itemIconList: [faHatCowboy, faHatCowboy],
      customerOrderType: "Walk In Customer",
      orderNumber: "ORD-0947",
    },
    {
      borderColorClass: "primary",
      itemIconList: [faShirt, faShirt, faHatCowboy],
      customerOrderType: "Customer2",
      orderNumber: "ORD-0947",
    },
    {
      borderColorClass: "primary",
      itemIconList: [faHatCowboy, faShirt],
      customerOrderType: "Walk In Customer",
      orderNumber: "ORD-0947",
    },
  ]);
  return (
    <>
      <Card style={{ borderRadius: "15px" }}>
        <Card.Body>
          <div className="d-flex justify-content-between">
            <div>
              <Card.Text>Today's Delivery</Card.Text>
            </div>

            <div className="d-flex " style={{ width: "70%" }}>
              <Form.Control
                type="text"
                placeholder="Search Here"
                style={{ marginRight: "10px" }}
              />
              <Form.Select
                aria-label="Default select example"
                style={{ width: "40%" }}
              >
                <option>All Orders</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </div>
          </div>

          {/*  */}
          <Row className="m-0 p-0 mt-4">
            {itemList.map((item, i) => {
              return (
                <Col sm={6} md={6} key={i}>
                  <Innercard
                    borderColorClass={item.borderColorClass}
                    itemIconList={item.itemIconList}
                    customerOrderType={item.customerOrderType}
                    orderNumber={item.orderNumber}
                  />
                </Col>
              );
            })}
          </Row>
        </Card.Body>
      </Card>
    </>
  );
}
