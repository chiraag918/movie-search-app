import React from "react";
import { render } from "@testing-library/react";
import Loader from "../../components/Loader";

describe("Loader Component", () => {
	it("should render the Loader component", () => {
		const { container } = render(<Loader />);

		// Checks if loader container is visible
		expect(container).toBeVisible();
	});
});
