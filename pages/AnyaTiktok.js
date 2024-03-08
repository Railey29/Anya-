import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
import styles from "../styles/styles.module.css";

function AnyaTiktok() {
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

  const vidStyle = {
    height: "10%",
    width: "70%",
    maxWidth: "300px", // Adjust the maximum width for smaller screens
    marginBottom: "20px",
  };

  return (
    <>
      <div className="full-width-container" style={pageStyle}>
        <video
          width="640"
          height="360"
          controls
          style={vidStyle}
          className="animate__animated animate__bounceInRight"
        >
          <source src="/AnyaVid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p
          style={ptags}
          className="animate__animated animate__bounceInUp text-wrap"
        >
          This video by Anya is one of my favorite videos on her TikTok because
          she is so cute, even though she looks up in the middle of the video
          and towards the end of the video, but she is still so cute in this
          video.
        </p>
        <div className="animate__animated animate__bounceInUp" style={buttons}>
          <button className={styles.btn}>
            <a href="/AnyaMainComponents">
              <span>END</span>
            </a>
          </button>
        </div>
      </div>
    </>
  );
}

export default AnyaTiktok;
