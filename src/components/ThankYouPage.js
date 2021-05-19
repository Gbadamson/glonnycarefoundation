import React from "react";
import Header from "../includes/Header";
import spad from "../includes/images/cert.svg";

const ThankYouPage = () => {
  return (
    <div>
      <Header />
      <center>
        <div className="hint">Thank you very much for donating</div>
        <br />
        <br />
        <br />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            style={{ height: "250px", width: "400px", backgroundSize: "cover" }}
            src={spad}
            height="100%"
            width="100%"
          />
        </div>
      </center>
    </div>
  );
};

export default ThankYouPage;
