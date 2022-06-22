import { Button } from "../common/Button";
import { Input } from "../common/Input";
import { AreaCard } from "src/components/common/AreaCard";

type Props = {
	onClose: () => void;
};

export const SideBar: React.FC<Props> = ({ onClose }) => {
	return (
		<div className="relative">
			<div className="absolute top-0 right-0">
				<Button title={"X"} onClick={onClose} />
			</div>
			<div className="flex p-5">
				<Input />
				<Button title={"Search"} onClick={() => console.log("test")} />
			</div>
			<div className="pt-6">
				<AreaCard name={"東京"} onClick={() => console.log("test")} />
			</div>
		</div>
	);
};
