import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Dummy } from "./pages/dummy";

type Data = {
	aera: string;
	publicTime: string;
};

export const App: React.FC = () => {
	const urlAPI = "https://weather.tsukumijima.net/api/forecast";
	const [datas, setDatas] = useState([]);
	console.log(axios.defaults.baseURL);
	useEffect(() => {
		axios.get(urlAPI).then((res) => {
			setDatas(res.data);
		});
	}, []);
	console.log(datas);
	return (
		<div>
			<h1>Axios Test</h1>
			<div>
				{datas.map((data: Data) => (
					<div>
						{data.aera}:{data.publicTime}
					</div>
				))}
				<Dummy />
			</div>
		</div>
	);
};

export default App;
