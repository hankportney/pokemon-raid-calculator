import { Dispatch, FC, SetStateAction } from "react";
import "./TeraTypeInput.css";

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

const teraTypes: TeraType[] = [
	"Normal",
	"Fire",
	"Water",
	"Grass",
	"Flying",
	"Fighting",
	"Poison",
	"Electric",
	"Ground",
	"Rock",
	"Psychic",
	"Ice",
	"Bug",
	"Ghost",
	"Steel",
	"Dragon",
	"Dark",
	"Fairy",
];

interface TeraTypeInputProps {
	value: TeraType | undefined;
	onChange: Dispatch<SetStateAction<TeraType | undefined>>;
}

const TeraTypeInput: FC<TeraTypeInputProps> = ({ value, onChange }) => {
	return (
		<fieldset className="tera-type-input">
			<legend>Tera type</legend>
			<div className="radio-options-container">
				{teraTypes.map((type) => (
					<label
						htmlFor={`tera_type_id_${type}`}
						key={`tera_type_option_${type}`}
					>
						<input
							type="radio"
							name="tera-type"
							id={`tera_type_id_${type}`}
							value={type}
							checked={value === type}
							onChange={(e) =>
								e.target.checked ? onChange(type) : null
							}
						/>
						<span>
							<img
								src={`/teraTypeImages/${type.toLowerCase()}.png`}
								alt={`Tera Type: ${type}`}
							/>
							{type}
						</span>
					</label>
				))}
			</div>
		</fieldset>
	);
};

export default TeraTypeInput;
