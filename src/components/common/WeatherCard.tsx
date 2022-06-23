import React from "react";

type Props = {
	title: string;
	maxTemperature: number;
	minTemperature: number;
	iconUrl: string;
	unit: string;
};

export const WeatherCard: React.FC<Props> = ({
	title,
	maxTemperature,
	minTemperature,
	iconUrl,
	unit,
}) => {
	return (
		<div className="bg-navy text-white w-auto h-44">
			<div className="text-center">
				<p>{title}</p>
			</div>
			<div className="text-center mt-7">
				<img className="m-auto" src={iconUrl} />
			</div>
			<div className="flex-row space-x-3 text-center mt-4">
				<span>
					{maxTemperature}&deg;{unit}
				</span>
				<span>
					{minTemperature}&deg;{unit}
				</span>
			</div>
		</div>
	);
};
