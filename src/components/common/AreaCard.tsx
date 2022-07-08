import React from "react";
import icon from "src/images/arrow.svg";

type Props = {
	name: string;
	onClick: () => void;
};

export const AreaCard: React.FC<Props> = ({ name, onClick }) => {
	return (
		<button
			type="button"
			onClick={onClick}
			className="flex relative text-white bg-[#1E213A] w-[350px] h-16 pl-5 pt-5 hover:bg-slate-400"
		>
			{name}
			<img className="absolute w-5 h-5 ml-72 mt-0.5" src={icon} alt="icon" />
		</button>
	);
};
