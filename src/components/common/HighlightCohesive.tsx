import React from "react";
import { Highlight } from "./Highlight";

export const HighlightCohesive: React.FC = () => {
	return (
		<div className="grid gap-4 place-content-evenly m-4">
			<div className="flex space-x-4">
				<Highlight title={"風向き"} value={7} unit={"mph"} />
				<Highlight title={"風向き"} value={7} unit={"mph"} />
			</div>
			<div className="flex space-x-4">
				<Highlight title={"風向き"} value={7} unit={"mph"} />
				<Highlight title={"風向き"} value={7} unit={"mph"} />
			</div>
		</div>
	);
};
