import React from "react";
import { TodayWeather } from "../common/TodayWeather";
import { Button } from "../common/Button";
import { useState } from "react";
import { SideBar } from "./SideBar";

type Props = {
  telop: string;
  image: string;
  temperature: string;
  day: string;
  area: string;
  onSearchWeather: (cityId: string) => void;
};

export const LeftScreen: React.FC<Props> = ({
  telop,
  image,
  temperature,
  day,
  area,
  onSearchWeather,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {isOpen ? (
        <SideBar
          onClose={() => setIsOpen(false)}
          onSearchWeather={onSearchWeather}
        />
      ) : (
        <>
          <div className="absolute m-10 px-9 py-2 w-52 bg-[#6E707A]">
            <Button
              title={"Search for places"}
              onClick={() => setIsOpen(true)}
            />
          </div>
          <TodayWeather
            iconUrl={image}
            temperature={temperature}
            unit={"C"}
            telop={telop}
            day={day}
            area={area}
          />
        </>
      )}
    </div>
  );
};
