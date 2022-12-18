import { useState } from "react";
import "./App.css";
import TeraTypeInput from "./components/TeraTypeInput";
import sixStars from "./data/sixStar";

function App() {
	const getStarRaidData = () => {};

	const [selectedSpecies, setSelectedSpecies] = useState<string>("cheese");

	return (
		<>
			<header></header>

			<section className="input-section">
				<div className="input-container">
					<label htmlFor="species" className="input-label">
						Pokémon species
					</label>
					<select
						name="species"
						value={selectedSpecies}
						onChange={(e) => {
							console.log("e", e.currentTarget.value);
							setSelectedSpecies(e.currentTarget.value);
						}}
					>
						{sixStars.map((el) => (
							<option
								key={`select-option-${el.name}`}
								value={el.name}
							>
								{el.name}
							</option>
						))}
					</select>
				</div>
				<TeraTypeInput />
				<button onClick={getStarRaidData}>Get the raid info</button>
			</section>
		</>
	);
}

export default App;
