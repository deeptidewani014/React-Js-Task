import React from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// css
import "./informationCard.css";

export default function informationCard({
  cardTitle,
  cardValue,
  cardLogo,
  cardLogoBackgroundClass,
}) {
  return (
    <>
      <Card style={{ borderRadius: "15px" }}>
        <Card.Body>
          <Card.Text>
            <div className="d-flex justify-content-between align-items-center">
              <div className="">
                <p className="information-card-title">
                  {cardTitle.toUpperCase()}
                </p>
                <p className="information-card-value">{cardValue}</p>
              </div>
              <div className={`logo-container bg-${cardLogoBackgroundClass}`}>
                <FontAwesomeIcon
                  icon={cardLogo}
                  className="m-0 p-0"
                  color="white"
                />
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
