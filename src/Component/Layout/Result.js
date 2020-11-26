import React from "react";
import Header from "../sub-component/Header";
class Result extends React.Component {
	result = [
		"https://image.tmdb.org/t/p/w500/AuEzNLF8yvzd169guYEFisqvy5z.jpg",
		"https://image.tmdb.org/t/p/w500/7rIPjn5TUK04O25ZkMyHrGNPgLx.jpg",
		"https://image.tmdb.org/t/p/w500/nZS8nh0q3sUHgSZGIhSnTQio5rR.jpg",
		"https://image.tmdb.org/t/p/w500/wMq9kQXTeQCHUZOG4fAe5cAxyUA.jpg",
		"https://image.tmdb.org/t/p/w500/uJMknKxZagbhAYiiMjEaFnsZzRR.jpg",
		"https://image.tmdb.org/t/p/w500/gevSrXe80v51mrE9bTk5eO1dLdU.jpg",
		"https://image.tmdb.org/t/p/w500/mYROqds0kcN9tlHCPNxaRAV5jUO.jpg",
	];

	renderCards = this.result.map((curr) => {
		return (
			<div className="movie-poster">
				<img alt="movie" src={curr} />
			</div>
		);
	});

	render() {
		return (
			<>
				<Header />
				<h1>{this.props.match.params.category}</h1>
			</>
		);
	}
}

export default Result;
