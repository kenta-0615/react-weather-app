import { ComponentStory, ComponentMeta } from "@storybook/react";
import { InputForm } from "../components/InputForm";

export default {
	title: "InputForm",
	component: InputForm,
} as ComponentMeta<typeof InputForm>;

export const Template: ComponentStory<typeof InputForm> = (args) => (
	<InputForm {...args} />
);
