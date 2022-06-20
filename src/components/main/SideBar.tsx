import { Button } from "../common/Button";
import { Input } from "../common/Input";
import { AreaCard } from "src/components/common/AreaCard";
import React, { useState } from "react";

export const SideBar: React.FC = () => {
	const [isClose, setIsClose] = useState(true);

	return (
		<div>
			{isClose && (
				<div className="bg-red-500 w-1/3 h-hull">
					<div className="flex w-1/3">
						<Button title={"X"} onClick={() => setIsClose(!isClose)} />
						<Input />
						<Button title={"Search"} onClick={() => console.log("test")} />
					</div>
					<div>
						<AreaCard name={"東京"} onClick={() => console.log("test")} />
					</div>
				</div>
			)}
		</div>
	);
};
