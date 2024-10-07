import React from "react";
import "./PlanetaTheme.css";  // External CSS for styling
import planeta from "../assets/img/planeta.png"
// import TargetIcon from "@mui/icons-material/Adjust"; // Icon for 'Focused'
// import GroupIcon from "@mui/icons-material/Groups";  // Icon for 'Connected'
// import HandshakeIcon from "@mui/icons-material/Handshake"; // Icon for 'Committed'
import Group from "@mui/icons-material/Group";
import AdjustSharp from "@mui/icons-material/AdjustSharp";
import HandshakeOutlined from "@mui/icons-material/HandshakeOutlined";


const PlanetaTheme = () => {
  return (
    <div className="partner-container">
      <div className="partner-text">
        <h2>As your partner</h2>

        <div className="partner-point">
          <AdjustSharp className="point-icon" />
          <div className="point-text">
            <h3>Focused</h3>
            <p>
              Presence only in the sustainability domain
              with a knowledge driven philosophy.
            </p>
          </div>
        </div>

        <div className="partner-point">
          <Group className="point-icon" />
          <div className="point-text">
            <h3>Connected</h3>
            <p>
              With strong relationships across stakeholders
              and with a global pool of domain experts.
            </p>
          </div>
        </div>

        <div className="partner-point">
          <HandshakeOutlined className="point-icon" />
          <div className="point-text">
            <h3>Committed</h3>
            <p>
              To see our ideas through to implementation, 
              driven by robust process and methodologies.
            </p>
          </div> 
        </div>
      </div>

      <div className="partner-image">
        <img src={planeta} alt="Globe illustration" className="globe-img"/>
      </div>
    </div>
  );
};

export default PlanetaTheme;
