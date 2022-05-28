import React from "react";

type Props = {
	title: string;
};

export const Button: React.FC<Props> = ({ title }) => {
	return (
		<div className="relative flex justify-between mb-10">
			<button className="bg-slate-600 w-40 h-10">{title}</button>
		</div>
	);
};
