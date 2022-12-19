import { IMove } from "pokeapi-typescript";
import { SanitizedMove } from "../types";

/**
 * A utility that reduces a PokeAPI `IMove` to useful display content.
 * @param move An `IMove` from PokeAPI.
 * @returns
 */
const sanitizeMove = ({
	accuracy,
	damage_class,
	effect_chance,
	effect_entries,
	meta,
	name,
	power,
	pp,
	priority,
	stat_changes,
	target,
	type,
}: IMove): SanitizedMove => {
	if (accuracy != null) {
		return {
			accuracy,
			damage_class: damage_class.name,
			effect_chance,
			effect_entry: effect_entries[0].short_effect,
			meta,
			name,
			power,
			pp,
			priority,
			stat_changes: stat_changes.map((el) => ({
				stat: el.stat.name,
				change: el.change,
			})),
			target: target.name,
			type: type.name,
		};
	} else {
		return {
			accuracy: null,
			damage_class: null,
			effect_chance: null,
			effect_entry: "Unable to retrieve move information from pokeAPI",
			meta: null,
			name,
			power: null,
			pp: null,
			priority: null,
			stat_changes: [],
			target: null,
			type: null,
		};
	}
};

export default sanitizeMove;
