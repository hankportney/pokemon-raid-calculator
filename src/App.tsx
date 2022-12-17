import { useState } from "react";
import "./App.css";
import sixStars from "./data/sixStar";

const teraTypes = [
	"Normal",
	"Fire",
	"Water",
	"Grass",
	"Flying",
	"Fighting",
	"Poison",
	"Electric",
	"Ground",
	"Rock",
	"Psychic",
	"Ice",
	"Bug",
	"Ghost",
	"Steel",
	"Dragon",
	"Dark",
	"Fairy",
];

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

				<div className="input-container">
					<label className="input-label">Tera type</label>
					<div className="tera-type-input">
						{teraTypes.map((type) => (
							<label
								htmlFor={`tera_type_id_${type}`}
								key={`tera_type_option_${type}`}
							>
								<input
									type="radio"
									name="tera-type"
									id={`tera_type_id_${type}`}
									value={type}
								/>
								<span>
									<img
										src={`/teraTypeImages/${type.toLowerCase()}.png`}
										alt={`Tera Type: ${type}`}
									/>
									{type}
								</span>
							</label>
						))}
					</div>
				</div>

				<button onClick={getStarRaidData}>Get the raid info</button>
			</section>
		</>
	);
}

export default App;
