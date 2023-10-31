import React from "react";
import { render, screen } from "@testing-library/react";
import Fallback from "../../components/Fallback";

describe("Fallback Component", () => {
	test("should render the Fallback component with the correct content", () => {
		render(<Fallback />);

		// Checks if fallback message rendered
		const fallbackMsg = screen.getByText(
			"No records found for this actor or genre. Please try with someother value."
		);
		expect(fallbackMsg).toBeVisible();
	});

	test("should render the Fallback icon correctly", () => {
		render(<Fallback />);

		// Checks if warning icon rendered
		const warningIcon = screen.getByAltText("warning");
		expect(warningIcon).toBeVisible();
	});
});
