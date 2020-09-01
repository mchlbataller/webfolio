import { Center } from "./components/AppViews/Center";
import React from "react";

export default {
	title: "Portfolio/AppViews/Center",
	component: Center,
	argTypes: {
		titleTextColor: { control: "color" },
	},
};

const Template = (args) => <Center {...args} />;

export const Default = Template.bind({});
const url =
	"https://lh3.googleusercontent.com/bFdzYdiUuPyg_DVDEGcX7d71EFq4fPluYgDxeD59OmkDplz6cESEitxixs9MqaELN5bANQ1CtJsCRvsOjwGwqQtOno6vj8HmvipAD4aDeii_7v2pnGLR8bSnCesFo6lDSYzbid45AQkCDxmiEHfoUgLqPLApGzF5h37fxfkPgy98QMDGWwXGn9-I4h0h_tvF-I5LkfDwm3tFjRg3G7Ze9hCHC5B1eUJnBBHOaaF-daC3chiEef-oEmWtYFKBxye9rfNEG4Jy9geG_tFr89oSmG1jo2fKASzAGG6JgIco2-XeTXnnrKpkzCICW8LTDKrWfQEV4RDLHF47L2UBNQI0H8VUPSudbQF_SAE8WGMQv56PicneoJPlWekOneNM9UmFjTVvA6kHFcb7zT33O_YHaz_k7UanZQA5DNcgOxW7c2kcx8RsE_5TyU8NpRR1xj6dmfX1KJlaPBNIqvilFEFh3nZZvDkUUR8-blOSsQt9H5X21i4Int2VM6OjIY_wid4fmjIzzq0p0QqLHFqDhLdPmHmYhhE6GUdpeUsz3Grdphd7fJVh1ezJ2UsplkqvV5T1mx0F5HxjCK6JohJElcGix0MBTl7EntgZoUuq9OhA8M65RiPTtBy734-z-cpxpnk6Xnsm6SBGHfi6hGGftXuFZ4WVlKEbYKsQBw-ZMsaZLhtHLBzT1dFRdqmGk_p20g=w1560-h790-no?authuser=0";
Default.args = {
	imgSrc: url,
};
