import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/swiper.scss";
import { Link } from "react-router-dom";
import Loader from "./loader";
SwiperCore.use([Autoplay]);

const CarouselElement = (props) => {
	let renderImages;
	if (props.data) {
		renderImages = props.data.map((curr, index) => {
			return (
				<SwiperSlide key={index}>
					<Link to="/movie/title/hero">
						<div className="header-carsoule">
							<img
								className="backdrop"
								alt="bg"
								src={`https://image.tmdb.org/t/p/w500${curr.backdrop_path}`}
							/>
						</div>
					</Link>
				</SwiperSlide>
			);
		});
	}

	return (
		<Swiper
			loop={true}
			autoplay={{
				delay: 2000,
				disableOnInteraction: false,
			}}
			spaceBetween={0}
			slidesPerView={"auto"}
		>
			{renderImages ? renderImages : <Loader />}
		</Swiper>
	);
};

export default CarouselElement;
