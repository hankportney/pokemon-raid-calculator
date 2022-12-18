import { FC } from "react";
import { PokemonRenderDetails } from "../types";
import "./PokemonRenderCard.css";

interface PokemonRenderCardProps {
	pokemon: PokemonRenderDetails;
}

const PokemonRenderCard: FC<PokemonRenderCardProps> = ({ pokemon }) => {
	console.log(pokemon.base_types);
	return (
		<article className="pokemon-card">
			<div className="title-row">
				<h1>{pokemon.name}</h1>
				<span className="badge-group">
					{pokemon.base_types.map((type) => (
						<img
							src={`/typeBadges/${type.name.toLowerCase()}.png`}
							alt={`Pokemon type: ${type.name}`}
							className="type-badge"
						/>
					))}
					<span className="divider"></span>
					<img
						src={`/typeBadges/${pokemon.tera_type.name.toLowerCase()}.png`}
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
		</article>
	);
};

export default PokemonRenderCard;
