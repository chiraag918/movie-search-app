import React, { useState } from "react";
import "./styles.scss";

const MovieCard = ({
	movie: { title, overview, release_date, popularity },
}) => {
	const [mouseOver, setMouseOver] = useState(null);

	const handleHoverEnter = () => {
		setMouseOver(true);
	};

	const handleHoverExit = () => {
		setMouseOver(false);
	};

	return (
		<div
			className="movieCard__wrapper"
			onMouseEnter={handleHoverEnter}
			onMouseLeave={handleHoverExit}
		>
			<div
				className={`movieCard__overview ${
					mouseOver ? "animateEntry" : mouseOver != null ? "animateExit" : ""
				}`}
			>
				{overview}
			</div>
			<div className="movieCard__summary">
				<img
					className="movieBackdrop"
					src="https://image.tmdb.org/t/p/w500/cHkhb5A4gQRK6zs6Pv7zorHs8Nk.jpg"
					height="100%"
					width="100%"
					alt="movie-backdrop"
				/>
				<div className="movieTitle">{title}</div>
				<div className="movieCard__footer">
					<div className="movieReleaseDate">{release_date}</div>
					<div className="moviePopularity">{popularity}</div>
				</div>
			</div>
		</div>
	);
};

export default MovieCard;
