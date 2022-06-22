import React from "react";

type Props = {
	title: string;
	onClick: () => void;
};

export const Button: React.FC<Props> = ({ title, onClick }) => {
	return <button onClick={onClick}>{title}</button>;
};
