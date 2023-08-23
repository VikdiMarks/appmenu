import React from "react";
import { WeatherType } from "../lib/Enums";
import { N } from "../lib/Utilities";
import classNames from "classnames";
import Section from "./Menu/Section";
import {
  faCloud,
  faCloudBolt,
  faCloudRain,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Weather: React.FC = () => {
  const getDays = (): JSX.Element[] => {
    return [
      {
        id: 1,
        name: "Mon",
        temperature: N.rand(60, 80),
        weather: WeatherType.Sunny,
      },
      {
        id: 2,
        name: "Tues",
        temperature: N.rand(60, 80),
        weather: WeatherType.Sunny,
      },
      {
        id: 3,
        name: "Wed",
        temperature: N.rand(60, 80),
        weather: WeatherType.Cloudy,
      },
      {
        id: 4,
        name: "Thurs",
        temperature: N.rand(60, 80),
        weather: WeatherType.Rainy,
      },
      {
        id: 5,
        name: "Fri",
        temperature: N.rand(60, 80),
        weather: WeatherType.Stormy,
      },
      {
        id: 6,
        name: "Sat",
        temperature: N.rand(60, 80),
        weather: WeatherType.Sunny,
      },
      {
        id: 7,
        name: "Sun",
        temperature: N.rand(60, 80),
        weather: WeatherType.Cloudy,
      },
    ].map((day: any) => {
      const getIcon = (): IconDefinition => {
        switch (day.weather) {
          case WeatherType.Cloudy:
            return faCloud;
          case WeatherType.Rainy:
            return faCloudRain;
          case WeatherType.Stormy:
            return faCloudBolt;
          case WeatherType.Sunny:
            return faSun;
          default:
            return faSun;
        }
      };

      return (
        <div key={day.id} className="day-card">
          <div className="day-card-content">
            <span className="day-weather-temperature">
              {day.temperature}
              <span className="day-weather-temperature-unit">°F</span>
            </span>
            <FontAwesomeIcon
              className={classNames(
                "day-weather-icon",
                day.weather.toLowerCase(),
              )}
              icon={getIcon()}
            />
            <span className="day-name">{day.name}</span>
          </div>
        </div>
      );
    });
  };
  return (
    <Section
      icon={faSun}
      id="weather-section"
      scrollable
      title="How's it look out there?"
    >
      {getDays()}
    </Section>
  );
};
export default Weather;
