import { Card } from "components";
import React from "react";
import { User } from "assets/icons";
import styled from "styled-components";
const AboutContent = styled.div`
	p {
		font-family: "Open Sans", sans-serif;
		font-weight: 300;
		padding-left: 10px;
		padding-right: 10px;
		margin-bottom: 8px;
	}
`;

export const About = (props) => (
	<>
		<Card height="426px" title="About Me" headerIcon={<User />}>
			<AboutContent>
				<p>
					A student acquiring a bachelor’s degree in Computer
					Engineering, currently on its 3rd year. <br />
					<br />
					My passion is developing websites and web apps, and it made
					me efficient in making these.
				</p>
			</AboutContent>
		</Card>
	</>
);
