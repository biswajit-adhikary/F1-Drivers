import React from "react";
import Col from "react-bootstrap/Col";
import "./Result.css";

const Result = () => {
    return (
        <Col>
            <div className="single-result">
                <div>Winner Name</div>
                <div>Winner Time</div>
                <div>Grand Prix</div>
                <div>Number Of Laps</div>
            </div>
        </Col>
    );
};

export default Result;
