import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input } from "../components/common/Input";

export default {
	title: "Input",
	component: Input,
} as ComponentMeta<typeof Input>;

export const Template: ComponentStory<typeof Input> = (args) => (
	<Input {...args} />
);
