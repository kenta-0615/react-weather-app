import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "../components/common/Button";

export default {
	title: "Button",
	component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
	title: "Search for places",
	onClick: () => {
		console.log("test");
	},
};

export const Search = Template.bind({});
Search.args = {
	title: "Search",
};
