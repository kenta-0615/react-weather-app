import React from "react";
import { WeatherCard } from "./WeatherCard";

export const WeeklyWeather: React.FC = () => {
	return (
		<div className="flex space-x-9">
			<div>
				<WeatherCard
					title={"Tomorrow"}
					iconUrl={"https://www.jma.go.jp/bosai/forecast/img/100.svg"}
					maxTemperature={30}
					minTemperature={1}
					unit={"C"}
				/>
			</div>
			<div>
				<WeatherCard
					title={"Tomorrow"}
					iconUrl={"https://www.jma.go.jp/bosai/forecast/img/100.svg"}
					maxTemperature={30}
					minTemperature={1}
					unit={"C"}
				/>
			</div>
			<div>
				<WeatherCard
					title={"Tomorrow"}
					iconUrl={"https://www.jma.go.jp/bosai/forecast/img/100.svg"}
					maxTemperature={30}
					minTemperature={1}
					unit={"C"}
				/>
			</div>
			<div>
				<WeatherCard
					title={"Tomorrow"}
					iconUrl={"https://www.jma.go.jp/bosai/forecast/img/100.svg"}
					maxTemperature={30}
					minTemperature={1}
					unit={"C"}
				/>
			</div>
			<div>
				<WeatherCard
					title={"Tomorrow"}
					iconUrl={"https://www.jma.go.jp/bosai/forecast/img/100.svg"}
					maxTemperature={30}
					minTemperature={1}
					unit={"C"}
				/>
			</div>
		</div>
	);
};
