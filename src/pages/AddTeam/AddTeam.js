import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AddTeam = () => {
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
                            <h3 className="text-center">Add Team</h3>
                            <div className="driver-form">
                                <Form>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="TeamCode"
                                    >
                                        <Form.Label>Team Code</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Team Code "
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="TeamName"
                                    >
                                        <Form.Label>Team Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Team Name"
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="TeamCarManufacturer"
                                    >
                                        <Form.Label>
                                            Team Car Manufacturer
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Team Car Manufacturer"
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        controlId="TeamCarImgRef"
                                        className="mb-3"
                                    >
                                        <Form.Label>Car Image</Form.Label>
                                        <Form.Control type="file" size="sm" />
                                    </Form.Group>
                                    <Form.Group
                                        controlId="TeamDriver1Id"
                                        className="mb-3"
                                    >
                                        <Form.Select aria-label="Floating label select example">
                                            <option>
                                                Select team member 1
                                            </option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group
                                        controlId="TeamDriver2Id"
                                        className="mb-3"
                                    >
                                        <Form.Select aria-label="Floating label select example">
                                            <option>
                                                Select team member 2
                                            </option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
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

export default AddTeam;
