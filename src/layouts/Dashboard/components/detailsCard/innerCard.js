import React from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//
import "./innerCard.css";

export default function innerCard({
  borderColorClass,
  itemIconList,
  customerOrderType,
  orderNumber,
}) {
  return (
    <Card
      style={{
        borderRadius: "15px",
        marginTop: "10px",
        borderLeftWidth: "5px",
      }}
      border={borderColorClass}
    >
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div>
            <div className="inner-card-title">{customerOrderType}</div>
            <div className="inner-card-img mt-2 d-flex ">
              {itemIconList.map((item, i) => {
                return (
                  <div key={i} className="inner-card-img-bg">
                    <FontAwesomeIcon icon={item} className="m-0 p-0" />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="inner-card-orderno">{orderNumber}</div>
        </div>
      </Card.Body>
    </Card>
  );
}
