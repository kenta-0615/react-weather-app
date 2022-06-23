import { Button } from "../common/Button";
import { Input } from "../common/Input";
import { AreaCard } from "src/components/common/AreaCard";

type Props = {
	onClose: () => void;
};

export const SideBar: React.FC<Props> = ({ onClose }) => {
	return (
		<div>
			<div className="absolute top-3 right-5">
				<Button title={"X"} onClick={onClose} />
			</div>
			<div className="pt-10 pl-8 border-gray-150">
				<Input />
			</div>
			<div className="absolute w-24 h-12 bg-[#3C47E9] py-3 px-5 right-10 top-11">
				<Button title={"Search"} onClick={() => console.log("test")} />
			</div>
			<div className="pl-7 py-10">
				<AreaCard name={"東京"} onClick={() => console.log("test")} />
			</div>
		</div>
	);
};
