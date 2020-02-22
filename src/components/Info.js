import React from "react";
// import Foto from "../assets/foto.jpg";
import { Container, Row, Col } from "reactstrap";

function Info({ name, photo }) {
  return (
    <Container className="my-5">
      <Row>
        <Col
          md={{ size: 6, offset: 3 }}
          className="d-flex justify-content-center align-items-center"
        >
          <div
            className="h-100 rounded-circle neumorphism"
            style={componentStyle.imageDiv}
          >
            <img
              src={photo}
              alt="profile"
              className="img-fluid rounded-circle p-2"
            />
          </div>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col md={{ size: "6", offset: "3" }}>
          <div className="neumorphism w-100" style={componentStyle.nameDiv}>
            <h4
              className="text-center pt-4 px-3 mb-2"
              style={componentStyle.nameHeader}
            >
              {name}
            </h4>

            <div className="text-center pb-3 mt-4 d-flex align-items-center justify-content-center">
              <a
                href="https://github.com/daffaputradamar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h5 className="neumorphism-icon p-2 mx-2">
                  <i
                    className="fi-xnsuxl-github"
                    style={{ color: "#57606f" }}
                  ></i>
                </h5>
              </a>
              <a
                href="https://www.facebook.com/daffaputradamar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h5 className="neumorphism-icon p-2 mx-2">
                  <i
                    className="fi-xnsuxl-instagram"
                    style={{ color: "#ff4757" }}
                  ></i>
                </h5>
              </a>
              <a
                href="https://www.instagram.com/daffaputradamar/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h5 className="neumorphism-icon p-2 mx-2">
                  <i
                    className="fi-cnluxl-facebook-circle"
                    style={{ color: "#1e90ff" }}
                  ></i>
                </h5>
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

const componentStyle = {
  imageDiv: {
    width: "250px",
    minWidth: "200px"
  },
  nameDiv: {
    width: "200px",
    borderRadius: "10px"
  },
  nameHeader: {
    fontWeight: 700
  }
};

export default Info;
