import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AddResult = () => {
    return (
        <section className="py-5">
            <Container>
                <Row>
                    <h3 className="text-start mb-4">Dashboard</h3>
                </Row>
                <Row>
                    <Col lg={3}>
                        <div className="sidebar">
                            <ul>
                                <li>
                                    <NavLink to="/dashboard">Drivers</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/add-driver">
                                        Add Driver
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/add-team">Add Team</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/add-race">Add Race</NavLink>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={9}>
                        <Row>
                            <h3 className="text-center">Add Race</h3>
                            <div className="driver-form">
                                <Form>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="RaceId"
                                    >
                                        <Form.Label>Race Id</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Race Id"
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="RaceWinnerName"
                                    >
                                        <Form.Label>
                                            Race Winner Name
                                        </Form.Label>
                                        <Form.Select aria-label="Floating label select example">
                                            <option>
                                                Select Race Winner Name
                                            </option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="RaceWinnerTime"
                                    >
                                        <Form.Label>
                                            Race Winner Time
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Race Winner Time"
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="RaceGrandprixName"
                                    >
                                        <Form.Label>
                                            Race Grandprix Name
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Race Grandprix Name"
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="RaceNoOfLap"
                                    >
                                        <Form.Label>Race No Of Lap</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Race No Of Lap"
                                        />
                                    </Form.Group>

                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default AddResult;
