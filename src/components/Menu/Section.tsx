import React from "react";
import Scrollable from "../Scrollable";
import { IMenuSectionProps } from "../../lib/Utilities";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Section: React.FC<IMenuSectionProps> = (props: IMenuSectionProps) => {
  const getContent = (): JSX.Element => {
    if (props.scrollable) {
      return (
        <Scrollable className="menu-section-content">
          {props.children}
        </Scrollable>
      );
    }

    return <div className="menu-section-content">{props.children}</div>;
  };

  return (
    <div id={props.id} className="menu-section">
      <div className="menu-section-title">
        <FontAwesomeIcon icon={props.icon} />
        <span className="menu-section-title-text">{props.title}</span>
      </div>
      {getContent()}
    </div>
  );
};

export default Section;
