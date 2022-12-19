import { useEffect, useState } from "react";
import "./App.css";
import PokemonRenderCard from "./components/PokemonRenderCard";
import SpeciesInput from "./components/SpeciesInput";
import StarRatingInput from "./components/StarRatingInput";
import TeraTypeInput from "./components/TeraTypeInput";
import sixStar from "./data/sixStar.json";
import { PokemonRenderDetails, StarRating, TeraType } from "./types";
import getRecommendations from "./utils/getRecommendations";

function App() {
	// Create states to track each input for a live refreshing form
	const [starRating, setStarRating] = useState<StarRating>(6);
	const [selectedSpecies, setSelectedSpecies] = useState<string>("Tauros");
	const [teraType, setTeraType] = useState<TeraType>("Normal");

	const [raidPokemon, setRaidPokemon] = useState<PokemonRenderDetails>();

	// Create a variable to dynamically retrieve the appropriate raid list data...
	// ...based on our selected star rating.
	const relevantData = starRating === 6 ? sixStar : [];

	// Refetch recommendations and update render state every time form inputs are changed.
	useEffect(() => {
		getRecommendations(relevantData, selectedSpecies, teraType).then(
			(result) => {
				console.log("result ", result.raid_pokemon);
				setRaidPokemon(result.raid_pokemon);
			}
		);
	}, [starRating, selectedSpecies, teraType, relevantData]);

	return (
		<>
			<div className="wrapper">
				<section className="input-section">
					<StarRatingInput
						value={starRating}
						onChange={setStarRating}
					/>
					<SpeciesInput
						value={selectedSpecies}
						onChange={setSelectedSpecies}
						data={relevantData}
					/>
					<TeraTypeInput value={teraType} onChange={setTeraType} />
				</section>
				<section className="results-section">
					{raidPokemon != undefined && (
						<PokemonRenderCard pokemon={raidPokemon} />
					)}
				</section>
			</div>
		</>
	);
}

export default App;
