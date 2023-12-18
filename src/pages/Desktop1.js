import "./Desktop1.css";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Desktop1 = () => {
  const [userInput, setUserInput] = useState("");

  const handleSendButtonClick = () => {
    // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint you're working with
    const apiEndpoint = "YOUR_API_ENDPOINT";

    // Simulating an API call with an authorization token
    fetch(apiEndpoint, {
      method: "GET", // Use the appropriate HTTP method
      headers: {
        Authorization: `Bearer ${"ACA-OxPyym4msS03khw7zZ3gof3ZyVpkhfuDbBjp42XmW2higl-RL4_sTWCbo5_Ul8hyrMSxST4"}`,
        // Add other headers if required
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("API response:", data);
        // You can handle the API response here
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle errors here
      });
  };

  return (
    <div className="desktop-1">
      <div className="frame">
        <div className="black-and-white-globe-y2k-stre-wrapper">
          <img
            className="black-and-white-globe-y2k-stre"
            alt=""
            src="/black-and-white-globe-y2k-streetwear-logo-21@2x.png"
          />
        </div>
      </div>
      <div className="transforming-ideas-into">
        Transforming Ideas into Intelligent Text, Pioneering AI Excellence.
      </div>

      {/* ///header section */}

      <div
        className="col-lg-2 col-md-2 col-sm-1"
        style={{
          background: "var(--color-darkslategray-200)",
          height: "130px",
          width: "1550px",
        }}
      >
        <Navbar
          expand="lg"
          className="bg-var(--color-darkslategray-200)"
          style={{ minHeight: "130px" }}
        >
          <Container fluid>
            <div className="d-flex align-items-center justify-content-between w-100">
              <Navbar.Brand href="#">
                <div className="col-lg-2 col-md-2 col-sm-1">
                  <img
                    className="black-and-white-globe-y2k-stre1"
                    alt=""
                    src="/black-and-white-globe-y2k-streetwear-logo-1@2x.png"
                  />
                  <img
                    className="download-1-1"
                    alt=""
                    src="/download-1-1@2x.png"
                  />
                </div>
              </Navbar.Brand>
            </div>
          </Container>
        </Navbar>
      </div>

      {/* End ///header section  */}

      <div className="frame2">
        <div className="frame3">
          <div className="welcome-to-az">Welcome To AZ OpenAI</div>
          <div className="welcome-to-az">Welcome To AZ OpenAI</div>
        </div>
      </div>

      {/* /// input section */}
      <div className="frame4">
        <div className="frame5">
          <div className="frame-item" />
          <div className="frame-item" />
          <div className="frame-item" />
          <div className="frame-item" />
          <div className="frame-item" />

          <div className="message-az-openai">
            <input
              type="text"
              placeholder="Message AZ OpenAI ....."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
          </div>

          <Link
            style={{ textDecoration: "none" }}
            className={"text-white"}
            to={"/desktop-2"}
          >
            {/* //   <button className="btn btn-light">View All Projects</button> */}

            {/* <img className="download-2-1" alt="" src="/download-2-1@2x.png" /> */}
            <img
              className="download-2-2"
              alt=""
              src="/download-2-21@2x.png"
              onClick={handleSendButtonClick}
            />
          </Link>
          
        </div>
      </div>
      {/* /// End input section  */}

      <div className="az-openai-can">
        AZ OpenAI can make mistakes. Consider checking important information.
      </div>
    </div>
  );
};

export default Desktop1;
