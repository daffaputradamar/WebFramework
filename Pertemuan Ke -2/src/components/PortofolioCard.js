import React from "react";
import { Col, Card, CardBody, CardText, Button } from "reactstrap";

function PortofolioCard({ icon, name, description, github }) {
  return (
    <Col sm="4" className="mb-4 d-flex align-items-stretch">
      <Card className="neumorphism border-0">
        <CardBody className="d-flex flex-column justify-content-end">
          <div>
            <img
              src={icon}
              alt="Projek Icon"
              className="img-fluid px-5 mb-4 pt-4"
            />
          </div>

          <CardText>
            <h5 className="text-center">{name}</h5>
            <hr />
            {description}
          </CardText>
          <div className="text-center">
            <a href={github} target="_blank" rel="noopener noreferrer">
              <Button
                className="btn-grad-light border-0"
                style={componentStyle.cardButton}
              >
                See Project
              </Button>
            </a>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
}

const componentStyle = {
  cardButton: { borderRadius: "20px", padding: "10px 20px" }
};

export default PortofolioCard;
