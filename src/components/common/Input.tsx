import React from "react";
import icon from "src/images/297822.svg";

type Props = {
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input: React.FC<Props> = ({ value, onChange }) => {
	return (
		<label className="relative block">
			<span className="absolute inset-y-0 left-0 flex items-center pl-2">
				<img className="h-5 w-5 text-[#616475]" src={icon} />
			</span>
			<input
				className="placeholder:italic w-[268px] h-[48px] bg-[#1E213A] border border-slate-300 rounded-md py-4 pl-11 pr-20 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
				placeholder="Search location"
				type="text"
				name="search"
				value={value}
				onChange={onChange}
			/>
		</label>
	);
};
