import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
import styles from "../styles/styles.module.css";

function AnyaYes() {
  const pageStyle = {
    backgroundColor: "#131d38",
    minHeight: "100vh",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const anyaPicture = {
    height: "auto",
    width: "70%",
    maxWidth: "300px", // Adjust the maximum width for smaller screens
    marginBottom: "20px",
  };

  const ptags = {
    width: "80%", // Adjust the width for smaller screens
    textAlign: "center",
    color: "#17d4d4",
  };

  const buttons = {
    marginTop: "20px",
    marginLeft: "145px",
  };

  return (
    <>
      <div className="full-width-container" style={pageStyle}>
        <img
          src="/AnyaPicture.jpg"
          alt="AnyaPicture"
          style={anyaPicture}
          className="animate__animated animate__bounceInLeft"
        />
        <p
          style={ptags}
          className="animate__animated animate__bounceInUp text-wrap"
        >
          I would like to introduce Anya, the girl who is very diligent in terms
          of academics and housework. She is very kind and cute, very good at
          SOS game(Our Favorite game) and always goes along with the trip,
          especially when there are only two of us.
        </p>
        <div className="animate__animated animate__bounceInUp" style={buttons}>
          <button className={styles.btn}>
            <a href="/AnyaTiktok">
              <span>Next</span>
            </a>
          </button>
        </div>
      </div>
    </>
  );
}

export default AnyaYes;
