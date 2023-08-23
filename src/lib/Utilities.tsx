import { UserStatus, Default } from "./Enums";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface IPosition {
  left: number;
  x: number;
}

export interface INumberUtility {
  clamp: (min: number, value: number, max: number) => number;
  rand: (min: number, max: number) => number;
}

export interface ITimeUtility {
  format: (date: Date) => string;
  formatHours: (hours: number) => number;
  formatSegment: (segment: number) => `0${number}` | number;
}

export interface ILogInUtility {
  verify: (pin: string) => Promise<boolean>;
}

export interface IScrollableComponentState {
  grabbing: boolean;
  position: IPosition;
}

export interface IScrollableComponentProps {
  children: any;
  className?: string;
  id?: string;
}

export interface IInfoProps {
  id?: string;
}

export interface IPinDigitProps {
  focused: boolean;
  value: string;
}

export interface IMenuSectionProps {
  children: any;
  icon: IconDefinition;
  id: string;
  scrollable?: boolean;
  title: string;
}

export interface IUserStatusButton {
  icon: IconDefinition;
  id: string;
  userStatus: UserStatus;
}

export interface IAppContext {
  userStatus: UserStatus;
  setUserStatusTo: (status: UserStatus) => void;
}

export const N: INumberUtility = {
  clamp: (min: number, value: number, max: number) =>
    Math.min(Math.max(min, value), max),
  rand: (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1) + min),
};

export const T: ITimeUtility = {
  format: (date: Date): string => {
    const hours: number = T.formatHours(date.getHours()),
      minutes: number = date.getMinutes();
    //seconds: string = date.getSeconds();

    return `${hours}:${T.formatSegment(minutes)}`;
  },
  formatHours: (hours: number): number => {
    return hours % 12 === 0 ? 12 : hours % 12;
  },
  formatSegment: (segment: number): `0${number}` | number => {
    return segment < 10 ? `0${segment}` : segment;
  },
};

export const LogInUtility: ILogInUtility = {
  verify: async (pin: string): Promise<boolean> => {
    return new Promise((resolve, reject) => {
      setTimeout(
        () => {
          if (pin === Default.PIN) {
            resolve(true);
          } else {
            reject(`Invalid pin: ${pin}`);
          }
        },
        N.rand(300, 700),
      );
    });
  },
};
