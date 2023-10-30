import React, { useState } from "react";
import "./styles.scss";

const MovieCard = () => {
	const [mouseOver, setMouseOver] = useState(null);

	const handleHoverEnter = () => {
		setMouseOver(true);
	};

	const handleHoverExit = () => {
		setMouseOver(false);
	};

	return (
		<div
			className="movieCard__container"
			onMouseEnter={handleHoverEnter}
			onMouseLeave={handleHoverExit}
		>
			<div
				className={`movieCard__overview ${
					mouseOver ? "animateEntry" : mouseOver != null ? "animateExit" : ""
				}`}
			>
				hbxABNjknasjnxnsjk
			</div>
			<div className="movieCard__summary">
				<img
					className="movieBackdrop"
					src="https://image.tmdb.org/t/p/w500/cHkhb5A4gQRK6zs6Pv7zorHs8Nk.jpg"
					height="100%"
					width="100%"
					alt="movie-backdrop"
				/>
				<div className="movieTitle">Furious 7</div>
				<div className="movieCard__footer">
					<div className="movieReleaseDate">2015-04-01</div>
					<div className="moviePopularity">68.343</div>
				</div>
			</div>
		</div>
	);
};

export default MovieCard;
