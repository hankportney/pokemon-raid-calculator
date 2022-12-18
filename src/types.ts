import {
	IMove,
	IMoveDamageClass,
	IMoveMetaData,
	IMoveStatChange,
	IMoveTarget,
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
