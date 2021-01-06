import React from "react";

export const Footer = (props) => {
	return (
		<div className="w-full bg-gray-900 py-5 md:py-2 px-2 md:px-32 md:flex items-center justify-center border-t-2 border-gray-800">
			<p className="text-gray-600 text-sm mb-2 md:flex-grow text-center md:text-left">
				Made with {"<3"} by Michael Bataller. <br />
				Site powered by React and JavaScript
			</p>
			<p className="text-gray-600 text-sm text-center md:text-right">
				&copy; Copyright, 2021. All Rights Reserved.
			</p>
		</div>
	);
};
