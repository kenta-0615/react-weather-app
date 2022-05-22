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
		<div className="bg-navy text-white w-50">
			<p>{title}</p>
			<div className="text-center">
				<img className="m-auto" src={iconUrl} />
			</div>
			<div className="flex-row space-x-3">
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
