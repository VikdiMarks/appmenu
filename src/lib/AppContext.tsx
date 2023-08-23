import React from "react";
import { IAppContext } from "./Utilities";
import { UserStatus } from "./Enums";

const initialAppContext: IAppContext = {
  userStatus: UserStatus.Default,
  setUserStatusTo: () => {},
};

export const AppContext = React.createContext<IAppContext>(initialAppContext);
