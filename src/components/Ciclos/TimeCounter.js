import React, { useState, useEffect } from "react";
import Countdown from "react-countdown";
export default function TimeCounter({ hr, message }) {
  const [dateStart, setDateStart] = useState(
    localStorage.getItem("countdownTime") || Date.now()
  );
  useEffect(() => {
    console.log(dateStart);
    localStorage.setItem("countdownTime", dateStart);
  }, [dateStart]);
  // console.log("date => " + Date.now());
  const Completionist = () => <span>{message}</span>;

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <div className="container">
          <div className="row">
            <div
              style={{
                width: "100%",
                margin: "0",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-evenly",
              }}
            >
              <span style={{ marginTop: "30px" }}>
                <span
                  style={{
                    color: "black",
                    padding: "5px",
                    borderColor: "#FF4900",
                    borderStyle: "solid",
                    borderRadius: ".5rem",
                  }}
                >
                  {days}
                </span>
                <span style={{ color: "#FF4900", fontSize: "2.5rem" }}>
                  {" "}
                  Days{" "}
                </span>
              </span>
              <span style={{ marginTop: "30px" }}>
                <span
                  style={{
                    color: "black",
                    padding: "5px",
                    borderColor: "#FF4900",
                    borderStyle: "solid",
                    borderRadius: ".5rem",
                  }}
                >
                  {hours}
                </span>
                <span style={{ color: "#FF4900", fontSize: "2.5rem" }}>
                  {" "}
                  Hr{" "}
                </span>
              </span>
              <span style={{ marginTop: "30px" }}>
                {" "}
                <span
                  style={{
                    color: "black",
                    padding: "5px",
                    borderColor: "#FF4900",
                    borderStyle: "solid",
                    borderRadius: ".5rem",
                  }}
                >
                  {minutes}
                </span>
                <span style={{ color: "#FF4900", fontSize: "2.5rem" }}>
                  {" "}
                  min{" "}
                </span>
              </span>
              <span style={{ marginTop: "30px" }}>
                {" "}
                <span
                  style={{
                    color: "black",
                    padding: "5px",

                    borderColor: "#FF4900",
                    borderStyle: "solid",
                    borderRadius: ".5rem",
                  }}
                >
                  {seconds}
                </span>
                <span style={{ color: "#FF4900", fontSize: "2.5rem" }}>
                  {" "}
                  seg{" "}
                </span>
              </span>
            </div>
          </div>
        </div>
      );
    }
  };

  // console.log(dateStart);
  return (
    <Countdown date={parseInt(dateStart) + hr * 3600000} renderer={renderer} />
  );
}
