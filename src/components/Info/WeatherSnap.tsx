import React from "react";
import { N } from "../../lib/Utilities";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
const WeatherSnap: React.FC = () => {
  const [temperature] = React.useState<number>(N.rand(65, 85));

  return (
    <span className="weather">
      <FontAwesomeIcon className="weather-type" icon={faSun} />
      <span className="weather-temperature-value">{temperature}</span>
      <span className="weather-temperature-unit">°F</span>
    </span>
  );
};

export default WeatherSnap;
