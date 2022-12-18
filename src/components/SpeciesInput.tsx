import { Dispatch, FC, SetStateAction } from "react";
import "./SpeciesInput.css";

interface DataType {
	name: string;
	tera_type: string;
	ability: string;
	moves: string[];
	additional_moves: string[];
}

interface SpeciesInputProps {
	value: string;
	onChange: Dispatch<SetStateAction<string>>;
	data: DataType[];
}

const SpeciesInput: FC<SpeciesInputProps> = ({ value, onChange, data }) => {
	return (
		<div className="species-input-container">
			<label htmlFor="species" className="input-label">
				Pokémon species
			</label>
			<select
				name="species"
				value={value}
				onChange={(e) => onChange(e.currentTarget.value)}
			>
				{data.map((el) => (
					<option key={`select-option-${el.name}`} value={el.name}>
						{el.name}
					</option>
				))}
			</select>
		</div>
	);
};

export default SpeciesInput;
