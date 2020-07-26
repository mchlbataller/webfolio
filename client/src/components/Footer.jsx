import React from "react";

export const Footer = (props) => {
	return (
		<div className="w-full bg-gray-900 py-2 px-2 md:px-32 flex items-center justify-center border-t-2 border-gray-800">
			<p className="text-gray-600 text-sm flex-grow">
				&copy; Copyright, 2020. All Rights Reserved.
			</p>
			<p className="text-gray-600 text-sm md:text-right">
				Made with {"<3"} by Michael Bataller. <br />
				Site powered by React and JavaScript
			</p>
		</div>
	);
};
