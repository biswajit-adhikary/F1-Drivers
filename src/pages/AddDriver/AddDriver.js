import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AddDriver = () => {
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
                            <h3 className="text-center">Add Driver</h3>
                            <div className="driver-form">
                                <Form>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="DriverFullName"
                                    >
                                        <Form.Label>Driver name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter name"
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="DriverAge"
                                    >
                                        <Form.Label>Driver age</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter age"
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="DriverNationality"
                                    >
                                        <Form.Label>
                                            Driver nationality
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Driver Nationality"
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        controlId="DriverImgRef"
                                        className="mb-3"
                                    >
                                        <Form.Label>Driver Image</Form.Label>
                                        <Form.Control type="file" size="sm" />
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

export default AddDriver;
