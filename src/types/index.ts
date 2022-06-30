export type ForeCastsDetail = { weather: string; wind: string; wave: string };
export type Description = {
	publicTime: string;
	publicTimeFormatted: string;
	headlineText: string;
	bodyText: string;
	text: string;
};
export type Min = { celsius: string | null; fahrenheit: string | null };
export type Max = { celsius: string | null; fahrenheit: string | null };
export type Temperature = { min: Min; max: Max };
export type ChanceOfRain = {
	T00_06: string;
	T06_12: string;
	T12_18: string;
	T18_24: string;
};
export type Image = {
	title: string;
	url: string;
	width: number;
	height: number;
};

export type ForeCasts = {
	date: string;
	dateLabel: string;
	telop: string;
	detail: ForeCastsDetail;
	temperature: Temperature;
	chanceOfRain: ChanceOfRain;
	image: Image;
};

export type Location = {
	area: string;
	prefecture: string;
	district: string;
	city: string;
};

export type Copyright = {
	time: string;
	link: string;
	image: string;
	provider: string;
};

export type WeatherAPI = {
	publicTime: string;
	publicTimeFormatted: string;
	publishDate: string;
	publishTimeFormatted: string;
	title: string;
	link: string;
	description: Description;
	forecasts: ForeCasts[];
	location: Location;
	copyright: Copyright;
};
