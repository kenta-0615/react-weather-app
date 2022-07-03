import React from "react";
import { Weather, WeeklyWeather } from "../common/WeeklyWeather";
import { HighlightList } from "../common/HighlightList";

type TodayWeatherHighlight = {
	title: string;
	value: string;
};

type Props = {
	weeklyWeather: Weather[];
	todayWeatherHighlight: TodayWeatherHighlight[];
};

export const RightScreen: React.FC<Props> = ({
	weeklyWeather,
	todayWeatherHighlight,
}) => {
	return (
		<div>
			<div className="ml-52">
				<WeeklyWeather weathers={weeklyWeather} />
			</div>
			<div>
				<HighlightList highlights={todayWeatherHighlight} />
			</div>
		</div>
	);
};
