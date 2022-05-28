import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "../components/ButtonList";

export default {
	title: "Button Component",
	component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
	<div>
		<Button {...args} />
	</div>
);

export const Default = Template.bind({});
Default.args = {
	title: "Search for places",
};

export const Search = Template.bind({});
Search.args = {
	title: "Search",
};
