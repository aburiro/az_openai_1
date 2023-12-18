import "./Desktop2.css";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Desktop2 = () => {
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
    <div className="desktop-2">
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

      <div className="frame6">
        <div className="frame7">
          <div className="az-openai-can2">
            AZ OpenAI can make mistakes. Consider checking important
            information.
          </div>
        </div>
        <div className="frame8">
          <div className="frame9">
            <div className="user-1-parent">
              <img className="user-1-icon" alt="" src="/user-1@2x.png" />
              <div className="frame10">
                <div className="user-hi">
                  <p className="user">
                    <b>User</b>
                  </p>
                  <p className="user">
                    <b>&nbsp;</b>
                  </p>
                  <p className="user">Hi</p>
                  <p className="user">
                    <b>&nbsp;</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="frame11">
            <div className="frame12">
              <div className="message-az-openai">
                <input
                  type="text"
                  placeholder="Message AZ OpenAI ....."
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                />
              </div>
              <div className="message-az-openai">
                <input
                  type="text"
                  placeholder="Message AZ OpenAI ....."
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                />
              </div>
              <div className="message-az-openai">
                <input
                  type="text"
                  placeholder="Message AZ OpenAI ....."
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                />
              </div>
              <div className="message-az-openai">
                <input
                  type="text"
                  placeholder="Message AZ OpenAI ....."
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                />
              </div>
              <div className="message-az-openai">
                <input
                  type="text"
                  placeholder="Message AZ OpenAI ....."
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                />
              </div>
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

          <div className="frame13">
            <div className="frame14">
              <div className="black-and-white-globe-y2k-stre-group">
                <img
                  className="black-and-white-globe-y2k-stre3"
                  alt=""
                  src="/black-and-white-globe-y2k-streetwear-logo-2@2x.png"
                />

                <div className="az-openai-hello-container">
                  <p className="user">
                    <b>AZ OpenAI</b>
                  </p>
                  <p className="user">
                    <b>&nbsp;</b>
                  </p>
                  <p className="user">Hello! How can I assist you today?</p>
                  <p className="user">
                    <b>&nbsp;</b>
                  </p>
                </div>
              </div>
              <img
                className="down-arrow-icon-1"
                alt=""
                src="/downarrowicon-1@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop2;
