import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { connect } from "react-redux";

import { setSelectedMovie } from "../../Actions";

import "swiper/swiper.scss";

const CarouselElement = (props) => {
	let renderImages;
	if (props.data) {
		renderImages = props.data.map((object, index) => {
			return (
				<SwiperSlide key={index}>
					<Link to="/movie/title/hero">
						<div
							className="poster"
							onClick={() => this.setSelectedMovie(object.id)}
						>
							<img
								alt="bg"
								src={`https://image.tmdb.org/t/p/w500${object.poster_path}`}
							/>
						</div>
					</Link>
				</SwiperSlide>
			);
		});
	}
	const style = {
		margin: "5px",
	};
	return (
		<>
			<Link className="category-title" to={props.pageTo}>
				<h2>{props.title}</h2>
			</Link>
			<Swiper
				style={style}
				loop={false}
				spaceBetween={10}
				slidesPerView={"auto"}
			>
				{renderImages}
			</Swiper>
		</>
	);
};

export default connect(null, { setSelectedMovie })(CarouselElement);
