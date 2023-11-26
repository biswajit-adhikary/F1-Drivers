import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Driver from "../Driver/Driver";

const Drivers = () => {
    return (
        <section className="py-5">
            <Container>
                <Row>
                    <h3 className="text-start mb-4">F1 Drivers 2023</h3>
                </Row>
                <Row lg={4}>
                    <Driver />
                    <Driver />
                    <Driver />
                    <Driver />
                    <Driver />
                </Row>
            </Container>
        </section>
    );
};

export default Drivers;
