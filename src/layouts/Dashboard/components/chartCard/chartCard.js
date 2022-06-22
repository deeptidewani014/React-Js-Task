import React from "react";
import { Card, Col, Form, Row } from "react-bootstrap";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function chartCard() {
  const data = {
    datasets: [
      {
        label: "# of Votes",
        data: [20, 3, 10, 3, 2],
        backgroundColor: [
          "#0083ff",
          "#f4365c",
          "#8292ab",
          "#fbac3e",
          "#2dce8a",
        ],
        borderColor: ["#0083ff", "#f4365c", "#8292ab", "#fbac3e", "#2dce8a"],
        borderWidth: 1,
      },
    ],
    labels: [
      "Pending",
      "Processing",
      "Ready to Delivery",
      "Delivered",
      "Unknown",
    ],
  };
  return (
    <Card style={{ borderRadius: "15px" }}>
      <Card.Body>
        Overview
        <br />
        <Doughnut
          data={{
            datasets: [
              {
                label: "# of Votes",
                data: [20, 3, 10, 3, 2],
                backgroundColor: [
                  "#0083ff",
                  "#f4365c",
                  "#8292ab",
                  "#fbac3e",
                  "#2dce8a",
                ],
                borderColor: [
                  "#0083ff",
                  "#f4365c",
                  "#8292ab",
                  "#fbac3e",
                  "#2dce8a",
                ],
                borderWidth: 1,
              },
            ],
            labels: [
              "Pending",
              "Processing",
              "Ready to Delivery",
              "Delivered",
              "Unknown",
            ],
          }}
          options={{
            plugins: {
              legend: {
                position: "bottom",
              },
            },
          }}
        />
      </Card.Body>
    </Card>
  );
}
