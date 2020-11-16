import MuiAlert from "@material-ui/lab/Alert";
import PropTypes from "prop-types";
import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import siteIsNowVisited from "services/siteIsNowVisited";

function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}

/**
 * Displays website notifications.
 * Uses SnackBar from Material-UI.
 */
export const Banner = ({
	type,
	message,
	style,
	forFirstVisitsOnly: triggerOnlyOnFirstVisit,
	autoHideDuration,
}) => {
	const [open, setOpen] = React.useState(
		triggerOnlyOnFirstVisit ? false : true
	);

	React.useEffect(() => {
		if (triggerOnlyOnFirstVisit) {
			// If the banner needs to be showed only on first site visits,
			// then we will open the banner in 5 seconds.
			//
			// Note that we are ignoring the 'first visits condition'
			// on development environments.
			if (
				localStorage.getItem("visits") ||
				process.env.NODE_ENV === "development"
			)
				setTimeout(setOpen, 5000, true);
		}

		siteIsNowVisited();
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
			autoHideDuration={autoHideDuration}
			onClose={handleClose}
			anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
			style={style}
		>
			<Alert onClose={handleClose} severity={type}>
				{message}
			</Alert>
		</Snackbar>
	);
};

Banner.propTypes = {
	/**
	 * The type of message in the banner.
	 */
	type: PropTypes.oneOf(["error", "warning", "info", "success"]),
	/**
	 * Does this component **only need to be triggered on first site visit**?
	 */
	forFirstVisitsOnly: PropTypes.bool,
	/**
	 * Notification message
	 */
	message: PropTypes.string.isRequired,
	/**
	 * Hides the banner after \_\_ milliseconds.
	 */
	autoHideDuration: PropTypes.number,
	/**
	 * Additional styling overrides
	 */
	style: PropTypes.object,
};

Banner.defaultProps = {
	type: "info",
	forFirstVisitsOnly: false,
	autoHideDuration: 5000,
};
