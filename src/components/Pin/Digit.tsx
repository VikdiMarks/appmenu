import React, { useState, useEffect } from "react";
import { IPinDigitProps } from "../../lib/Utilities";
import classNames from "classnames";

const Digit: React.FC<IPinDigitProps> = (props: IPinDigitProps) => {
  const [hidden, setHidden] = useState<boolean>(false);

  useEffect(() => {
    if (props.value) {
      const timeout = setTimeout(() => {
        setHidden(true);
      }, 500);

      return () => {
        setHidden(false);
        clearTimeout(timeout);
      };
    }
  }, [props.value]);

  return (
    <div
      className={classNames("app-pin-digit", {
        focused: props.focused,
        hidden,
      })}
    >
      <span className="app-pin-digit-value">{props.value || ""}</span>
    </div>
  );
};

export default Digit;
