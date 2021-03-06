import { Banner } from "components";
import { LinearProgress } from "@material-ui/core";
import React from "react";

export const LoadingPage = () => {
	return (
		<>
			<LinearProgress />
			<div className="flex h-32 text-center w-full items-center">
				<p className="mx-auto text-white font-regular">
					Welcome! <br />
					We're getting things ready for you.
				</p>
			</div>

			<Banner
				autoHideDuration={15000}
				forFirstVisitsOnly
				message="This site uses analytics. 
							By using our site, you agree to the 
							collection of anonymous data to 
							analyze web traffic and optimize 
							your experience. "
				type="info"
			/>
		</>
	);
};
