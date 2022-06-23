import React from "react";
import { TodayWeather } from "../common/TodayWeather";
import { Button } from "../common/Button";
import { useState } from "react";
import { SideBar } from "./SideBar";

export const LeftScreen: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="relative">
			{isOpen ? (
				<SideBar onClose={() => setIsOpen(false)} />
			) : (
				<>
					<div className="absolute m-10 px-9 py-2 h-hull w-52 bg-[#6E707A]">
						<Button
							title={"Search for places"}
							onClick={() => setIsOpen(true)}
						/>
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
