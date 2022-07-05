import React from "react";
import { WeatherCard } from "./WeatherCard";

export type Weather = {
	title: string;
	iconUrl: string;
	maxTemperature: string | null;
	minTemperature: string | null;
};

type Props = {
	weathers: Weather[];
};

export const WeeklyWeather: React.FC<Props> = ({ weathers }) => {
	const cardItem = weathers.map((weather) => (
		<WeatherCard
			title={weather.title}
			iconUrl={weather.iconUrl}
			maxTemperature={weather.maxTemperature}
			minTemperature={weather.minTemperature}
		/>
	));
	return (
		<div>
			<ul className="flex space-x-5 m-20 place-content-center">{cardItem}</ul>
		</div>
	);
};
