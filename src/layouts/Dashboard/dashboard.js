import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  faShoppingBasket,
  faAtom,
  faThumbsUp,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

// import internal components for dashboard
import SidePanel from "./components/sidepanel/sidepanel";
import Header from "../../components/header/header";
import DetailsCard from "./components/detailsCard/detailsCard";
// import external compoents
import BackgroundDiv from "../../components/backgroundDiv/backgroundDiv";
import InformationCard from "./components/informationCard/informationCard";
import Chartcard from "./components/chartCard/chartCard";

// import css
import "./style/dashboard.css";

export default function Dashboard() {
  const sidepanel = useSelector((state) => state.sidepanel);

  return (
    <Container fluid style={{ margin: 0, padding: 0 }}>
      <BackgroundDiv />
      <Row className="m-0 p-0">
        {/*  */}
        <Col
          // lg={sidepanel.isOpen ? 2 : 1}
          md={sidepanel.isOpen ? 2 : 1}
          className={`m-0 p-0 `}
        >
          <span className="custom-sidepanel-column-container">
            <SidePanel />
          </span>

          <span
            className={`${
              sidepanel.isOpen
                ? "custom-sidepanel-column-open"
                : "custom-sidepanel-column-container-responsive"
            }`}
          >
            <SidePanel />
          </span>
        </Col>
        {/*  */}
        <Col
          // lg={sidepanel.isOpen ? 10 : 11}
          md={sidepanel.isOpen ? 10 : 11}
          className="m-0 p-0 mt-1 "
        >
          <Header />
          <Row className="m-0 p-0">
            <Col sm={6} md={6} lg={3} className="mt-3">
              <InformationCard
                cardTitle={"Pending Order"}
                cardValue={202}
                cardLogo={faShoppingBasket}
                cardLogoBackgroundClass={"secondary"}
              />
            </Col>
            <Col sm={6} md={6} lg={3} className="mt-3">
              <InformationCard
                cardTitle={"Processing Order"}
                cardValue={99}
                cardLogo={faAtom}
                cardLogoBackgroundClass={"warning"}
              />
            </Col>
            <Col sm={6} md={6} lg={3} className="mt-3">
              <InformationCard
                cardTitle={"Ready To Delive"}
                cardValue={263}
                cardLogo={faThumbsUp}
                cardLogoBackgroundClass={"success"}
              />
            </Col>
            <Col sm={6} md={6} lg={3} className="mt-3">
              <InformationCard
                cardTitle={"Delivered Order"}
                cardValue={347}
                cardLogo={faCheck}
                cardLogoBackgroundClass={"primary"}
              />
            </Col>
          </Row>

          {/*  */}
          <Row className="m-0 p-0">
            <Col lg={8} className="mt-3">
              <DetailsCard />
            </Col>
            <Col lg={4} className="mt-3">
              <Chartcard />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
