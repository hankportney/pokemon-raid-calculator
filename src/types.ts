import {
	IMove,
	IMoveDamageClass,
	IMoveMetaData,
	IMoveStatChange,
	IMoveTarget,
	IPokemonSprites,
	IStat,
	IType,
	IVerboseEffect,
} from "pokeapi-typescript";

export interface RaidData {
	name: string;
	tera_type: string;
	ability: string;
	moves: string[];
	additional_moves: string[];
}

export type StarRating = 1 | 2 | 3 | 4 | 5 | 6;

export type TeraType =
	| "Normal"
	| "Fire"
	| "Water"
	| "Grass"
	| "Flying"
	| "Fighting"
	| "Poison"
	| "Electric"
	| "Ground"
	| "Rock"
	| "Psychic"
	| "Ice"
	| "Bug"
	| "Ghost"
	| "Steel"
	| "Dragon"
	| "Dark"
	| "Fairy";

export type SanitizedMove = {
	accuracy: IMove["accuracy"] | null;
	damage_class: IMoveDamageClass["name"] | null;
	effect_chance: IMove["effect_chance"] | null;
	effect_entry: IVerboseEffect["short_effect"] | null;
	meta: IMoveMetaData | null;
	name: string;
	power: IMove["power"] | null;
	pp: IMove["pp"] | null;
	priority: IMove["priority"] | null;
	stat_changes: {
		change: IMoveStatChange["change"];
		stat: IMoveStatChange["stat"]["name"];
	}[];
	target: IMoveTarget["name"] | null;
	type: IType["name"] | null;
};

export interface CleanDamageRelations {
	double_damage_from: IType["name"][];
	double_damage_to: IType["name"][];
	half_damage_from: IType["name"][];
	half_damage_to: IType["name"][];
	no_damage_from: IType["name"][];
	no_damage_to: IType["name"][];
}

export interface SanitizedType {
	damage_relations: CleanDamageRelations;
	damage_class: IMove["damage_class"]["name"];
	name: IType["name"];
}

export interface PokemonRenderDetails {
	name: string;
	sprite: IPokemonSprites["front_default"];
	base_types: SanitizedType[];
	tera_type: SanitizedType;
	moves: SanitizedMove[];
	additional_moves: SanitizedMove[];
}
