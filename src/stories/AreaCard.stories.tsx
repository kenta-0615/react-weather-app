import { ComponentStory, ComponentMeta } from "@storybook/react";
import { AreaCard } from "../components/AreaCard";

export default {
	title: "Area Card",
	component: AreaCard,
} as ComponentMeta<typeof AreaCard>;

export const Template: ComponentStory<typeof AreaCard> = (args) => (
	<AreaCard {...args} />
);
