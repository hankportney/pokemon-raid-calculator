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
			<span>
				<h1>{pokemon.name}</h1>
				{pokemon.base_types.map((type) => (
					<img
						src={`./typeBadges/${type.name}`}
						alt={`Pokemon type: ${type.name}`}
					/>
				))}
			</span>

			<img
				src={pokemon.sprite}
				alt={`Sprite of ${pokemon.name}`}
				className="sprite"
			/>
		</article>
	);
};

export default PokemonRenderCard;
