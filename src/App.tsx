import PokeAPI, { IMove } from "pokeapi-typescript";
import { useState } from "react";
import "./App.css";
import SpeciesInput from "./components/SpeciesInput";
import StarRatingInput from "./components/StarRatingInput";
import TeraTypeInput, { TeraType } from "./components/TeraTypeInput";
import sixStar from "./data/sixStar";

function App() {
	const [starRating, setStarRating] = useState<number>(6);
	const [selectedSpecies, setSelectedSpecies] = useState<string>("Tauros");
	const [teraType, setTeraType] = useState<TeraType | undefined>();

	// Create a variable to dynamically retrieve the appropriate raid list data...
	// ...based on our selected star rating.
	const relevantData = starRating === 6 ? sixStar : [];

	const getTypes = async () => {
		// Fetch selected pokemon (using selectedSpecies, in state) from PokeAPI
		const { types } = await PokeAPI.Pokemon.fetch(selectedSpecies);

		// Retrieve array of move names from raid info JSON.
		const pokemonRaidDetails = relevantData.find(
			(el) => el.name === selectedSpecies
		);

		// Use raid move list from JSON to fetch array of raid move info from PokeAPI
		const movePromises = await Promise.allSettled(
			pokemonRaidDetails?.moves.map((move) =>
				PokeAPI.Move.fetch(move.replace(" ", "-")).then((result) => {
					return result;
				})
			) || []
		);

		// Clean up the move promises to only include those that resolved successfully, and extract their data.
		const sanitizedMoves = movePromises
			.filter((el) => el.status === "fulfilled")
			.map((el) => (el as PromiseFulfilledResult<IMove>).value);

		console.log("Sanitized moves: ", sanitizedMoves);
	};

	return (
		<>
			<section className="input-section">
				<StarRatingInput value={starRating} onChange={setStarRating} />
				<SpeciesInput
					value={selectedSpecies}
					onChange={setSelectedSpecies}
					data={relevantData}
				/>
				<TeraTypeInput value={teraType} onChange={setTeraType} />
			</section>
			<button onClick={getTypes}>Click Here!</button>
		</>
	);
}

export default App;
