import { Paper, Slide, useScrollTrigger } from "@material-ui/core";

import { ReactComponent as Logo } from "../assets/logo.svg";
import React from "react";
import { ThemeContext } from "theme";
import { blue } from "@material-ui/core/colors";
import styled from "styled-components";

const NavbarBox = styled(Paper)`
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;

	height: ${({ isOnTop }) => (isOnTop ? "75px" : "65px")};
	padding-left: 20px;
	padding-right: 20px;
	z-index: 20;
	background-color: ${({ background, isOnTop }) =>
		isOnTop ? "transparent" : background};
	${({ isOnTop }) =>
		!isOnTop ? `backdrop-filter: blur(10px);` : `box-shadow: none;`};

	position: fixed;
	transition: 0.2s !important;

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
		color: ${blue[300]};
	}
	cursor: pointer;
`;

const Navbar = ({ about, skills, top, app, contact }) => {
	const theme = React.useContext(ThemeContext);

	const clickHandlers = [about, skills, app, contact];
	const labels = ["About", "Skills", "Apps", "Contact"];
	const navbarMenus = [];
	clickHandlers.forEach((e, index) =>
		navbarMenus.push({ onClick: e, label: labels[index] })
	);

	const trigger = useScrollTrigger({ threshold: 300 });
	const backgroundTrigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 100,
	});

	return (
		<Slide appear={false} direction="down" in={!trigger}>
			<NavbarBox
				background={theme.navBackground}
				isOnTop={!backgroundTrigger}
			>
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
		</Slide>
	);
};

export default Navbar;
