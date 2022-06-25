import React from "react";
import { Weather, WeeklyWeather } from "../common/WeeklyWeather";
import { HighlightCohesive } from "../common/HighlightCohesive";

type Props = {
	weathers: Weather[];
};

export const RightScreen: React.FC<Props> = ({ weathers }) => {
	return (
		<div>
			<div className="flex w-full mt-5 ">
				<WeeklyWeather weathers={weathers} />
			</div>
			<div>
				<HighlightCohesive />
			</div>
		</div>
	);
};
