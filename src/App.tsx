import { useState } from "react";
import "./App.css";
import SpeciesInput from "./components/SpeciesInput";
import StarRatingInput from "./components/StarRatingInput";
import TeraTypeInput, { TeraType } from "./components/TeraTypeInput";
import sixStar from "./data/sixStar";
import PokeAPI from "pokeapi-typescript";

function App() {
	const [starRating, setStarRating] = useState<number>(6);
	const [selectedSpecies, setSelectedSpecies] = useState<string>("Tauros");
	const [teraType, setTeraType] = useState<TeraType | undefined>();
	const getTypes = async () => {
		const result = await PokeAPI.Pokemon.fetch(selectedSpecies);
		alert(JSON.stringify(result.types));
		//generate weaknesses and strengths of terra type
	}

	return (
		<>
			<section className="input-section">
				<StarRatingInput value={starRating} onChange={setStarRating} />
				<SpeciesInput
					value={selectedSpecies}
					onChange={setSelectedSpecies}
					data={starRating === 6 ? sixStar : []}
				/>
				<TeraTypeInput value={teraType} onChange={setTeraType} />
			</section>
			<button onClick={getTypes}>Click Here!</button>
		</>
	);
}

export default App;
