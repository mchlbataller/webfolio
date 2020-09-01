import { Banner } from "./components/Banner";
import React from "react";

export default {
	title: "Portfolio/Banner",
	component: Banner,
};

const Template = (args) => <Banner {...args} />;

export const InfoBanner = Template.bind({});
InfoBanner.args = {
	type: "info",
	forFirstVisitsOnly: true,
	message: `This site uses analytics. 
    By using our site, you agree to the 
    collection of anonymous data to 
    analyze web traffic and optimize 
    your experience. `,
};

export const SuccessBanner = Template.bind({});
SuccessBanner.args = {
	type: "success",
	style: { marginBottom: "60px" },
	message: `You may now use this app offline! 
        Try to disconnect from the internet then see the magic.`,
};
