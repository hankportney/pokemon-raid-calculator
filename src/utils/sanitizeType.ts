import { IType, ITypeRelations } from "pokeapi-typescript";
import { CleanDamageRelations, SanitizedType } from "../types";

/**
 * A utility that reduces a PokeAPI `IMove` to useful display content.
 * @param move An `IMove` from PokeAPI.
 * @returns
 */
const sanitizedType = ({
	damage_relations,
	move_damage_class,
	name,
}: IType): SanitizedType => {
	let clean_damage_relations: CleanDamageRelations = {
		double_damage_from: [],
		double_damage_to: [],
		half_damage_from: [],
		half_damage_to: [],
		no_damage_from: [],
		no_damage_to: [],
	};
	Object.keys(damage_relations).forEach((key) => {
		clean_damage_relations[key as keyof ITypeRelations] = damage_relations[
			key as keyof ITypeRelations
		].map((el) => el.name);
	});

	return {
		name: name.charAt(0).toUpperCase() + name.slice(1),
		damage_class: move_damage_class.name,
		damage_relations: clean_damage_relations,
	};
};

export default sanitizedType;
