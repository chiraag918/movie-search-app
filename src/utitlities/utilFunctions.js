import { apiKey, baseUrl } from "../constants/appConstants";

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

export async function getMoviesByActor(actorName) {
	const actorId = await searchActor(actorName);
	if (actorId) {
		const response = await fetch(
			`${baseUrl}/3/discover/movie?api_key=${apiKey}&with_cast=${actorId}`
		);
		const data = await response.json();
		return data.results;
	}
	return [];
}

export async function getMoviesByTitle(movieTitle) {
	const response = await fetch(
		`${baseUrl}/3/search/movie?api_key=${apiKey}&query=${movieTitle}`
	);
	const data = await response.json();
	return data.results;
}

export async function getMoviesByGenre(genreId) {
	const response = await fetch(
		`${baseUrl}/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}`
	);
	const data = await response.json();
	return data.results;
}
