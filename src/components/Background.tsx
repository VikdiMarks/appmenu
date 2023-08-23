import React from "react";
import { AppContext } from "../lib/AppContext";
import { UserStatus } from "../lib/Enums";

const Background: React.FC = () => {
  const { userStatus, setUserStatusTo } = React.useContext(AppContext);

  const handleOnClick = (): void => {
    if (userStatus === UserStatus.LoggedOut) {
      setUserStatusTo(UserStatus.LoggingIn);
    }
  };

  return (
    <div id="app-background" onClick={handleOnClick}>
      <div id="app-background-image" className="background-image" />
    </div>
  );
};

export default Background;
