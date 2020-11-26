import React from "react";
import "../../Style/Loader.scss";
function loader() {
	return (
		<div class="lds-ripple">
			<div></div>
			<div></div>
		</div>
	);
}

export default loader;
