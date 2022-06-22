import React from "react";
import { TodayWeather } from "../common/TodayWeather";
import { Button } from "../common/Button";
import { useState } from "react";
import { SideBar } from "./SideBar";

export const LeftScreen: React.FC = () => {
	const [isClose, setIsClose] = useState(false);

	const closeSideBar = () => setIsClose(!isClose);

	return (
		<div className="relative">
			{isClose ? (
				<div className="absolute w-1/3 h-hull">
					<SideBar onClose={closeSideBar} />
				</div>
			) : (
				<>
					<div className="absolute m-10 px-9 py-2 h-10 w-52 bg-[#6E707A]">
						<Button title={"Search for places"} onClick={closeSideBar} />
					</div>
					<TodayWeather
						iconUrl={"https://www.jma.go.jp/bosai/forecast/img/212.svg"}
						temperature={15}
						unit={"C"}
						telop={"Shower"}
					/>
				</>
			)}
		</div>
	);
};
