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
	accuracy: IMove["accuracy"];
	damage_class: IMoveDamageClass["name"];
	effect_chance: IMove["effect_chance"];
	effect_entry: IVerboseEffect["short_effect"];
	meta: IMoveMetaData;
	name: string;
	power: IMove["power"];
	pp: IMove["pp"];
	priority: IMove["priority"];
	stat_changes: {
		change: IMoveStatChange["change"];
		stat: IMoveStatChange["stat"]["name"];
	}[];
	target: IMoveTarget["name"];
	type: IType["name"];
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
}
