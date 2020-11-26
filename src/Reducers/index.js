import { combineReducers } from "redux";

const popular = (state = [], action) => {
	switch (action.type) {
		case "PopularCategory":
			return action.payload;
		default:
			return state;
	}
};
const trending = (state = [], action) => {
	switch (action.type) {
		case "TrendingCategory":
			return action.payload;
		default:
			return state;
	}
};
const hotShow = (state = [], action) => {
	switch (action.type) {
		case "todaysHotShows":
			return action.payload;
		default:
			return state;
	}
};

const selected = (state = [], action) => {
	switch (action.type) {
		case "selectedMovie":
			return action.payload;
		default:
			return state;
	}
};

export default combineReducers({
	popular,
	trending,
	hotShow,
	selected,
});
