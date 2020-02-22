import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane
} from "reactstrap";
import About from "./About";
import Portofolio from "./Portofolio";

function Profile({ biodata }) {
  const [activeTab, setActiveTab] = useState("1");
  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <Container className="mb-5">
      <Row>
        <Col md={{ size: "12", offset: "0" }} sm="12">
          <Card className="border-0 neumorphism">
            <CardBody>
              <div>
                <div className="d-flex justify-content-center">
                  <div className="neumorphism-inside d-inline-block mx-auto">
                    <Nav
                      pills
                      className="d-flex justify-content-center align-items-center"
                    >
                      <NavItem>
                        <NavLink
                          className={{
                            active: activeTab === "1",
                            "btn-grad": activeTab === "1",
                            "text-center": true,
                            "py-2": true
                          }}
                          style={componentStyle.tabsButton}
                          onClick={() => {
                            toggle("1");
                          }}
                        >
                          Profile
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={{
                            active: activeTab === "2",
                            "btn-grad-orange": activeTab === "2",
                            "text-center": true,
                            "py-2": true
                          }}
                          style={componentStyle.tabsButton}
                          onClick={() => {
                            toggle("2");
                          }}
                        >
                          Portofolio
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </div>
                </div>
                <TabContent activeTab={activeTab} className="mt-4">
                  <TabPane tabId="1" className="px-4">
                    <About
                      name={biodata.name}
                      address={biodata.address}
                      phone={biodata.phone}
                      email={biodata.email}
                    />
                  </TabPane>
                  <TabPane tabId="2" className="px-4">
                    <Portofolio projects={biodata.projects} />
                  </TabPane>
                </TabContent>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

const componentStyle = {
  tabsButton: {
    width: "150px",
    cursor: "pointer",
    borderRadius: "20px"
  }
};

export default Profile;
