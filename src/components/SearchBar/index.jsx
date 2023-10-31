import SearchIcon from "../../assets/images/search.png";
import "./styles.scss";

const SearchBar = ({ value, onChange, handleSearch }) => {
	return (
		<div className="searchBar__Wrapper">
			<input
				className="searchBar"
				type="text"
				placeholder="Movies by Actor..."
				value={value}
				onChange={onChange}
				data-testid="search-input"
			/>
			<img
				src={SearchIcon}
				className="searchIcon"
				alt="search-icon"
				onClick={handleSearch}
				data-testid="search-button"
			/>
		</div>
	);
};

export default SearchBar;
