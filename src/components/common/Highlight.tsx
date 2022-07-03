import React from "react";

type Props = {
	title: string;
	value: string;
};

export const Highlight: React.FC<Props> = ({ title, value }) => {
	return (
		<div className="bg-navy text-white text-center pt-14 h-52 w-80">
			<div className="font-medium">{title}</div>
			<div>
				<span className="text-3xl m-auto pt-10">{value}</span>
			</div>
		</div>
	);
};
