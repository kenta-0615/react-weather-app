import React from "react";
import { LeftScreen } from "../components/main/LeftScreen";
import { RightScreen } from "../components/main/RightScreen";

export const Main: React.FC = () => {
	return (
		<div className="flex">
			<div className="w-1/3">
				<LeftScreen />
			</div>
			<div className="w-2/3 bg-sky-700">
				<RightScreen />
			</div>
		</div>
	);
};
