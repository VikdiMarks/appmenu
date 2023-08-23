import React from "react";
import { T } from "../../lib/Utilities";

const useCurrentDateEffect = (): Date => {
  const [date, setDate] = React.useState<Date>(new Date());

  React.useEffect(() => {
    const interval: NodeJS.Timeout = setInterval(() => {
      const update: Date = new Date();

      if (update.getSeconds() !== date.getSeconds()) {
        setDate(update);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [date]);

  return date;
};

const Time: React.FC = () => {
  const date: Date = useCurrentDateEffect();

  return <span className="time">{T.format(date)}</span>;
};
export default Time;
