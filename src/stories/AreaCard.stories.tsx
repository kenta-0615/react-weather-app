import { ComponentStory, ComponentMeta } from "@storybook/react";
import { AreaCard } from "../components/common/AreaCard";

export default {
	title: "Area Card",
	component: AreaCard,
} as ComponentMeta<typeof AreaCard>;

const Template: ComponentStory<typeof AreaCard> = (args) => (
	<AreaCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
	name: "東京",
	onClick: () => {
		console.log("test");
	},
};
