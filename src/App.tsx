import { useState } from "react";
import "./App.css";
import SpeciesInput from "./components/SpeciesInput";
import StarRatingInput from "./components/StarRatingInput";
import TeraTypeInput from "./components/TeraTypeInput";
import sixStar from "./data/sixStar";

function App() {
	const getStarRaidData = () => {};

	const [selectedSpecies, setSelectedSpecies] = useState<string>("cheese");

	return (
		<>
			<header></header>

			<section className="input-section">
				<StarRatingInput />
				<SpeciesInput
					value={selectedSpecies}
					onChange={setSelectedSpecies}
					data={sixStar}
				/>
				<TeraTypeInput />
				<button onClick={getStarRaidData}>Get the raid info</button>
			</section>
			<section>hello</section>
		</>
	);
}

export default App;
