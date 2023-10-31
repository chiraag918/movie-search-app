import { useCallback, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_MOVIE_LIST } from "../../actions/movieList/actionTypes";
import SearchBar from "../SearchBar";
import "./styles.scss";

const SearchContainer = () => {
	const [searchValue, setSearchValue] = useState("");
	const [valueSearched, setValueSearched] = useState(false);
	const genreDropdownRef = useRef();

	const dispatch = useDispatch();

	const updateSearchField = useCallback((event) => {
		const search = event.target.value;

		setSearchValue(search);
		setValueSearched(false);
	}, []);

	const handleSearch = useCallback(
		async (event) => {
			const genre = genreDropdownRef.current.value;

			// Rate limiting API call based on search field value change
			// Fetch movies when search button pressed
			if (!valueSearched) {
				dispatch({
					type: GET_MOVIE_LIST,
					payload: { actorName: searchValue, genreId: genre },
				});
			}

			setValueSearched(true);
		},
		[dispatch, valueSearched, searchValue]
	);

	const handleGenreChange = useCallback(
		async (event) => {
			const genre = event.target.value;

			// Fetch movies when genre changed
			dispatch({
				type: GET_MOVIE_LIST,
				payload: { actorName: searchValue, genreId: genre },
			});
		},
		[dispatch, searchValue]
	);

	const genreList = useSelector((state) => state.genreList.genreListData);

	return (
		<div className="searchContainer">
			<SearchBar
				value={searchValue}
				onChange={updateSearchField}
				handleSearch={handleSearch}
			/>
			<div className="dropdownContainer">
				{genreList && (
					<select
						ref={genreDropdownRef}
						className="dropdown"
						id="genre"
						name="genre"
						onChange={handleGenreChange}
						data-testid="genre-select"
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
