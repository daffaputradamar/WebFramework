import React from "react";
import { Row, Col } from "reactstrap";

function About({ name, address, phone, email }) {
  return (
    <Row>
      <Col sm="12">
        <div className="neumorphism px-5 py-4 mb-5">
          <h3 className="text-center" style={componentStyle.sectionHeader}>
            About Me
          </h3>
          <hr />
          <Row className="mb-2">
            <Col sm="2">
              <h5>Name</h5>
            </Col>
            <Col>
              <h6>: {name}</h6>
            </Col>
          </Row>
          <Row className="mb-2">
            <Col sm="2">
              <h5>Address</h5>
            </Col>
            <Col>
              <h6>: {address}</h6>
            </Col>
          </Row>
          <Row className="mb-2">
            <Col sm="2">
              <h5>Phone</h5>
            </Col>
            <Col>
              <h6>: {phone}</h6>
            </Col>
          </Row>
          <Row className="mb-2">
            <Col sm="2">
              <h5>Email</h5>
            </Col>
            <Col>
              <h6>: {email}</h6>
            </Col>
          </Row>
        </div>
        <div className="neumorphism px-5 py-4">
          <h3 className="text-center" style={componentStyle.sectionHeader}>
            I'm a Web Developer
          </h3>
          <hr />
          <p>
            I'm only beginning to learn programming since the start of my
            college years, so not that many knowledge i can offer, but my
            experience over the years makes me learn so much more since i join
            IT communities, i learn many programming language, frameworks, etc.
          </p>
        </div>
      </Col>
    </Row>
  );
}

const componentStyle = {
  sectionHeader: {
    fontWeight: "700"
  }
};

export default About;
