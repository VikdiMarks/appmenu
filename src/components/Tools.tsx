import React from "react";
import classNames from "classnames";
import Section from "./Menu/Section";
import {
  faCalculator,
  faCloudSun,
  faGamepad,
  faPiggyBank,
  faPlane,
  faToolbox,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Tools: React.FC = () => {
  const getTools = (): JSX.Element[] => {
    return [
      {
        icon: faCloudSun,
        id: 1,
        image:
          "https://images.unsplash.com/photo-1492011221367-f47e3ccd77a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHdlYXRoZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        label: "Weather",
        name: "Cloudly",
      },
      {
        icon: faCalculator,
        id: 2,
        image:
          "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FsY3VsYXRvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        label: "Calc",
        name: "Mathio",
      },
      {
        icon: faPiggyBank,
        id: 3,
        image:
          "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmFua3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        label: "Bank",
        name: "Cashy",
      },
      {
        icon: faPlane,
        id: 4,
        image:
          "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWlycGxhbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        label: "Travel",
        name: "Fly-er-io-ly",
      },
      {
        icon: faGamepad,
        id: 5,
        image:
          "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dmlkZW8lMjBnYW1lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        label: "Games",
        name: "Gamey",
      },
      {
        icon: faVideo,
        id: 6,
        image:
          "https://images.unsplash.com/photo-1578022761797-b8636ac1773c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHZpZGVvJTIwY2hhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        label: "Video Chat",
        name: "Chatty",
      },
    ].map((tool: any) => {
      const styles: React.CSSProperties = {
        backgroundImage: `url(${tool.image})`,
      };

      return (
        <div key={tool.id} className="tool-card">
          <div
            className="tool-card-background background-image"
            style={styles}
          />
          <div className="tool-card-content">
            <div className="tool-card-content-header">
              <span className="tool-card-label">{tool.label}</span>
              <span className="tool-card-name">{tool.name}</span>
            </div>
            <FontAwesomeIcon className={"tool-card-icon"} icon={tool.icon} />
          </div>
        </div>
      );
    });
  };

  return (
    <Section icon={faToolbox} id="tools-section" title="What's Appening?">
      {getTools()}
    </Section>
  );
};
export default Tools;
