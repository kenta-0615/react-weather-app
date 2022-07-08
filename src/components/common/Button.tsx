import React from "react";

type Props = {
	title: string;
	onClick: () => void;
	className?: string;
};

export const Button: React.FC<Props> = ({ title, onClick, className }) => {
	return (
		<button onClick={onClick} className={className}>
			{title}
		</button>
	);
};
