import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Nav,
  Row,
  Tab,
} from "react-bootstrap";

import { Breadcrumb } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const StyledBreadcrumb = styled(Breadcrumb.Item)`
  &:not(:first-child):before {
    font-size: 11px;
    content: ">" !important;
  }

  &.active {
    font-size: 11px;
    color: #e84d0e;
  }

  &:not(.active) a {
    float: left;
    color: #818181;
    font-size: 11px;
    text-decoration: none;
  }
`;

const FeeTypeDetail = () => {
  const [feeType, setFeeType] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getFeeType = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/feetype/${params.id}`,
        );
        setFeeType(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getFeeType();
  }, [params.id]);

  const handleBackHomePage = () => {
    let path = `/`;
    navigate(path);
  };

  return (
    <Container className="mt-4">
      <div>
        <h3>Fee Type Details</h3>
      </div>

      <div className="mt-4">
        <Breadcrumb>
          <StyledBreadcrumb>Master Data Management</StyledBreadcrumb>
          <StyledBreadcrumb href="/">Fee Type</StyledBreadcrumb>
          <StyledBreadcrumb active>Fee Type Details</StyledBreadcrumb>
        </Breadcrumb>
      </div>

      <Form>
        <div className="mt-5">
          <Card className="shadow">
            <Row className="mt-4">
              <Col>
                <Form.Group as={Row} className="m-3">
                  <Form.Label column sm="4">
                    Fee Type Name
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control
                      type="text"
                      id="feeTypeName"
                      name="feeTypeName"
                      defaultValue={feeType.feeTypeName}
                      readOnly
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="m-3">
                  <Form.Label column sm="4">
                    Description
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control
                      as="textarea"
                      id="description"
                      name="description"
                      rows="4"
                      defaultValue={feeType.description}
                      readOnly
                    />
                  </Col>
                </Form.Group>
              </Col>

              <Col sm="5" className="p-1 m-4 rounded bg-light">
                <Form.Group as={Row} className="m-3">
                  <h5 className="mb-4">For Interface Purpose</h5>
                  <Form.Label column sm="5">
                    Fee Type Code
                  </Form.Label>
                  <Col sm="7">
                    <Form.Control
                      type="text"
                      id="feeTypeCode"
                      name="feeTypeCode"
                      defaultValue={feeType.feeTypeCode}
                      readOnly
                    />
                  </Col>
                </Form.Group>
              </Col>
            </Row>

            <div className="mx-4">
              <h5 className="my-4">Transalation</h5>
              <Tab.Container defaultActiveKey="first">
                <Row>
                  <Col sm="2">
                    <Nav variant="pills" className="flex-column">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Indonesia</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second" disabled>
                          Chinese Simplified
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm="9">
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <Form.Group as={Row} className="m-3">
                          <Form.Label column sm="3">
                            Fee Type Name
                          </Form.Label>
                          <Col sm="6">
                            <Form.Control type="text" readOnly />
                          </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="m-3">
                          <Form.Label column sm="3">
                            Description
                          </Form.Label>
                          <Col sm="6">
                            <Form.Control as="textarea" rows="3" readOnly />
                          </Col>
                        </Form.Group>
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </div>
          </Card>
        </div>

        <div className="my-4">
          <Button variant="outline-secondary" onClick={handleBackHomePage}>
            Back
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default FeeTypeDetail;
