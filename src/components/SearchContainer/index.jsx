import React, { useState } from "react";
import "./styles.scss";
import { getMoviesByTitle } from "../../utitlities/utilFunctions";

const SearchContainer = () => {
	const [searchValue, setSearchValue] = useState("");

	const handleSearch = async (event) => {
		const search = event.target.value;
		setSearchValue(search);
		console.log(search);

		const data = await getMoviesByTitle(search);
		console.log(data);
	};
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
				<select className="dropdown" id="cars" name="cars">
					<option value="volvo">Volvo</option>
					<option value="saab">Saab</option>
					<option value="fiat">Fiat</option>
					<option value="audi">Audi</option>
				</select>
			</div>
		</div>
	);
};

export default SearchContainer;
