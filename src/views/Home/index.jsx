import React, { useEffect } from "react";
import "./styles.scss";
import SearchContainer from "../../components/SearchContainer";
import MovieCard from "../../components/MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { GET_GENRE_LIST } from "../../actions/genreList/actionTypes";
import Loader from "../../components/Loader";

const Home = () => {
	const dispatch = useDispatch();

	const movieList = useSelector((state) => state.movieList);
	console.log(movieList);

	useEffect(() => {
		dispatch({
			type: GET_GENRE_LIST,
		});
	});

	return (
		<div className="mainContainer">
			<SearchContainer />
			{movieList.getMovieListLoading ? (
				<Loader />
			) : (
				<div className="movieCard__container">
					{!movieList.movieListData
						? "Welcome"
						: Array.isArray(movieList.movieListData) &&
						  movieList.movieListData.length > 0
						? movieList.movieListData.map((movie) => (
								<MovieCard key={movie.id} movie={movie} />
						  ))
						: ""}
				</div>
			)}
		</div>
	);
};

export default Home;
