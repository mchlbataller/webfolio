import React from "react";
import { Right } from "./components/AppViews/Right";

export default {
	title: "Portfolio/AppViews/Right",
	component: Right,
	argTypes: {
		titleTextColor: { control: "color" },
	},
};

const Template = (args) => <Right {...args} />;

export const Default = Template.bind({});
const url =
	"https://eastasia1-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=png&cs=fFNQTw&docid=https%3A%2F%2Fpupedu-my.sharepoint.com%3A443%2F_api%2Fv2.0%2Fdrives%2Fb!uTROqWoQMUmmk_bg54qpEV3I9X858PBJvb9UuV0_n69D0b1b_hhVT4pL1H9S4voa%2Fitems%2F01NEC4KZN5FTLRC5T44BFYNQJQMNYOOJYE%3Fversion%3DPublished&access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvcHVwZWR1LW15LnNoYXJlcG9pbnQuY29tQDRkYTk4NTcxLWRjZWEtNDgzOS04ZmIxLTBiZGQ1ZGM5NjlmOSIsImlzcyI6IjAwMDAwMDAzLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMCIsIm5iZiI6IjE1OTg5MjU4NjkiLCJleHAiOiIxNTk4OTQ3NDY5IiwiZW5kcG9pbnR1cmwiOiI5TDRxUGNNWHdwR1dBVk9VTE15b2JFVVUwNEdWb2UyVVBpUmtiRFNGWHdNPSIsImVuZHBvaW50dXJsTGVuZ3RoIjoiMTE2IiwiaXNsb29wYmFjayI6IlRydWUiLCJjaWQiOiJOVFk1T1RjMU9XWXRPVEE1Tmkwd01EQXdMVFU1TjJZdE5EaGxOV1EwWWpNME4yTTEiLCJ2ZXIiOiJoYXNoZWRwcm9vZnRva2VuIiwic2l0ZWlkIjoiWVRrMFpUTTBZamt0TVRBMllTMDBPVE14TFdFMk9UTXRaalpsTUdVM09HRmhPVEV4IiwibmFtZWlkIjoiMCMuZnxtZW1iZXJzaGlwfHVybiUzYXNwbyUzYWFub24jODVhYTUyNDc5NDgyOGE3ZGUxOGRkOTQ2MDE4MzYzNjNlNTUwMDA0NmYyNmMwZmYzYzVkOTAyZGRmMjlhNzA3NyIsIm5paSI6Im1pY3Jvc29mdC5zaGFyZXBvaW50IiwiaXN1c2VyIjoidHJ1ZSIsImNhY2hla2V5IjoiMGguZnxtZW1iZXJzaGlwfHVybiUzYXNwbyUzYWFub24jODVhYTUyNDc5NDgyOGE3ZGUxOGRkOTQ2MDE4MzYzNjNlNTUwMDA0NmYyNmMwZmYzYzVkOTAyZGRmMjlhNzA3NyIsInNoYXJpbmdpZCI6IjZ2bzIzajFpWmthQUU1alF6TVplK0EiLCJ0dCI6IjAiLCJ1c2VQZXJzaXN0ZW50Q29va2llIjoiMiJ9.K0FaakhsSDNWT0JlYjRhT3lSdENvMmcxZUpXM09RYk52MGYreEZaZW1HUT0&encodeFailures=1&srcWidth=&srcHeight=&width=1920&height=929&action=Access";
Default.args = {
	imgSrc: url,
};