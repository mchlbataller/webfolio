import { Card } from "./components/Card/Card";
import React from "react";

export default {
	title: "Portfolio/Card",
	component: Card,
	argTypes: {
		backgroundColor: { control: "color" },
		headerBackgroundColor: { control: "color" },
		contentColor: { control: "color" },
		headerTitleColor: { control: "color" },
	},
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
	title: "Change",
};
