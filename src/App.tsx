import React from "react";
import "./App.css";
import { Dummy } from "./pages/dummy";
import axios from "axios";

const App: React.FC = () => {
	const getWeather = async () => {
		const response = await axios.get(
			"https://weather.tsukumijima.net/api/forecast/city/400040"
		);
		console.log(response);
	};
	console.log(getWeather());
	return (
		<div>
			<Dummy />
		</div>
	);
};

export default App;
