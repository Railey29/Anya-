import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/styles.module.css";

function AnyaMainComponents() {
  const pageStyle = {
    backgroundColor: "#131d38",
    minHeight: "100vh",
    padding: "20px",
  };

  const headerStyle = {
    marginTop: "-30%",
  };

  const pStyle = {
    color: "white",
    marginLeft: "-40vw", // Adjusted from -40vh to -40vw
    marginTop: "-2vh", // Adjusted from -4vh to -2vh
    fontSize: "2.5vw", // Example: Adjust font size using vw unit
  };

  return (
    <div
      className="full-width-container d-flex align-items-center justify-content-center"
      style={pageStyle}
    >
      <div className="text-center">
        <h1 style={headerStyle} className="text-wrap text-warning">
          Welcome to this page
        </h1>
      </div>
      <div>
        <div className="text-center">
          <p style={pStyle} className="text-wrap">
            Please Click next to view the next page
          </p>
        </div>
        <button className={styles.btn}>
          <a href="/AnyaYes">
            <span>Next</span>
          </a>
        </button>
      </div>
    </div>
  );
}

export default AnyaMainComponents;
