import React from "react";
import { UserStatus } from "../../lib/Enums";
import Info from "../Info/Info";
import Reminder from "../Reminder";
import UserStatusButton from "../UserStatusButton";
import QuickNav from "../QuickNav";
import Weather from "../Weather";
import Restaurants from "../Restaurants";
import Tools from "../Tools";
import Movies from "../Movies";
import {
  faArrowRightFromBracket,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Menu: React.FC = () => {
  return (
    <div id="app-menu">
      <div id="app-menu-content-wrapper">
        <div id="app-menu-content">
          <div id="app-menu-content-header">
            <div className="app-menu-content-header-section">
              <Info id="app-menu-info" />
              <Reminder />
            </div>
            <div className="app-menu-content-header-section">
              <UserStatusButton
                icon={faArrowRightFromBracket}
                id="sign-out-button"
                userStatus={UserStatus.LoggedOut}
              />
            </div>
          </div>
          <QuickNav />
          <Weather />
          <Restaurants />
          <Tools />
          <Movies />
        </div>
      </div>
    </div>
  );
};

export default Menu;
