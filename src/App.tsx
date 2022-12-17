import "./App.css";
import sixStars from "./data/sixStar";

function App() {
	const getStarRaidData = () => {};

	return (
		<>
			<header></header>
			<select name="species">
				{sixStars.map((el) => (
					<option value={el.name}>{el.name}</option>
				))}
			</select>
			<button onClick={getStarRaidData}>Get the raid info</button>
		</>
	);
}

export default App;
