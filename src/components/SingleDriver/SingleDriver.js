import React from "react";
import Button from "react-bootstrap/Button";
import "./SingleDriver.css";

const SingleDriver = () => {
    return (
        <div className="single-driver-row">
            <div>Max Verstappen</div>
            <div>
                <img
                    src="https://media.formula1.com/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png.transform/2col/image.png"
                    alt=""
                />
            </div>
            <div>
                <Button variant="primary">Edit</Button>
            </div>
            <div>
                <Button variant="danger">Delete</Button>
            </div>
        </div>
    );
};

export default SingleDriver;
