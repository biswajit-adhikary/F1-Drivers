import React from "react";
import Col from "react-bootstrap/Col";
import "./Driver.css";

const Driver = () => {
    return (
        <Col>
            <div className="single-driver">
                <div className="driver-head">
                    <div className="driver-name">Max Verstappen</div>
                </div>
                <div className="driver-body">
                    <div className="driver-age">Age: 32</div>
                    <div className="driver-country">
                        <img
                            src="https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/flags/Netherlands.jpg.transform/2col/image.jpg"
                            alt=""
                        />
                    </div>
                </div>
                <div className="driver-image">
                    <img
                        src="https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/2col/image.png"
                        alt=""
                    />
                </div>
            </div>
        </Col>
    );
};

export default Driver;
