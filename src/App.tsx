import React from "react";
import { UserStatus } from "./lib/Enums";
import { AppContext } from "./lib/AppContext";
import Info from "./components/Info/Info";
import Pin from "./components/Pin/Pin";
import Menu from "./components/Menu/Menu";
import Background from "./components/Background";
import UserStatusButton from "./components/UserStatusButton";
import Loading from "./components/Loading";
import "../src/assets/css/style.css";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const App: React.FC = () => {
  const [userStatus, setUserStatusTo] = React.useState<UserStatus>(
    UserStatus.LoggedOut,
  );

  const getStatusClass = (): string => {
    return userStatus.replace(/\s+/g, "-").toLowerCase();
  };

  return (
    <AppContext.Provider value={{ userStatus, setUserStatusTo }}>
      <div id="app" className={getStatusClass()}>
        <Info id="app-info" />
        <Pin />
        <Menu />
        <Background />
        <div id="sign-in-button-wrapper">
          <UserStatusButton
            icon={faArrowRightFromBracket}
            id="sign-in-button"
            userStatus={UserStatus.LoggingIn}
          />
        </div>
        <Loading />
      </div>
    </AppContext.Provider>
  );
};

export default App;
