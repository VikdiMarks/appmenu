import React from "react";
import WeatherSnap from "./WeatherSnap";
import Time from "./Time";
import { IInfoProps } from "../../lib/Utilities";

const Info: React.FC<IInfoProps> = (props: IInfoProps) => {
  return (
    <div id={props.id} className="info">
      <Time />
      <WeatherSnap />
    </div>
  );
};

export default Info;
