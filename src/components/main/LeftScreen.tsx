import React from "react";
import { TodayWeather } from "../common/TodayWeather";
import { Button } from "../common/Button";
import { SideBar } from "./SideBar";

export const LeftScreen: React.FC = () => {
	return (
		<div className="relative">
			<div>
				<SideBar />
			</div>
			<div className="absolute m-10">
				<Button
					title={"Search for places"}
					onClick={() => console.log("test")}
				/>
			</div>
			<TodayWeather
				iconUrl={"https://www.jma.go.jp/bosai/forecast/img/212.svg"}
				temperature={15}
				unit={"C"}
				telop={"Shower"}
			/>
		</div>
	);
};
