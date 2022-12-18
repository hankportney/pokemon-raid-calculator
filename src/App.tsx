import { useEffect, useState } from "react";
import "./App.css";
import SpeciesInput from "./components/SpeciesInput";
import StarRatingInput from "./components/StarRatingInput";
import TeraTypeInput from "./components/TeraTypeInput";
import sixStar from "./data/sixStar";
import { StarRating, TeraType } from "./types";
import getRecommendations from "./utils/getRecommendations";

function App() {
	// Create states to track each input for a live refreshing form
	const [starRating, setStarRating] = useState<StarRating>(6);
	const [selectedSpecies, setSelectedSpecies] = useState<string>("Tauros");
	const [teraType, setTeraType] = useState<TeraType | undefined>();

	// Create a variable to dynamically retrieve the appropriate raid list data...
	// ...based on our selected star rating.
	const relevantData = starRating === 6 ? sixStar : [];

	// Refetch recommendations and update render state every time form inputs are changed.
	useEffect(() => {
		getRecommendations(
			relevantData,
			starRating,
			selectedSpecies,
			teraType
		).then((result) => {});
	}, [starRating, selectedSpecies, teraType, relevantData]);

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
		</>
	);
}

export default App;
