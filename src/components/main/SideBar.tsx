import { Button } from "../common/Button";
import { Input } from "../common/Input";
import { AreaCard } from "src/components/common/AreaCard";
import React, { useState } from "react";

type AreaList = {
  id: string;
  name: string;
};

type Props = {
  onClose: () => void;
  onSearchWeather: (cityId: string) => void;
};

// エリアリストのxmlから主要な地域だけ抜粋
// https://weather.tsukumijima.net/primary_area.xml
const areaList: AreaList[] = [
  { id: "130010", name: "東京" },
  { id: "140010", name: "横浜" },
  { id: "340010", name: "広島" },
  { id: "260010", name: "京都" },
  { id: "400010", name: "福岡" },
];

export const SideBar: React.FC<Props> = ({ onClose, onSearchWeather }) => {
  const [searchInput, setSearchInput] = useState<string>("");

  const [shouldEnabledSearch, setShouldEnabledSearch] =
    useState<boolean>(false);

  const inputSearchWord = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const searchInputWeather = () => {
    setShouldEnabledSearch(true);
  };

  const searchedAreaList = areaList.map((area) => {
    if (searchInput.includes(area.name)) {
      return (
        <AreaCard
          key={area.id}
          name={area.name}
          onClick={() => onSearchWeather(area.id)}
        />
      );
    }
  });

  const allAreaList = areaList.map((area) => {
    return (
      <AreaCard
        key={area.id}
        name={area.name}
        onClick={() => onSearchWeather(area.id)}
      />
    );
  });

  return (
    <div>
      <div className="absolute top-3 right-5">
        <Button title={"X"} onClick={onClose} />
      </div>
      <div className="pt-10 pl-8 border-gray-150">
        <Input value={searchInput} onChange={inputSearchWord} />
      </div>
      <div className="absolute w-24 h-12 bg-[#3C47E9] py-3 px-5 right-10 top-11">
        <Button title={"Search"} onClick={searchInputWeather} />
      </div>
      <div className="pl-7 py-10">
        {shouldEnabledSearch ? searchedAreaList : allAreaList}
      </div>
    </div>
  );
};
