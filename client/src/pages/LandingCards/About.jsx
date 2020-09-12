import { Card } from "components";
import React from "react";
import { ThemeContext } from "ThemeProvider";
import { User } from "assets/icons";
import styled from "styled-components";
import { useDataStore } from "state/data";

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

	const data = useDataStore((state) => state.userData);

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
						{data && data.about_header}
					</AboutHeading>
					<br />
					{data &&
						data.about_text.map((text) => (
							<p className="text-sm">{text}</p>
						))}
				</AboutContent>
			</Card>
		</>
	);
};

export default About