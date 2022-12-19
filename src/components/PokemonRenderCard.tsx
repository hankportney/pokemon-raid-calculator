import { FC } from "react";
import { PokemonRenderDetails, SanitizedMove } from "../types";
import "./PokemonRenderCard.css";

interface PokemonRenderCardProps {
	pokemon: PokemonRenderDetails;
}

const MoveRow: FC<{ move: SanitizedMove }> = ({ move }) => {
	return (
		<tr>
			<td>{move.name}</td>
			<td>
				{move.type != null ? (
					<img
						src={`typeBadges/${move.type}.png`}
						alt={`Pokemon move type: ${move.type}`}
						className="move-type-badge"
					/>
				) : (
					"--"
				)}
			</td>
			<td>{move.power || "--"}</td>
			<td>{move.accuracy || "--"}</td>
		</tr>
	);
};

const PokemonRenderCard: FC<PokemonRenderCardProps> = ({ pokemon }) => {
	console.log(pokemon.base_types);
	return (
		<article className="pokemon-card">
			<div className="title-row">
				<h1>{pokemon.name}</h1>
				<span className="badge-group">
					{pokemon.base_types.map((type) => (
						<img
							src={`typeBadges/${type.name.toLowerCase()}.png`}
							alt={`Pokemon type: ${type.name}`}
							className="type-badge"
						/>
					))}
					<span className="divider"></span>
					<img
						src={`typeBadges/${pokemon.tera_type.name.toLowerCase()}.png`}
						alt={`Pokemon Tera type: ${pokemon.tera_type.name}`}
						className="type-badge"
					/>
				</span>
			</div>

			<img
				src={pokemon.sprite}
				alt={`Sprite of ${pokemon.name}`}
				className="sprite"
			/>

			<table className="move-table">
				<thead>
					<tr>
						<th>Base moves</th>
						<th>Type</th>
						<th>Power</th>
						<th>Accuracy</th>
					</tr>
				</thead>
				<tbody>
					{pokemon.moves.map((move) => (
						<MoveRow
							key={`Raid_pokemon_move_${move.name}`}
							move={move}
						/>
					))}
					<tr>
						<th>Additional moves</th>
					</tr>
					{pokemon.additional_moves.map((move) => (
						<MoveRow
							key={`Raid_pokemon_additional_move_${move.name}`}
							move={move}
						/>
					))}
				</tbody>
			</table>
		</article>
	);
};

export default PokemonRenderCard;
