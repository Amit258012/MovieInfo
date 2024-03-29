import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
	Authorization: "Bearer " + TMDB_TOKEN,
};

const fetchDataFromApi = async (url, params) => {
	try {
		const { data } = await axios.get(BASE_URL + url, {
			headers,
			params,
		});
		console.log(TMDB_TOKEN);
		return data;
	} catch (error) {
		console.log("HI");
		console.log(error);
		return error;
	}
};

export default fetchDataFromApi;
