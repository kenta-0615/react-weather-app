import React from "react";

type Props = {
	title: string;
	onClick: () => void;
};

export const Button: React.FC<Props> = ({ title, onClick }) => {
	return (
		<button className="bg-slate-600 w-40 h-10" onClick={onClick}>
			{title}
		</button>
	);
};
