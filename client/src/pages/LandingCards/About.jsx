import { Card } from "components";
import React from "react";
import { ThemeContext } from "ThemeProvider";
import { User } from "assets/icons";
import styled from "styled-components";

const AboutContent = styled.div`
	p {
		font-family: "Open Sans", sans-serif;
		font-weight: 300;
		margin-bottom: 8px;
	}
	@media (min-width: 1024px) {
		width: 75%;
		min-width: 350px;
		p {
			padding-left: 20px;
		}
	}
`;

const AboutHeading = styled.h1`
	font-family: Open Sans;
	@media (min-width: 1024px) {
		margin-left: 20px;
		font-size: 24px;
		line-height: 33px;
	}
	font-style: normal;
	font-weight: bold;
	color: #0094ff;
`;

export const About = (props) => {
	const theme = React.useContext(ThemeContext);

	return (
		<>
			<Card
				height="426px"
				className="mt-16"
				title="About Me"
				headerIcon={<User />}
			>
				<AboutContent>
					<AboutHeading
						color={theme.aboutHeader}
						className="text-xl leading-snug md:leading-normal"
					>
						I'm a Website Designer/Developer.
					</AboutHeading>
					<p className="text-sm md:text-base mt-3">
						A student acquiring a bachelor’s degree in Computer
						Engineering, currently on its 3rd year.
					</p>
					<p className="text-sm md:text-base">
						Having 2 years of experience in the programming and
						designing field, I have made myself efficient in the
						development of these apps.
					</p>
				</AboutContent>
			</Card>
		</>
	);
};
