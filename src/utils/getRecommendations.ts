import PokeAPI, { IMove, IType } from "pokeapi-typescript";
import { PokemonRenderDetails, RaidData, TeraType } from "../types";
import sanitizeMove from "./sanitizeMove";
import sanitizedType from "./sanitizeType";

/**
 * A function that retrieves raid pokemon data and generates recommendations
 * from a raid star rating, pokemon species, and tera type.
 * @param data
 * @param selectedSpecies
 * @param teraType
 */
const getRecommendations = async (
	data: RaidData[],
	selectedSpecies: string,
	teraType: TeraType
): Promise<{
	raid_pokemon: PokemonRenderDetails;
}> => {
	// Fetch selected pokemon (using selectedSpecies, in state) from PokeAPI
	const { types, sprites, abilities, stats } = await PokeAPI.Pokemon.fetch(
		selectedSpecies
	);

	// GET ADDITIONAL TERA TYPE DETAILS -------------------------------------------------- //

	const teraTypeDetails = await PokeAPI.Type.fetch(teraType);
	const sanitizedTeraType = sanitizedType(teraTypeDetails);

	// ---------------------------------------------------------------------------------- //

	// GET ADDITIONAL BASE TYPES DETAILS ------------------------------------------------- //

	// Use type list from pokemon to fetch array of raid move info from PokeAPI
	const typePromises = await Promise.allSettled(
		types?.map((typeEntry) =>
			PokeAPI.Type.fetch(typeEntry.type.name).then((result) => {
				return result;
			})
		) || []
	);

	// Clean up the move promises to only include those that resolved successfully...
	// ...then extract their data and sanitize it.
	const sanitizedTypes = typePromises
		.filter((el) => el.status === "fulfilled")
		.map((el) =>
			sanitizedType((el as PromiseFulfilledResult<IType>).value)
		);

	// ---------------------------------------------------------------------------------- //

	// GET MOVE DETAILS ----------------------------------------------------------------- //

	// Retrieve array of move names from raid info JSON.
	const pokemonRaidDetails = data.find((el) => el.name === selectedSpecies);

	// Use raid move list from JSON to fetch array of raid move info from PokeAPI
	const movePromises = await Promise.allSettled(
		pokemonRaidDetails?.moves.map((move) =>
			PokeAPI.Move.fetch(move.replace(" ", "-"))
				.then((result) => {
					return { ...result, name: move };
				})
				.catch(() => {
					// If move fails to resolve from API (aka API doesn't have it)...
					// Return only the name.
					return { name: move };
				})
		) || []
	);

	// Convert resolved promises into array of data, and sanitize each entry.
	const sanitizedMoves = movePromises.map((el) =>
		sanitizeMove((el as PromiseFulfilledResult<IMove>).value)
	);

	// ---------------------------------------------------------------------------------- //

	return {
		raid_pokemon: {
			name: selectedSpecies,
			sprite: sprites.front_default,
			base_types: sanitizedTypes,
			tera_type: sanitizedTeraType,
			moves: sanitizedMoves,
		},
	};
};

export default getRecommendations;
