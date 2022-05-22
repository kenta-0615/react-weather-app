import React from "react";

type Props = {
	dayTitle: string;
	value: number;
	iconUrl: string;
	unit: string;
};

export const WeatherCard: React.FC<Props> = ({
	dayTitle,
	value,
	iconUrl,
	unit,
}) => {
	return (
		<div className="bg-navy text-white w-50">
			<p>{dayTitle}</p>
			<div className="text-center">
				<img className="m-auto" src={iconUrl} />
			</div>
			<div>
				<span>{value}</span>
				<span>{unit}</span>
				<span>{value}</span>
				<span>{unit}</span>
			</div>
		</div>
	);
};
