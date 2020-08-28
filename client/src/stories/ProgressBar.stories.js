import { ProgressBar } from "./components/ProgressBar";
import React from "react";

export default {
	title: "Components/ProgressBar",
	component: ProgressBar,
	argTypes: {
		backgroundColor: { control: "color" },
		foregroundColor: { control: "color" },
	},
};

const Template = (args) => <ProgressBar {...args} />;

export const Dark = Template.bind({});
Dark.args = {
	label: "JavaScript",
	rating: 7,
};
