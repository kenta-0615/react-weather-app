import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Option } from "../components/common/Option";

export default {
	title: "Option",
	component: Option,
} as ComponentMeta<typeof Option>;

const Template: ComponentStory<typeof Option> = (args) => (
	<div>
		<Option {...args} />
	</div>
);

export const Fahrenheit = Template.bind({});
Fahrenheit.args = {
	iconUrl: "https://cdn-icons-png.flaticon.com/512/121/121769.png",
};

export const Celsius = Template.bind({});
Celsius.args = {
	iconUrl:
		"https://cdn-icons.flaticon.com/png/512/796/premium/796066.png?token=exp=1654337642~hmac=b44db03f2a53ba7d2d2d3e20573bb9e7",
};
