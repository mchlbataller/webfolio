import React from "react";
import { construction } from "../assets/images";

const ErrorWidth = (props) => {
	return (
		<div className="hidden lg:block text-center mx-auto">
			<img
				src={construction}
				alt="Page under construction"
				className=" w-2/6 mx-auto"
			/>
			<p className="text-5xl font-regular">Page under construction!</p>
			<p className="text-2xl font-regular">
				We are currently building this site for PCs.
			</p>
			<p className="text-xl font-regular">
				For now, this page could be best viewed on mobiles!
			</p>
		</div>
	);
};

export default ErrorWidth;
