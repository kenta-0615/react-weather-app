import React from "react";
import { Button } from "../common/Button";
import { Input } from "../common/Input";
import { AreaCard } from "src/components/common/AreaCard";
import { useState } from "react";

export const SideBar: React.FC = () => {
	const [shown, setShown] = useState(false);
	const shownSidebar = () => {
		setShown(true);
	};
	const drawerClosed = () => {
		setShown(false);
	};
	return (
		<div className="h-full">
			<div className="flex">
				<Input />
				<Button title={"Search"} onClick={shownSidebar} />
			</div>
			<div>
				<AreaCard name={"東京"} onClick={() => console.log("test")} />
			</div>
		</div>
	);
};
