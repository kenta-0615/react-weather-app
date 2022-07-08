import React from "react";

type Props = {
	title: string;
	value: string;
};

export const Highlight: React.FC<Props> = ({ title, value }) => {
	return (
		<div className="bg-navy text-white text-center space-y-4 pt-5 h-52 w-80">
			<div className="text-[190%]">{title}</div>
			<div>
				<span className="text-[150%] m-auto pt-10">{value}</span>
			</div>
		</div>
	);
};
