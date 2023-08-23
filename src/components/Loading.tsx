import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Loading: React.FC = () => {
  return (
    <div id="app-loading-icon">
      <FontAwesomeIcon icon={faSpinner} />
    </div>
  );
};

export default Loading;
