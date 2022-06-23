import React from "react";

type Props = {
	iconUrl: string;
};

export const Option: React.FC<Props> = ({ iconUrl }) => {
	return (
		<button className="w-10 h-10 focus:outline-none rounded-full bg-slate-400 hover:bg-slate-900">
			<img className="m-2 w-5 h-5" src={iconUrl} />
		</button>
	);
};
