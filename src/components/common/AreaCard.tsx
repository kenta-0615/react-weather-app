import React from "react";
import icon from "src/images/images.png";

type Props = {
	name: string;
	onClick: () => void;
};

export const AreaCard: React.FC<Props> = ({ name, onClick }) => {
	return (
		<button
			type="button"
			onClick={onClick}
			className="text-white bg-gray-700 w-96 h-16 px-5 py-2.5 inline-center text-center inline-flex items-center hover:bg-gray-400"
		>
			{name}
			<img className="w-5 h-5 ml-72" src={icon} />
		</button>
	);
};
