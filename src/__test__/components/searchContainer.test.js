import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import SearchContainer from "../../components/SearchContainer";
import { dummyGenreListData } from "../../mockData";

let store;
const mockStore = configureStore();

beforeEach(() => {
	store = mockStore({
		genreList: { genreListData: dummyGenreListData },
	});
});

const MockSearchContainer = () => {
	return (
		<Provider store={store}>
			<SearchContainer />
		</Provider>
	);
};

describe("Search Container Component", () => {
	test("Dropdown is rendered", () => {
		render(<MockSearchContainer />);

		const card = screen.getByText(/action/i);

		// Checks if dropdown is visible
		expect(card).toBeVisible();
	});

	test("Searchbar is rendered", () => {
		render(<MockSearchContainer />);

		const searchInput = screen.getByTestId("search-input");

		// Checks if search input is visible
		expect(searchInput).toBeVisible();
	});

	// Checks if search button click triggers correct dispatch events
	test("Searchbar button functionality", async () => {
		render(<MockSearchContainer />);

		const searchInput = screen.getByTestId("search-input");
		const searchButton = screen.getByTestId("search-button");
		const genreSelect = screen.getByTestId("genre-select");

		// Alter the input field values and trigger search button
		fireEvent.change(searchInput, { target: { value: "Tom Hanks" } });
		fireEvent.click(searchButton);
		fireEvent.change(genreSelect, { target: { value: 28 } });

		await waitFor(() => {
			const actions = store.getActions();

			// Two actions dispatched
			expect(actions).toHaveLength(2);

			// Action for searching
			expect(actions[0].type).toBe("GET_MOVIE_LIST");

			// Action for genre change
			expect(actions[1].type).toBe("GET_MOVIE_LIST");
		});
	});
});
