import React from "react";
import "./App.css";
import { Main } from "./pages/Main";
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
			<Main />
		</div>
	);
};

export default App;
