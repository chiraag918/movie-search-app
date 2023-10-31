import { useCallback, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_MOVIE_LIST } from "../../actions/movieList/actionTypes";
import SearchBar from "../SearchBar";
import "./styles.scss";
import { throttle } from "../../utitlities";

const SearchContainer = () => {
	const [searchValue, setSearchValue] = useState("");
	const genreDropdownRef = useRef();

	const dispatch = useDispatch();

	const updateSearchField = useCallback((event) => {
		const search = event.target.value;

		setSearchValue(search);
	}, []);

	// Rate limiting/ Throttling API call based on some delay value to avoid multiple API resquests on search button clicks and genre option change
	const throttleApiCall = useMemo(() => throttle(dispatch, 1000), [dispatch]);

	const handleSearch = useCallback(
		async (event) => {
			const genre = genreDropdownRef.current.value;

			// Fetch movies when search button pressed
			throttleApiCall({
				type: GET_MOVIE_LIST,
				payload: { actorName: searchValue, genreId: genre },
			});
		},
		[searchValue, throttleApiCall]
	);

	const handleGenreChange = useCallback(
		async (event) => {
			const genre = event.target.value;

			// Fetch movies when genre changed
			throttleApiCall({
				type: GET_MOVIE_LIST,
				payload: { actorName: searchValue, genreId: genre },
			});
		},
		[searchValue, throttleApiCall]
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
