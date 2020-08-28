import MuiAlert from "@material-ui/lab/Alert";
import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import visitCounter from "services/visitCounter";

function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export const Banner = ({ type, label, style, forFirstVisitsOnly }) => {
	const [open, setOpen] = React.useState(forFirstVisitsOnly ? false : true);

	React.useEffect(() => {
		if (forFirstVisitsOnly) {
			if (
				localStorage.getItem("visits") !== "1" ||
				process.env.NODE_ENV === "development"
			)
				setTimeout(setOpen, 1000, true);
		}

		visitCounter();
		// eslint-disable-next-line
	}, []);

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setOpen(false);
	};

	return (
		<Snackbar
			open={open}
			autoHideDuration={15000}
			onClose={handleClose}
			anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
			style={style}
		>
			<Alert onClose={handleClose} severity={type}>
				{label}
			</Alert>
		</Snackbar>
	);
};
