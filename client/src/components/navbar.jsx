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

	const clickHandlers = [about, skills, app, contact];
	const labels = ["About", "Skills", "Apps", "Contact"];
	const navbarMenus = [];
	clickHandlers.forEach((e, index) =>
		navbarMenus.push({ onClick: e, label: labels[index] })
	);

	return (
		<>
			<NavbarBox background={theme.navBackground} scrolled={scrolled}>
				{navbarMenus.map(({ onClick, label }, key) => (
					<>
						<NavbarButton
							onClick={onClick}
							key={key}
							data-aos="zoom-in-down"
							data-aos-delay={key * 100 + 2000}
						>
							{label}
						</NavbarButton>
						{key === 1 && (
							<Logo
								onClick={top}
								style={{ cursor: "pointer" }}
								data-aos="fade-down"
							/>
						)}
					</>
				))}
			</NavbarBox>
		</>
	);
};

export default Navbar;
