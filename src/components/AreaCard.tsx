import React from "react";
import icon from "../images/rightarrow_121279.svg";

export const AreaCard: React.FC = () => {
	return (
		<button
			type="button"
			className="text-white bg-gray-700 w-96 h-16 px-5 py-2.5 inline-center text-center inline-flex items-center"
		>
			東京
			<img className="w-5 h-5 ml-72" src={icon} />
		</button>
	);
};
