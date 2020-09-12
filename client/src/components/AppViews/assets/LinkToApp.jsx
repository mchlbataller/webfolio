import {Link} from './styles';
import React from "react";

const LinkToApp = ({ linkToApp }) => !linkToApp ? (
	<p className="text-xs text-gray-600">
		App is currently not available for viewing
	</p>
) : (
	<Link onClick={() => window.open("https://" + linkToApp)}>{linkToApp}</Link>
);

export default LinkToApp