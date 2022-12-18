import PokeAPI, { IMove, IType } from "pokeapi-typescript";
import { RaidData, StarRating, TeraType } from "../types";
import sanitizeMove from "./sanitizeMove";
import sanitizedType from "./sanitizeType";

/**
 * A function that retrieves raid pokemon data and generates recommendations
 * from a raid star rating, pokemon species, and tera type.
 * @param data
 * @param starRating
 * @param selectedSpecies
 * @param teraType
 */
const getRecommendations = async (
	data: RaidData[],
	starRating: StarRating,
	selectedSpecies: string,
	teraType: TeraType | undefined
) => {
	// Fetch selected pokemon (using selectedSpecies, in state) from PokeAPI
	const { types, sprites } = await PokeAPI.Pokemon.fetch(selectedSpecies);

	// GET ADDITIONAL TYPE DETAILS ------------------------------------------------------ //

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

	// GET ADDITIONAL MOVE DETAILS ------------------------------------------------------ //

	// Retrieve array of move names from raid info JSON.
	const pokemonRaidDetails = data.find((el) => el.name === selectedSpecies);

	// Use raid move list from JSON to fetch array of raid move info from PokeAPI
	const movePromises = await Promise.allSettled(
		pokemonRaidDetails?.moves.map((move) =>
			PokeAPI.Move.fetch(move.replace(" ", "-")).then((result) => {
				return { ...result, name: move };
			})
		) || []
	);

	// Clean up the move promises to only include those that resolved successfully...
	// ...then extract their data and sanitize it.
	const sanitizedMoves = movePromises
		.filter((el) => el.status === "fulfilled")
		.map((el) => sanitizeMove((el as PromiseFulfilledResult<IMove>).value));

	// ---------------------------------------------------------------------------------- //

	console.log("Sanitized types: ", sanitizedTypes);
	console.log("Sanitized moves: ", sanitizedMoves);
	console.log("sprite front default ", sprites.front_default);
};

export default getRecommendations;
