import React from "react";

type Props = {
	title: string;
	value: number;
	unit: string;
};

export const Highlight: React.FC<Props> = ({ title, value, unit }) => {
	return (
		<div className="bg-navy text-white text-center py-5 h-52 w-80">
			<div className="font-medium ">{title}</div>
			<div>
				<span className="text-[64px]">{value}</span>
				<span className="text-4xl">{unit}</span>
			</div>
		</div>
	);
};
