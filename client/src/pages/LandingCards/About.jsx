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
		width: 70%;
		p {
			padding-left: 20px;
		}
	}
`;

const AboutHeading = styled.h1`
	font-family: Open Sans;
	@media (min-width: 1024px) {
		padding-left: 20px;
	}
	font-style: normal;
	font-weight: bold;
	font-size: 24px;
	line-height: 33px;
	color: #0094ff;
`;

export const About = (props) => {
	const theme = React.useContext(ThemeContext);

	return (
		<>
			<Card
				height="426px"
				className="lg:mt-16"
				title="About Me"
				headerIcon={<User />}
			>
				<AboutContent>
					<AboutHeading color={theme.aboutHeader}>
						I'm a Website Designer/Developer.
					</AboutHeading>
					<p className="text-base mt-3">
						A student acquiring a bachelor’s degree in Computer
						Engineering, currently on its 3rd year.
					</p>
					<p>
						My passion is developing websites and web apps, and it
						made me efficient in making these.
					</p>
				</AboutContent>
			</Card>
		</>
	);
};
