import React from "react";

type Props = {
	iconUrl: string;
	temperature: number;
	unit: string;
	telop: string;
};

export const TodayWeather: React.FC<Props> = ({
	iconUrl,
	temperature,
	unit,
	telop,
}) => {
	return (
		<div className="h-hull bg-slate-700 text-center">
			<div className="relative flex flex-nowrap top-32 justify-center top-38 items-center max-h-40">
				<img className="h-48 p-4 m-8" src={iconUrl} />
			</div>
			<div className="flex flex-col items-center pt-6">
				<h1 className="relative text-slate-100 text-[100px] flex-5 py-8 h-56 w-48 m-10">
					{temperature}
					<span className="text-5xl text-slate-100">&deg;{unit}</span>
				</h1>
			</div>
			<div className="h-52">
				<h3 className="font-semibold text-4xl text-slate-50">{telop}</h3>
			</div>
			<div className="flex flex-col items-center text-center text-slate-50 text-lg space-y-5">
				<p>Today &bull; Fri 5 Jun</p>
				<p>
					<i className="fas fa-map-marker-alt"></i> Helsinki
				</p>
			</div>
		</div>
	);
};