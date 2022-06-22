import React, { useState } from "react";
import { Container, Card, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStore,
  faTag,
  faShoppingBasket,
  faList,
  faUser,
  faChartSimple,
  faGear,
  faPowerOff,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";

//
import "./sidepanel.css";

export default function Sidepanel() {
  const [sidepanelItemList, setSidepanelItemList] = useState([
    {
      id: 1,
      title: "Dashboard",
      icon: faStore,
      // color: "#4c9ce8",
      color: "primary",
    },
    {
      id: 2,
      title: "Pos",
      icon: faTag,
      // color: "#D44663",
      color: "danger",
    },
    {
      id: 3,
      title: "Orders",
      icon: faShoppingBasket,
      // color: "#6ED5AA",
      color: "success",
    },
    {
      id: 4,
      title: "order status screen",
      icon: faList,
      // color: "#D4F7EB",
      // color: "#FCDAA0",
      color: "warning",
    },
    {
      id: 5,
      title: "expense",
      icon: faUser,
      // color: "#F9D1D9",
      color: "danger",
    },
    {
      id: 6,
      title: "customers",
      icon: faChartSimple,
      // color: "#C95BB2",
      color: "danger",
    },
    {
      id: 7,
      title: "services",
      icon: faGear,
      // color: "#FCC1F8",
      color: "primary",
    },
    {
      id: 8,
      title: "reports",
      icon: faPowerOff,
      // color: "#1480DF",
      color: "warning",
    },
    {
      id: 9,
      title: "tools",
      icon: faUser,
      // color: "#FCDAA0",
      color: "warning",
    },
    {
      id: 10,
      title: "Logout",
      icon: faList,
      // color: "#F9FDFD",
      color: "success",
    },
  ]);
  //
  const sidepanel = useSelector((state) => state.sidepanel);

  const dispatch = useDispatch();
  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center m-0 p-0 sidepanel-container"
    >
      <Card
        style={{ borderRadius: "15px" }}
        className="sidepanel-container-card"
      >
        <Card.Body className="d-flex  align-items-center flex-column m-0 p-0">
          <div
            className="mt-3 d-flex align-items-center justify-content-between"
            style={{ width: "90%" }}
          >
            <span className="extra-space-span"></span>
            Logo
            <span className="custom-close-btn">
              <FontAwesomeIcon
                icon={faClose}
                onClick={() => dispatch({ type: "toggleSidePanel" })}
              />
            </span>
          </div>

          <div
            className="d-flex align-items-center flex-column mt-3"
            style={{ width: "100%" }}
          >
            {sidepanelItemList.map((item, i) => {
              const activeItem = 1;
              const isActive = activeItem == item.id;
              const color = `text-${isActive ? "light" : item.color}`;
              const isPanelOpen = sidepanel.isOpen;

              return (
                <div
                  className={`sidepanel-item ${
                    isActive ? "sidepanel-item-active" : ""
                  }`}
                >
                  <FontAwesomeIcon
                    icon={item.icon}
                    key={i}
                    className={`m-0 p-0 ${color}`}
                  />
                  <span
                    className={`m-2 sidepanel-item-title text-${
                      isActive ? "light" : "secondary"
                    }`}
                  >
                    {isPanelOpen ? item.title : ""}
                  </span>
                </div>
              );
            })}
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}
