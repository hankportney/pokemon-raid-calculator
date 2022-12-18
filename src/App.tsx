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
		</>
	);
}

export default App;
