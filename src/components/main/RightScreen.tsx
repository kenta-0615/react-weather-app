import React from "react";
import { WeeklyWeather } from "../common/WeeklyWeather";
import { HighlightCohesive } from "../common/HighlightCohesive";

export const RightScreen: React.FC = () => {
	return (
		<div>
			<div className="inset-y-0  w-full mt-32 mx-48">
				<WeeklyWeather />
			</div>
			<div>
				<HighlightCohesive />
			</div>
		</div>
	);
};
