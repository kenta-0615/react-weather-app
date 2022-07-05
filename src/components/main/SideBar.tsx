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
			<div className="space-y-5">
				<AreaCard
					key={area.id}
					name={area.name}
					onClick={() => onSearchWeather(area.id)}
				/>
			</div>
		);
	});

	return (
		<div>
			<div className="absolute top-5 right-10 text-[#E7E7EB]">
				<Button title={"X"} onClick={onClose} />
			</div>
			<div className="pt-20 pl-[70px] border-[#E7E7EB]">
				<Input value={searchInput} onChange={inputSearchWord} />
			</div>
			<div className="absolute w-[86px] h-[48px] bg-[#3C47E9] text-center m-auto py-3 right-[45px] top-[82px]">
				<Button title={"Search"} onClick={searchInputWeather} />
			</div>
			<div className="pl-7 py-10 space-y-5">
				{shouldEnabledSearch ? searchedAreaList : allAreaList}
			</div>
		</div>
	);
};
