import React from "react";
import {
  IPosition,
  IScrollableComponentProps,
  IScrollableComponentState,
} from "../lib/Utilities";
import classNames from "classnames";

const defaultPosition = (): IPosition => ({
  left: 0,
  x: 0,
});

const Scrollable: React.FC<IScrollableComponentProps> = (
  props: IScrollableComponentProps,
) => {
  const ref = React.useRef<HTMLDivElement>(null);

  const [state, setStateTo] = React.useState<IScrollableComponentState>({
    grabbing: false,
    position: defaultPosition(),
  });

  const handleOnMouseDown = (e: any): void => {
    if (ref.current) {
      setStateTo({
        ...state,
        grabbing: true,
        position: {
          x: e.clientX,
          left: ref.current.scrollLeft,
        },
      });
    }
  };

  const handleOnMouseMove = (e: any): void => {
    if (state.grabbing && ref.current) {
      const left: number = Math.max(
        0,
        state.position.left + (state.position.x - e.clientX),
      );

      ref.current.scrollLeft = left;
    }
  };

  const handleOnMouseUp = (): void => {
    if (state.grabbing) {
      setStateTo({ ...state, grabbing: false });
    }
  };

  return (
    <div
      ref={ref}
      className={classNames("scrollable-component", props.className)}
      id={props.id}
      onMouseDown={handleOnMouseDown}
      onMouseMove={handleOnMouseMove}
      onMouseUp={handleOnMouseUp}
      onMouseLeave={handleOnMouseUp}
    >
      {props.children}
    </div>
  );
};

export default Scrollable;
