import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { NavLink } from "react-router-dom";
import "./Dashboard.css";
import SingleDriver from "../../components/SingleDriver/SingleDriver";

const Dashboard = () => {
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
                        <div className="single-driver-row">
                            <div>Name</div>
                            <div>Image</div>
                            <div>Edit</div>
                            <div>Delete</div>
                        </div>
                        <SingleDriver />
                        <SingleDriver />
                        <SingleDriver />
                        <SingleDriver />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Dashboard;
