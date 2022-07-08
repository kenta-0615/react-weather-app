import React from "react";
import icon from "src/images/297822.svg";

type Props = {
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	className?: string;
};

export const Input: React.FC<Props> = ({ value, onChange, className }) => {
	return (
		<label className="relative block">
			<span className="absolute inset-y-0 flex items-center pl-[3%]">
				<img className="h-5 w-5 text-[#616475]" src={icon} />
			</span>
			<input
				className={className}
				placeholder="Search location"
				type="text"
				name="search"
				value={value}
				onChange={onChange}
			/>
		</label>
	);
};
