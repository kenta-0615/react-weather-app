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
		<div className="mx-[10%]">
			<Button
				title={"X"}
				onClick={onClose}
				className={"top-5 mx-[100%] my-2 text-[#E7E7EB]"}
			/>
			<div className="flex my-[20%]">
				<Input
					value={searchInput}
					onChange={inputSearchWord}
					className={
						"w-[268px] h-[48px] bg-[#1E213A] border border-slate-300 rounded-md py-4 pl-11 pr-20"
					}
				/>
				<Button
					title={"Search"}
					onClick={searchInputWeather}
					className={"bg-[#3C47E9] w-20 h-[50px] mx-[1%]"}
				/>
			</div>
			{shouldEnabledSearch ? searchedAreaList : allAreaList}
		</div>
	);
};
