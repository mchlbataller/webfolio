import { Header } from "./examples/Header";
import React from "react";

export default {
	title: "Example/Header",
	component: Header,
};

const Template = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
	user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
