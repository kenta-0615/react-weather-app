import React from "react";

type Props = {
	title: string;
	maxTemperature: string | null;
	minTemperature: string | null;
	iconUrl: string;
};

export const WeatherCard: React.FC<Props> = ({
	title,
	maxTemperature,
	minTemperature,
	iconUrl,
}) => {
	return (
		<div className="bg-[#1E213A] text-white text-center h-52 w-80">
			<div className="text-center mt-4 text-2xl">
				<p>{title}</p>
			</div>
			<div className="text-center mt-7">
				<img className="m-auto" src={iconUrl} />
			</div>
			<div className="flex-row space-x-3 text-center mt-4 text-4xl">
				<span>{maxTemperature}&deg;</span>
				<span>{minTemperature}&deg;</span>
			</div>
		</div>
	);
};
