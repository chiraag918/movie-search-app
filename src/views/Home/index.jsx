import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_GENRE_LIST } from "../../actions/genreList/actionTypes";

import Loader from "../../components/Loader";
import Fallback from "../../components/Fallback";
import MovieCard from "../../components/MovieCard";
import SearchContainer from "../../components/SearchContainer";

import "./styles.scss";
import { isArrayAndHasData } from "../../utitlities";

const Home = () => {
	const dispatch = useDispatch();

	const movieList = useSelector((state) => state.movieList);
	const movieListData = movieList.movieListData;

	// Fetch Genre list when UI loads
	useEffect(() => {
		dispatch({
			type: GET_GENRE_LIST,
		});
	});

	return (
		<div className="mainContainer">
			<SearchContainer />
			<div
				className={`contentContainer ${!movieListData ? "" : "userInteracted"}`}
			>
				{movieList.getMovieListLoading ? (
					<Loader />
				) : (
					<div className="movieCard__container">
						{isArrayAndHasData(movieListData) ? (
							movieListData.map((movie) => (
								<MovieCard key={movie.id} movie={movie} />
							))
						) : (
							<Fallback />
						)}
					</div>
				)}
			</div>
		</div>
	);
};

export default Home;
