import React from "react";

type Props = {
	title: string;
	value: string;
};

export const Highlight: React.FC<Props> = ({ title, value }) => {
	return (
		<div className="bg-navy text-white text-center text-3xl space-y-4 pt-5 h-52 w-80">
			<div className="font-medium">{title}</div>
			<div>
				<span className="text-3xl m-auto pt-10">{value}</span>
			</div>
		</div>
	);
};
