import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Home from "../../views/Home";
import { dummyGenreListData, dummyMovieListData } from "../../mockData";

let store;
const mockStore = configureStore();

beforeEach(() => {
	store = mockStore({
		genreList: { genreListData: dummyGenreListData },
		movieList: { movieListData: dummyMovieListData },
	});
});

const MockHome = () => {
	return (
		<Provider store={store}>
			<Home />
		</Provider>
	);
};

describe("Home Conatiner Component", () => {
	test("Dropdown is rendered", () => {
		render(<MockHome />);

		const card = screen.getByText(/action/i);

		// Checks if dropdown is visible
		expect(card).toBeVisible();
	});

	test("Searchbar is rendered", () => {
		render(<MockHome />);

		const searchInput = screen.getByTestId("search-input");

		// Checks if search input is visible
		expect(searchInput).toBeVisible();
	});

	test("Genre fetch functionality", async () => {
		render(<MockHome />);

		await waitFor(() => {
			const actions = store.getActions();

			// First action is to fetch genre
			expect(actions[0].type).toBe("GET_GENRE_LIST");
		});
	});

	// Checks if search button click triggers correct dispatch events
	test("Searchbar button functionality", async () => {
		render(<MockHome />);

		const searchInput = screen.getByTestId("search-input");
		const searchButton = screen.getByTestId("search-button");

		// Alter the input field values and trigger search button
		fireEvent.change(searchInput, { target: { value: "Tom Hanks" } });
		fireEvent.click(searchButton);

		await waitFor(() => {
			const actions = store.getActions();

			// Two actions dispatched
			expect(actions).toHaveLength(2);

			// Action for searching
			expect(actions[1].type).toBe("GET_MOVIE_LIST");
		});
	});

	// Checks if search button click triggers correct dispatch events
	test("Searchbar button functionality", async () => {
		render(<MockHome />);

		const searchInput = screen.getByTestId("search-input");
		const searchButton = screen.getByTestId("search-button");

		// Alter the input field values and trigger search button
		fireEvent.change(searchInput, { target: { value: "Paul Walker" } });
		fireEvent.click(searchButton);

		await waitFor(() => {
			const movieCard = screen.getAllByTestId("movie-card")[0];
			const releasedOnField = screen.getAllByText(/released on/i)[0];

			// Check if movie card is visible
			expect(movieCard).toBeVisible();

			// Check if released on field is visible
			expect(releasedOnField).toBeVisible();
		});
	});
});
