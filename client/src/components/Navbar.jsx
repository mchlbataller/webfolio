import { ReactComponent as Logo } from "../assets/logo.svg";
import React from "react";
import styled from "styled-components";

const NavbarBox = styled.div.attrs({
	className: "w-full bg-white flex items-center justify-center",
})`
	height: 65px;
	padding-left: 20px;
	padding-right: 20px;
	box-shadow: #00000017 0px 4px 10px;
	z-index: 10;
	background: rgba(255, 255, 255, 0.95);
	position: fixed;
`;

const Navbar = (props) => {
	return (
		<>
			<NavbarBox>
				<Logo />
			</NavbarBox>
		</>
	);
};

export default Navbar;
