import { Email, Linkedin, Phone, Twitter } from "assets/icons";

import { Card } from "components";
import React from "react";
import { User } from "assets/icons";
import facebook from "assets/icons/facebook.png";

const Social = (props) => {
	return (
		<>
			<div className="flex items-center mt-5">
				<img src={facebook} alt="facebook" width="35px" />
				<p
					className="ml-5 text-sm text-blue-600"
					onClick={(e) =>
						window.open("https://www.facebook.com/mchlbataller")
					}
				>
					facebook.com/mchlbataller
				</p>
			</div>
		</>
	);
};

export const Contact = (props) => {
	return (
		<>
			<Card title="Contact Me" headerIcon={<User />}>
				<div className="mx-auto w-full pl-5 md:pl-10">
					<div className="flex items-center">
						<Email width="35px" />
						<p className="ml-5">mchlbataller@gmail.com</p>
					</div>

					<div className="flex items-center mt-5">
						<Phone />
						<p className="ml-5">+639101840284</p>
					</div>
					<Social />
				</div>
			</Card>
		</>
	);
};
