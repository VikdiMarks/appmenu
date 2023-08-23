import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const Reminder: React.FC = () => {
  return (
    <div className="reminder">
      <div className="reminder-icon">
        <FontAwesomeIcon icon={faBell} />
      </div>
      <span className="reminder-text">
        Extra cool people meeting <span className="reminder-time">10AM</span>
      </span>
    </div>
  );
};

export default Reminder;
