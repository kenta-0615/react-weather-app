import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Highlight } from "../components/Highlight";

export default {
	title: "Highlight",
	component: Highlight,
} as ComponentMeta<typeof Highlight>;

const Template: ComponentStory<typeof Highlight> = (args) => (
	<div className="top-195">
		<Highlight {...args} />
	</div>
);

export const Default = Template.bind({});
Default.args = {
	title: "風向き",
	value: 7,
	unit: "mph",
};
