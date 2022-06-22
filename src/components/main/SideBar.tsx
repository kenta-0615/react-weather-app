import { Button } from "../common/Button";
import { Input } from "../common/Input";
import { AreaCard } from "src/components/common/AreaCard";

type Props = {
	onClose: () => void;
};

export const SideBar: React.FC<Props> = ({ onClose }) => {
	return (
		<div>
			<div className=" pt-1 pl-36 h-5 w-0.5">
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
