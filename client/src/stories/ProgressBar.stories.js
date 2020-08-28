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

export const DarkProgressBar = Template.bind({});
DarkProgressBar.args = {
	label: "JavaScript",
	rating: 7,
	foregroundColor: "#23629A",
	backgroundColor: "#efefef",
};
