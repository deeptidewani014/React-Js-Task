import React from "react";
import { Container, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCirclePlus,
  faTag,
  faUserLarge,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";

// css
import "./header.css";

export default function Header() {
  const dispatch = useDispatch();
  return (
    <Container fluid className=" py-2 px-0">
      <div className="d-flex justify-content-between align-items-center">
        <FontAwesomeIcon
          icon={faBars}
          color={"white"}
          style={{ cursor: "pointer" }}
          onClick={() => dispatch({ type: "toggleSidePanel" })}
          className="left-menu-icon"
        ></FontAwesomeIcon>
        <div></div>

        <div
          className="d-flex d-row justify-content-center align-items-center"
          style={{ marginRight: "20px" }}
        >
          <FontAwesomeIcon
            icon={faCirclePlus}
            color={"white"}
          ></FontAwesomeIcon>
          <FontAwesomeIcon icon={faTag} color={"white"} />
          <FontAwesomeIcon icon={faUserLarge} color={"white"} />

          <Form.Select
            size="sm"
            style={{ marginLeft: 12, color: "var(--theme-primary-color)" }}
          >
            <option>English</option>
            <option>Hindi</option>
            <option>Other</option>
          </Form.Select>

          {/*  */}
          <FontAwesomeIcon
            icon={faBars}
            color={"white"}
            style={{ cursor: "pointer" }}
            onClick={() => dispatch({ type: "toggleSidePanel" })}
            className="right-menu-icon"
          ></FontAwesomeIcon>
        </div>
      </div>
    </Container>
  );
}
