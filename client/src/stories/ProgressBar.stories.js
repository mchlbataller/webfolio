import { ProgressBar } from "./components/ProgressBar";
import React from "react";

export default {
	title: "Components/ProgressBar",
	component: ProgressBar,
};

const Template = (args) => <ProgressBar {...args} />;

export const DarkProgressBar = Template.bind({});
DarkProgressBar.args({
	label: "JavaScript",
	rating: 7,
});
