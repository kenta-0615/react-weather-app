import React from "react";
import { TodayWeather } from "../common/TodayWeather";
import { Button } from "../common/Button";
import { useState } from "react";
import { SideBar } from "./SideBar";

export const LeftScreen: React.FC = () => {
	const [isClose, setIsClose] = useState(false);

	const toggle = () => setIsClose(!isClose);

	return (
		<div className="relative">
			{isClose ? (
				<div className="absolute w-1/3 h-hull">
					<SideBar onClose={toggle} />
				</div>
			) : (
				<>
					<div className="absolute m-10">
						<Button title={"Search for places"} onClick={toggle} />
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
