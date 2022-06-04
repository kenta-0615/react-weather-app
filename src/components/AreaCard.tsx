import React from "react";
import icon from "../images/rightarrow_121279.svg";

type Props = {
	name: string;
};

export const AreaCard: React.FC<Props> = ({ name }) => {
	return (
		<button
			type="button"
			onClick={() => console.log("クリックされたよ")}
			className="text-white bg-gray-700 w-96 h-16 px-5 py-2.5 inline-center text-center inline-flex items-center hover:bg-gray-400"
		>
			{name}
			<img className="w-5 h-5 ml-72" src={icon} />
		</button>
	);
};
