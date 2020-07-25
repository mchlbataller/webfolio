import React from "react";
import { SocialIcon } from "react-social-icons";
import facebook from "assets/icons/facebook.png";
import facebookIdle from "assets/icons/facebook-gray.png";
import styled from "styled-components";

const ContactContainer = styled.div`
	animation-delay: 0s;
	width: 100%;

	& > * {
		display: block;
		margin-right: 10px;
		width: 32px;
		height: 32px;
	}
`;

export const Contact = (props) => {
	return (
		<ContactContainer className="animate__animated animate__fadeIn flex flex-row">
			<img
				src={facebook}
				alt="facebook"
				className="cursor-pointer flex-none"
				onClick={() =>
					window.open("https://www.facebook.com/mchlbataller")
				}
			/>
			<SocialIcon
				url="mailto:mchlbataller@gmail.com"
				style={{ height: "32px", width: "32px" }}
				bgColor="#d93025"
				fgColor="white"
			/>
			<SocialIcon
				url="https://github.com/mchlbataller"
				style={{ height: "32px", width: "32px" }}
			/>
			<SocialIcon
				url="https://linkedin.com/in/mchlbataller"
				style={{ height: "32px", width: "32px" }}
			/>
		</ContactContainer>
	);
};
