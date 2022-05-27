import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TodayWeather } from "../components/TodayWeather";

export default {
	title: "TodayWeather",
	component: TodayWeather,
} as ComponentMeta<typeof TodayWeather>;

const Template: ComponentStory<typeof TodayWeather> = (args) => (
	<div className="w-1/3 h-screen text-white">
		<TodayWeather {...args} />
	</div>
);

export const Default = Template.bind({});
Default.args = {
	iconUrl: "https://www.jma.go.jp/bosai/forecast/img/212.svg",
	temperature: 15,
	unit: "C",
	telopWeather: "Shower",
};
