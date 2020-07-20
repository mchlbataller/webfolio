import { ReactComponent as Logo } from "../assets/logo.svg";
import React from "react";
import styled from "styled-components";
import { ThemeContext } from "ThemeProvider";

const NavbarBox = styled.div.attrs({
	className: "w-full bg-white flex items-center justify-center",
})`
	height: 65px;
	padding-left: 20px;
	padding-right: 20px;
	box-shadow: #00000017 0px 4px 10px;
	z-index: 20;
	background: ${(props) => props.background};
	position: fixed;

	* {
		color: white;
		margin-left: 32px;
		margin-right: 32px;
	}

	p {
		display: none;
		font-size: 11pt;
		@media (min-width: 1024px) {
			display: block;
		}
	}
`;

const Navbar = (props) => {
	const theme = React.useContext(ThemeContext);
	return (
		<>
			<NavbarBox background={theme.navBackground}>
				<p>Contact</p>
				<p>About</p>
				<Logo />
				<p>Apps</p>
				<p>Resume</p>
			</NavbarBox>
		</>
	);
};

export default Navbar;
