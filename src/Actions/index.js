import axios from "axios";

export const fetchPopular = () => async (dispatch) => {
	const link = `https://api.themoviedb.org/3/movie/popular?api_key=8f5416e8a400416d6e3bc85eb2b53e0c&language=en-US&page=1`;

	const response = await axios.get(link);
	response.splice(0, 8);

	dispatch({
		type: "PopularCategory",
		payload: response.data.results,
	});
};

export const fetchTrending = () => async (dispatch) => {
	const link = `https://api.themoviedb.org/3/movie/top_rated?api_key=8f5416e8a400416d6e3bc85eb2b53e0c&language=en-US&page=1`;

	const response = await axios.get(link);
	response.splice(0, 8);

	dispatch({
		type: "TrendingCategory",
		payload: response.data.results,
	});
};

export const todaysHotShows = () => async (dispatch) => {
	const link = `https://api.themoviedb.org/3/movie/now_playing?api_key=8f5416e8a400416d6e3bc85eb2b53e0c&language=en-US&page=1`;

	const response = await axios.get(link);
	response.splice(0, 8);

	dispatch({
		type: "todaysHotShows",
		payload: response.data.results,
	});
};

export const setSelectedMovie = (id) => async (dispatch) => {
	const link = `https://api.themoviedb.org/3/movie/${id}?api_key=8f5416e8a400416d6e3bc85eb2b53e0c&language=en-US`;

	const response = await axios.get(link);
	console.log(response.data.results);
	dispatch({
		type: "selectedMovie",
		payload: response.data.results,
	});
};
