import React from "react";
import icon from "src/images/297822.svg";

export const Input: React.FC = () => {
	return (
		<label className="relative block">
			<span className="absolute inset-y-0 left-0 flex items-center pl-2">
				<img className="h-5 w-5 fill-slate-300" src={icon} />
			</span>
			<input
				className="placeholder:italic placeholder:text-slate-400 block bg-slate-600 border border-slate-300 rounded-md py-4 pl-10 pr-20 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
				placeholder="Search location"
				type="text"
				name="search"
			/>
		</label>
	);
};
