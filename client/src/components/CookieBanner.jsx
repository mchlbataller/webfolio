import Button from "@material-ui/core/Button";
import MuiAlert from "@material-ui/lab/Alert";
import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import { makeStyles } from "@material-ui/core/styles";

function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export const CookieBanner = (props) => {
	const [open, setOpen] = React.useState(false);

	React.useEffect(() => setTimeout(setOpen, 1000, true), []);

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setOpen(false);
	};

	return (
		<Snackbar
			open={open}
			autoHideDuration={5000}
			onClose={handleClose}
			anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
		>
			<Alert onClose={handleClose} severity="info">
				This site uses analytics. By using our site, you agree to the
				collection of anonymous data to analyze web traffic and optimize
				your experience.
			</Alert>
		</Snackbar>
	);
};
