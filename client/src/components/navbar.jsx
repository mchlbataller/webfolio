import { ReactComponent as Logo } from "../assets/logo.svg";
import React from "react";
import { ThemeContext } from "theme";
import styled from "styled-components";

const NavbarBox = styled.div.attrs({
	className: "w-full bg-white flex items-center justify-center",
})`
	height: 65px;
	padding-left: 20px;
	padding-right: 20px;
	/* box-shadow: #00000017 0px 4px 10px; */
	z-index: 20;
	background: ${({ background, scrolled }) =>
		scrolled ? "transparent" : background};
	position: fixed;
	backdrop-filter: ${({ scrolled }) => !scrolled && "blur(10px)"};
	transition: 0.25s;

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

const Navbar = ({ about, skills, top, app, contact }) => {
	const [scrolled, isScrolled] = React.useState("transparent");
	React.useEffect(() => window.addEventListener("scroll", isOnTop), []);
	const theme = React.useContext(ThemeContext);

	const isOnTop = () => {
		if (window.scrollY < 250) {
			isScrolled(true);
		} else {
			isScrolled(false);
		}
	};

	return (
		<>
			<NavbarBox background={theme.navBackground} scrolled={scrolled}>
				<NavbarButton onClick={about}>About</NavbarButton>
				<NavbarButton onClick={skills}>Skills</NavbarButton>
				<Logo onClick={top} style={{ cursor: "pointer" }} />
				<NavbarButton onClick={app}>Apps</NavbarButton>
				<NavbarButton onClick={contact}>Contact</NavbarButton>
			</NavbarBox>
		</>
	);
};

export default Navbar;
