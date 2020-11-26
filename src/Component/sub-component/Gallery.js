import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";

const Gallery = (props) => {
	const slideImages = [
		"https://image.tmdb.org/t/p/w500/h87XbbFXIGE86osXjQ092UQyJkr.jpg",
		"https://image.tmdb.org/t/p/w500/7rIPjn5TUK04O25ZkMyHrGNPgLx.jpg",
		"https://image.tmdb.org/t/p/w500/tB2w4m0rW62MTufTjRj0gFLMVBP.jpg",
		"https://image.tmdb.org/t/p/w500/wMq9kQXTeQCHUZOG4fAe5cAxyUA.jpg",
		"https://image.tmdb.org/t/p/w500/hleqBWYA80UV41FnGS4kGCBFEKM.jpg",
		"https://image.tmdb.org/t/p/w500/xo4rQ0QxbB32JPbF2rVBMirbOzv.jpg",
	];
	const renderImages = slideImages.map((img, index) => {
		return (
			<SwiperSlide key={index}>
				<div className="gallery">
					<img alt="bg" src={img} />
				</div>
			</SwiperSlide>
		);
	});
	const style = {
		margin: "5px",
	};
	return (
		<>
			<p className="gallery-title">{props.title}</p>
			<Swiper
				style={style}
				loop={false}
				spaceBetween={15}
				slidesPerView={"auto"}
				onSlideChange={() => console.log("slide change")}
				onSwiper={(swiper) => console.log(swiper)}
			>
				{renderImages}
			</Swiper>
		</>
	);
};

export default Gallery;
