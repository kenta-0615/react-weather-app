import React from "react";
import { TodayWeather } from "../common/TodayWeather";
import { Button } from "../common/Button";
import { useState } from "react";
import { SideBar } from "./SideBar";

export const LeftScreen: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="relative">
			<div className="absolute m-10">
				<Button
					title={"Search for places"}
					onClick={() => setIsOpen(!isOpen)}
				/>
				{isOpen && (
					<div>
						<SideBar />
					</div>
				)}
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
