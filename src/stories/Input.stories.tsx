import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input } from "../components/Input";

export default {
	title: "Input",
	component: Input,
} as ComponentMeta<typeof Input>;

export const Template: ComponentStory<typeof Input> = (args) => (
	<Input {...args} />
);
