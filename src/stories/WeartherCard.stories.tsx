import { ComponentStory, ComponentMeta } from "@storybook/react";
import { WeatherCard } from "../components/WeatherCard";

export default {
	title: "WeatherCard",
	component: WeatherCard,
} as ComponentMeta<typeof WeatherCard>;

const Template: ComponentStory<typeof WeatherCard> = (args) => (
	<div className="w-32 h-44 text-center">
		<WeatherCard {...args} />
	</div>
);

export const Default = Template.bind({});
Default.args = {
	title: "Tomorrow",
	iconUrl: "https://www.jma.go.jp/bosai/forecast/img/100.svg",
	maxTemperature: 30,
	minTemperature: 1,
	unit: "C",
};
