import React from "react";
import { AppContext } from "../lib/AppContext";
import { IUserStatusButton } from "../lib/Utilities";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UserStatusButton: React.FC<IUserStatusButton> = (
  props: IUserStatusButton,
) => {
  const { userStatus, setUserStatusTo } = React.useContext(AppContext);

  const handleOnClick = (): void => {
    setUserStatusTo(props.userStatus);
  };

  return (
    <button
      id={props.id}
      className="user-status-button clear-button"
      disabled={userStatus === props.userStatus}
      type="button"
      onClick={handleOnClick}
    >
      <FontAwesomeIcon icon={props.icon} />
    </button>
  );
};

export default UserStatusButton;
