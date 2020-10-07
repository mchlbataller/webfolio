import React from "react";
import { SocialIcon } from "react-social-icons";
import facebook from "assets/icons/facebook.png";
import styled from "styled-components";

const ContactContainer = styled.div`
	animation-delay: 1.5s;
	width: 100%;
	padding: 2rem 0rem;

	& > * {
		display: block;
		margin-right: 10px;
		width: 40px;
		height: 40px;
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
				style={{ height: "40px", width: "40px" }}
				bgColor="#d93025"
				fgColor="white"
			/>
			<SocialIcon
				url="https://github.com/mchlbataller"
				style={{ height: "40px", width: "40px" }}
				fgColor="#192835"
				bgColor="white"
			/>
			<SocialIcon
				url="https://linkedin.com/in/mchlbataller"
				style={{ height: "40px", width: "40px" }}
				bgColor="#0077b5"
				fgColor="white"
			/>
		</ContactContainer>
	);
};
