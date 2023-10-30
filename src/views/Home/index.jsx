import React from "react";
import "./styles.scss";
import SearchContainer from "../../components/SearchContainer";
import MovieCard from "../../components/MovieCard";

const Home = () => {
	return (
		<div className="mainContainer">
			<SearchContainer />
			<MovieCard/>
		</div>
	);
};

export default Home;
