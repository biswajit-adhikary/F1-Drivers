import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Team from "../../components/Team/Team";

const Teams = () => {
    return (
        <section className="py-5">
            <Container>
                <Row>
                    <h3 className="text-start mb-4">F1 Teams 2023</h3>
                </Row>
                <Row lg={2}>
                    <Team />
                    <Team />
                    <Team />
                </Row>
            </Container>
        </section>
    );
};

export default Teams;
