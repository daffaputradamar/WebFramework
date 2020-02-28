import React from "react";
import { Col, Row } from "reactstrap";
import PortofolioCard from "./PortofolioCard";

function Portofolio({ projects }) {
  return (
    <Row>
      <Col sm="12">
        <Row>
          {projects.map(({ icon, name, description, github }, index) => {
            return (
              <PortofolioCard
                key={index}
                icon={icon}
                name={name}
                description={description}
                github={github}
              />
            );
          })}
        </Row>
      </Col>
    </Row>
  );
}

export default Portofolio;
