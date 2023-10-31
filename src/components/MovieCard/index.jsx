import { useCallback, useState } from "react";
import "./styles.scss";

const getPopularityGroup = (popularity) =>
	popularity > 80 ? "groupA" : popularity > 40 ? "groupB" : "groupC";

const getPosterUrl = (posterPath) => {
	const baseURL = process.env.REACT_APP_MOVIES_IMG_URL;
	const posterSize = "w500";
	return `${baseURL}${posterSize}/${posterPath}`;
};

const MovieCard = ({
	movie: { title, overview, release_date, popularity, poster_path },
}) => {
	const [mouseOver, setMouseOver] = useState(null);
	const formattedReleaseDate = new Date(release_date);

	// Handle hover effects - to show overview of movie
	const handleHoverEnter = useCallback(() => {
		setMouseOver(true);
	}, []);

	const handleHoverExit = useCallback(() => {
		setMouseOver(false);
	}, []);

	return (
		<div
			className="movieCard__wrapper"
			onMouseEnter={handleHoverEnter}
			onMouseLeave={handleHoverExit}
			data-testid="movie-card"
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
					src={getPosterUrl(poster_path)}
					height={"200px"}
					alt={title}
				/>
				<div className="movieTitle">{title}</div>
				<div className="movieCard__footer">
					<div className="movieReleaseDate">
						Released on
						<span>{" " + formattedReleaseDate.toLocaleDateString()}</span>
					</div>
					<div className={`moviePopularity ${getPopularityGroup(popularity)}`}>
						{popularity.toFixed(2) + " "}
						&#9733;
					</div>
				</div>
			</div>
		</div>
	);
};

export default MovieCard;
