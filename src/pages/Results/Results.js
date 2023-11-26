import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Result from "../../components/Result/Result";

const Results = () => {
    return (
        <section className="py-5">
            <Container>
                <Row>
                    <h3 className="text-start mb-4">2023 RACE RESULTS</h3>
                </Row>
                <Row lg={1}>
                    <Col>
                        <div className="single-result">
                            <div>Winner Name</div>
                            <div>Winner Time</div>
                            <div>Grand Prix</div>
                            <div>Number Of Laps</div>
                        </div>
                    </Col>
                    <Result />
                </Row>
            </Container>
        </section>
    );
};

export default Results;
