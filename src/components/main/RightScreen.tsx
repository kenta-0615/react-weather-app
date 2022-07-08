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
		<div className="mx-[25%] my-[15%]">
			<div className="my-[10%]">
				<WeeklyWeather weathers={weeklyWeather} />
			</div>
			<p className="text-white text-2xl">Today's Highlights</p>
			<div>
				<HighlightList highlights={todayWeatherHighlight} />
			</div>
		</div>
	);
};
