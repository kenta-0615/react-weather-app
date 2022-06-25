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
	// mapの仕様(うごき)を理解する
	const cardItem = weathers.map((weather) => (
		<WeatherCard
			title={weather.title}
			iconUrl={weather.iconUrl}
			maxTemperature={weather.maxTemperature}
			minTemperature={weather.minTemperature}
		/>
	));
	return <ul>{cardItem}</ul>;
};
