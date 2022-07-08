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
		<div>
			{isOpen ? (
				<SideBar
					onClose={() => setIsOpen(false)}
					onSearchWeather={onSearchWeather}
				/>
			) : (
				<>
					<Button
						title={"Search for places"}
						onClick={() => setIsOpen(true)}
						className={
							"bg-slate-400 h-10 w-[31%] mx-[10%] my-[9%] text-[80%] font-bold "
						}
					/>
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
