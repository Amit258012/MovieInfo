/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
// import fetchDataFromApi from "./utils/fetchDataFromApi";
import fetchDataFromApi from "./utils/api";

import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration } from "./store/homeSlice";

function App() {
	const dispatch = useDispatch();
	const { url } = useSelector((state) => state.home);
	console.log(url);
	useEffect(() => {
		apiTesting();
	}, []);
	const apiTesting = () => {
		fetchDataFromApi("/movie/popular").then((response) => {
			console.log(response);
			dispatch(getApiConfiguration(response));
		});
	};
	return (
		<div className="App">
			App
			{url?.total_pages}
		</div>
	);
}

export default App;
