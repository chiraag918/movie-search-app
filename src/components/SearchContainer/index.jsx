import React from "react";
import "./styles.scss";

const SearchContainer = () => {
	return (
		<div className="searchContainer">
			<input
				className="searchBar"
				type="text"
				placeholder="Search by Movie or Actor"
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
