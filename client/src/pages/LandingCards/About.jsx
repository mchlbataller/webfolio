import React, { useContext } from "react";

import { ThemeContext } from "ThemeProvider";
import { User } from "assets/icons";
import styled from "styled-components";
import { useDataStore } from "state/data";

export const About = () => {
	const data = useDataStore((state) => state.userData);
	const theme = useContext(ThemeContext);
	return (
		<section
			className="flex items-center justify-center flex-col w-1/2 mx-auto"
			style={{ height: "80vh" }}
		>
			<User style={{ width: "50px", fill: "#9ADBFF" }} />
			<h1
				className="text-center text-3xl font-bold text-blue-500"
				style={{ fontFamily: "Open Sans" }}
			>
				{data?.about_header}
			</h1>
			<br />
			{data.about_text.map((text) => (
				<>
					<p
						className="mb-3 text-center text-gray-300"
						style={{ fontFamily: "Open Sans" }}
					>
						{text}
					</p>
				</>
			))}
		</section>
	);
};

export default About;
