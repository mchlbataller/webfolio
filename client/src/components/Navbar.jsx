import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as Menu } from "../assets/icons/menu.svg";
import React from "react";
import styled from "styled-components";

const NavbarBox = styled.div.attrs({
	className: "w-full bg-white flex items-center",
})`
    height: 78px;
    padding-left: 20px;
    padding-right 20px;
    box-shadow: #00000017 0px 4px 10px;
    z-index: 10;
    position: fixed;
`;

const Navbar = (props) => {
	return (
		<>
			<NavbarBox>
				<div className="flex-grow">
					<Logo />
				</div>
				<Menu />
			</NavbarBox>
		</>
	);
};

export default Navbar;
