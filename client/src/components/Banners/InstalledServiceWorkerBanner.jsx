import MuiAlert from "@material-ui/lab/Alert";
import React from "react";
import Snackbar from "@material-ui/core/Snackbar";

function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export const InstalledServiceWorkerBanner = (props) => {
	const [open, setOpen] = React.useState(true);

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setOpen(false);
	};

	return (
		<Snackbar
			open={open}
			autoHideDuration={10000}
			onClose={handleClose}
			anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
			style={{ marginBottom: "60px" }}
		>
			<Alert onClose={handleClose} severity="success">
				You may now use this app offline! Try to disconnect from the
				internet then see the magic.
			</Alert>
		</Snackbar>
	);
};
