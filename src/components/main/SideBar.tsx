import React from "react";
import { Button } from "../common/Button";
import { Input } from "../common/Input";
import { AreaCard } from "src/components/common/AreaCard";
import { useState } from "react";

export const SideBar: React.FC = () => {
	const [isShownSidebar, setIsShownSidebar] = useState(false);

	return (
		<div className="relative ">
			{isShownSidebar ? (
				<div className="flex text-gley fixed left-10 top-6 z-50">
					<Button
						title={"X"}
						onClick={() => setIsShownSidebar(!isShownSidebar)}
					/>
				</div>
			) : (
				<div className="fixed flex cursor-pointer left-20 top-6">
					<Button
						title={"Search for places"}
						onClick={() => setIsShownSidebar(!isShownSidebar)}
					/>
				</div>
			)}
			<div
				className={`fixed top-0 bg-[#F6F9FE] w-1/3 h-full left-0 ${
					isShownSidebar ? "translate-y-6" : "translate-y-full"
				}`}
			>
				<div className="flex m-4">
					<Input />
					<Button title={"Search"} onClick={() => console.log("test")} />
				</div>
				<div>
					<AreaCard name={"東京"} onClick={() => console.log("test")} />
				</div>
			</div>
		</div>
	);
};
