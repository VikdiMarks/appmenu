import React, { FC, useContext } from "react";
import { AppContext } from "../../lib/AppContext";
import { UserStatus } from "../../lib/Enums";
import { LogInUtility } from "../../lib/Utilities";
import Digit from "./Digit";

const Pin: FC = () => {
  const { userStatus, setUserStatusTo } = useContext(AppContext);

  const [pin, setPinTo] = React.useState<string>("");

  const ref = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (
      (userStatus === UserStatus.LoggingIn ||
        userStatus === UserStatus.LogInError) &&
      ref.current
    ) {
      ref.current.focus();
    } else {
      setPinTo("");
    }
  }, [userStatus]);

  React.useEffect(() => {
    if (pin.length === 4) {
      const verify = async (): Promise<void> => {
        try {
          setUserStatusTo(UserStatus.VerifyingLogIn);

          if (await LogInUtility.verify(pin)) {
            setUserStatusTo(UserStatus.LoggedIn);
          }
        } catch (err) {
          console.error(err);

          setUserStatusTo(UserStatus.LogInError);
        }
      };

      verify();
    }

    if (userStatus === UserStatus.LogInError) {
      setUserStatusTo(UserStatus.LoggingIn);
    }
  }, [pin]);

  const handleOnClick = (): void => {
    ref.current && ref.current.focus();
  };

  const handleOnCancel = (): void => {
    setUserStatusTo(UserStatus.LoggedOut);
  };

  const handleOnChange = (e: any): void => {
    if (e.target.value.length <= 4) {
      setPinTo(e.target.value.toString());
    }
  };

  const getCancelText = (): JSX.Element | void => {
    return (
      <span id="app-pin-cancel-text" onClick={handleOnCancel}>
        Cancel
      </span>
    );
  };

  const getErrorText = (): JSX.Element | void => {
    if (userStatus === UserStatus.LogInError) {
      return <span id="app-pin-error-text">Invalid</span>;
    }
  };

  return (
    <div id="app-pin-wrapper">
      <input
        disabled={
          userStatus !== UserStatus.LoggingIn &&
          userStatus !== UserStatus.LogInError
        }
        id="app-pin-hidden-input"
        maxLength={4}
        ref={ref}
        type="number"
        value={pin}
        onChange={handleOnChange}
      />
      <div id="app-pin" onClick={handleOnClick}>
        <Digit focused={pin.length === 0} value={pin[0]} />
        <Digit focused={pin.length === 1} value={pin[1]} />
        <Digit focused={pin.length === 2} value={pin[2]} />
        <Digit focused={pin.length === 3} value={pin[3]} />
      </div>
      <h3 id="app-pin-label">
        {`Enter PIN (1234) ${getErrorText()} ${getCancelText()}`}
      </h3>
    </div>
  );
};

export default Pin;
