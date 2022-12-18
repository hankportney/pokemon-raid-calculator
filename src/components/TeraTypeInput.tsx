const teraTypes = [
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

const TeraTypeInput = () => {
	return (
		<fieldset>
			<legend>Tera type</legend>
			<div className="tera-type-input">
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
