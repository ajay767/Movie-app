import React from "react";
import Header from "../sub-component/Header";
import Carsouel from "../sub-component/Carousel";
import Categories from "../sub-component/Categories";
import { connect } from "react-redux";
import { fetchPopular, fetchTrending, todaysHotShows } from "../../Actions";

class Home extends React.Component {
	componentDidMount() {
		this.props.todaysHotShows();
		setTimeout(this.props.fetchTrending(), 1000);
		setTimeout(this.props.fetchPopular(), 1000);
	}
	render() {
		return (
			<>
				<Header />
				{/* <Carsouel data={this.props.hotShow} /> */}
				<Categories
					title="Popular"
					data={this.props.popular}
					pageTo="/movie/Trending"
				/>
				<Categories
					title="Trending"
					data={this.props.trending}
					pageTo="/movie/Popular Search"
				/>
			</>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		popular: state.popular,
		trending: state.trending,
		hotShow: state.hotShow,
	};
};
export default connect(mapStateToProps, {
	fetchPopular,
	fetchTrending,
	todaysHotShows,
})(Home);
