import { useState, useEffect } from "react";
import fetchDataFromApi from "./utils/api";

import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration } from "./store/homeSlice";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import SearchResults from "./pages/SearchResults/SearchResults";
import Explore from "./pages/Explore/Explore";
import PageNotFound from "./pages/404/PageNotFound";

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
