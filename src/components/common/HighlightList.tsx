import React from "react";
import { Highlight } from "./Highlight";

type Highlight = {
	title: string;
	value: string;
};

type Props = {
	highlights: Highlight[];
};

export const HighlightList: React.FC<Props> = ({ highlights }) => {
	return (
		<div className="grid gap-4 place-content-evenly m-20">
			<div className="flex space-x-4">
				{highlights.map((highlight) => (
					<Highlight title={highlight.title} value={highlight.value} />
				))}
			</div>
		</div>
	);
};
