import React from "react";
import Col from "react-bootstrap/Col";
import "./Team.css";

const Team = () => {
    return (
        <Col>
            <div className="single-team">
                <div className="team-head">
                    <div className="team-name">Red Bull Racing</div>
                </div>
                <div className="team-body">
                    <div className="drivers">
                        <img
                            src="https://media.formula1.com/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png.transform/2col/image.png"
                            alt=""
                        />
                        <h3>Max Verstappen</h3>
                    </div>
                    <div className="drivers">
                        <img
                            src="https://media.formula1.com/content/dam/fom-website/drivers/S/SERPER01_Sergio_Perez/serper01.png.transform/2col/image.png"
                            alt=""
                        />
                        <h3>Max Verstappen</h3>
                    </div>
                </div>
                <div className="team-image">
                    <img
                        src="https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2023/red-bull-racing.png.transform/6col/image.png"
                        alt=""
                    />
                </div>
            </div>
        </Col>
    );
};

export default Team;
