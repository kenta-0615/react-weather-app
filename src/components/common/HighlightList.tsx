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
		<div>
			<div className="flex space-x-5">
				{highlights.map((highlight) => (
					<Highlight title={highlight.title} value={highlight.value} />
				))}
			</div>
		</div>
	);
};
