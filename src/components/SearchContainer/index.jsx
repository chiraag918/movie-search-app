import React, { useRef, useState } from "react";
import "./styles.scss";
import {
	getMovieGenres,
	getMoviesByActorAndGenre,
} from "../../utitlities/utilFunctions";
import { useDispatch, useSelector } from "react-redux";
import { GET_MOVIE_LIST } from "../../actions/movieList/actionTypes";

const SearchContainer = () => {
	const [searchValue, setSearchValue] = useState("");
	const genreDropdownRef = useRef();
	const dispatch = useDispatch();

	const handleSearch = async (event) => {
		const search = event.target.value;
		const genre = genreDropdownRef.current.value;

		setSearchValue(search);

		dispatch({
			type: GET_MOVIE_LIST,
			payload: { actorName: search, genreId: genre },
		});
	};

	const handleGenreChange = async (event) => {
		const data = await getMovieGenres();
		console.log(data);
	};

	const genreList = useSelector((state) => state.genreList.genreListData);

	return (
		<div className="searchContainer">
			<input
				className="searchBar"
				type="text"
				placeholder="Search by Movie or Actor"
				value={searchValue}
				onChange={handleSearch}
			/>
			<div className="dropdownContainer">
				{genreList && (
					<select
						ref={genreDropdownRef}
						className="dropdown"
						id="cars"
						name="cars"
						onChange={handleGenreChange}
					>
						{genreList?.map((option) => (
							<option key={option.id} value={option.id}>
								{option.name}
							</option>
						))}
					</select>
				)}
			</div>
		</div>
	);
};

export default SearchContainer;
