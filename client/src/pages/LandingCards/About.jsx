import "aos/dist/aos.css"; // You can also use <link> for styles

import React, { useContext } from "react";

import AOS from "aos";
import { ThemeContext } from "ThemeProvider";
import { User } from "assets/icons";
import styled from "styled-components";
import { useDataStore } from "state/data";

AOS.init();

export const About = () => {
	const data = useDataStore((state) => state.userData);
	const theme = useContext(ThemeContext);
	return (
		<section
			className="flex items-center justify-center flex-col w-full px-5 lg:px-0 lg:w-1/2 mx-auto"
			style={{ height: "80vh" }}
		>
			<User
				style={{ width: "70px", fill: "#9ADBFF" }}
				data-aos="fade-up"
			/>
			<h1
				className="text-center text-lg lg:text-3xl font-bold text-blue-500"
				style={{ fontFamily: "Open Sans" }}
				data-aos="fade-up"
			>
				{data?.about_header}
			</h1>
			<br />
			<div data-aos="fade-up">
				{data.about_text.map((text) => (
					<p
						className="mb-3 text-center text-gray-300 text-sm lg:text-base"
						style={{ fontFamily: "Open Sans" }}
					>
						{text}
					</p>
				))}
			</div>
		</section>
	);
};

export default About;
