import PropTypes from 'prop-types'

export const propTypes = {
	/**
	 * Title Text Color
	 */
	titleTextColor: PropTypes.string,
	/**
	 * URL of image to display
	 */
	imgSrc: PropTypes.string.isRequired,
	/**
	 * Title of the app
	 */
	appTitle: PropTypes.string.isRequired,
	/**
	 * Link to app
	 */
	linkToApp: PropTypes.string,
	/**
	 * Description of the app
	 */
    appDescription: PropTypes.string.isRequired,
    /**
     * Is the app the first in the array?
     */
    firstApp: PropTypes.bool
}

export const defaultProps = {
	titleTextColor: "white",
	imgSrc: "img is blank",
	appTitle: "App Title Goes Here",
	linkToApp: null,
    appDescription: "Description goes here.",
    top: false
}