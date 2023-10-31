// Utility constants
export const baseUrl = process.env.REACT_APP_MOVIES_API_URL;
export const apiKey = process.env.REACT_APP_MOVIES_API_KEY;

// Utility functions
export async function searchActor(actorName) {
	const response = await fetch(
		`${baseUrl}/3/search/person?api_key=${apiKey}&query=${actorName}`
	);
	const data = await response.json();
	if (data.results.length > 0) {
		const actorId = data.results[0].id;
		return actorId;
	}
	return null;
}

export async function getMovieGenres() {
	try {
		const response = await fetch(
			`${baseUrl}/3/genre/movie/list?api_key=${apiKey}&language=en-US`
		);
		const data = await response.json();
		return data.genres;
	} catch (error) {
		console.error("Error fetching genres:", error);
		throw error;
	}
}

export async function getMoviesByActorAndGenre(actorName, genreId) {
	const actorId = await searchActor(actorName);
	if (actorId) {
		const response = await fetch(
			`${baseUrl}/3/discover/movie?api_key=${apiKey}&with_cast=${actorId}&with_genres=${genreId}`
		);
		const data = await response.json();
		return data.results;
	}
	return [];
}

export function isArrayAndHasData(value) {
	return Array.isArray(value) && value.length > 0;
}

// Throttle function to rate limit function calls
export function throttle(fn, delay) {
	let executeFunction = true,
		timer;

	return function (args) {
		const context = this;

		if (executeFunction) {
			clearTimeout(timer);

			fn.call(context, args);

			executeFunction = false;

			timer = setTimeout(() => {
				executeFunction = true;
			}, delay);
		}
	};
}
