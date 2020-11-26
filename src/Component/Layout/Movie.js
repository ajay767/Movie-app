import React from "react";
import Header from "../sub-component/Header";
import Categories from "./../sub-component/Categories";
import Gallery from "./../sub-component/Gallery";
import icon from "../../assests/icon.svg";
import { connect } from "react-redux";
import { setSelectedMovie } from "../../Actions";

function Movie(props) {
	const setIcon = (currIcon) => {
		var useTag = `<use xlink:href="${icon}#${currIcon}" />`;
		return <svg dangerouslySetInnerHTML={{ __html: useTag }} />;
	};
	console.log(props);
	return (
		<>
			<Header />
			<div className="movie-details-card">
				<div className="movie-details-card--header">
					<img
						className="movie-details-card--header--bg"
						alt="backdrop"
						src="https://image.tmdb.org/t/p/w500/hleqBWYA80UV41FnGS4kGCBFEKM.jpg"
					/>
					<img
						className="movie-details-card--header--poster"
						alt="poster"
						src="https://image.tmdb.org/t/p/w500/tOEOlmLP71IojeJ91dyJ9Nsb8O8.jpg"
					/>
					<span className="movie-details-card--header--play">
						{setIcon("play-button-arrowhead")}
					</span>
				</div>
				<div className="movie-details-card--details">
					<h1>
						The Jungle Book <span className="rating-imbd">IMBd 9.9</span>
					</h1>
					<p>
						A man-cub named Mowgli fostered by wolves. After a threat from the
						tiger Shere Khan, Mowgli is forced to flee the jungle, by which he
						embarks on a journey of self discovery with the help of the panther,
						Bagheera and the free-spirited bear, Baloo.
					</p>
					<iframe
						title="youtube frame"
						src="https://www.youtube.com/embed/YW97nCUE3ZA"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					></iframe>
					<Gallery title="Gallery" />
				</div>
			</div>
			{/* <Categories data title="Related Movies" /> */}
		</>
	);
}
const mapStateToProps = (state) => {
	return {
		selected: state.selected,
		trending: state.trending,
	};
};

export default connect(mapStateToProps)(Movie);
