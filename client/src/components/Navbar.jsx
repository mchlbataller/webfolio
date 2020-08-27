import { ReactComponent as Logo } from "../assets/logo.svg";
import React from "react";
import { ThemeContext } from "ThemeProvider";
import styled from "styled-components";

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
	transition: 0.5s;

	* {
		color: white;
		margin-left: 32px;
		margin-right: 32px;
	}

	a {
		display: none;
		font-size: 11pt;
		@media (min-width: 1024px) {
			display: block;
		}
	}
`;

const NavbarButton = styled.a`
	&:hover {
		color: blue;
	}
	cursor: pointer;
`;

const Navbar = (props) => {
	const [navigationColor, setNavigationColor] = React.useState("#192835");
	React.useEffect(() => window.addEventListener("scroll", isOnTop), []);
	const theme = React.useContext(ThemeContext);

	const isOnTop = () => {
		if (window.scrollY === 0) {
			setNavigationColor("#192835");
		} else {
			setNavigationColor(null);
		}
	};

	return (
		<>
			<NavbarBox background={navigationColor || theme.navBackground}>
				<NavbarButton onClick={props.about}>About</NavbarButton>
				<NavbarButton onClick={props.skills}>Skills</NavbarButton>
				<Logo onClick={props.top} style={{ cursor: "pointer" }} />
				<NavbarButton onClick={props.app}>Apps</NavbarButton>
				<NavbarButton onClick={props.contact}>Contact</NavbarButton>
			</NavbarBox>
		</>
	);
};

export default Navbar;
