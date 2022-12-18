import { Dispatch, FC, SetStateAction } from "react";
import "./StarRatingInput.css";

interface StarRatingInputProps {
	value: number;
	onChange: Dispatch<SetStateAction<number>>;
}

const StarRatingInput: FC<StarRatingInputProps> = ({ value, onChange }) => {
	return (
		<fieldset className="star-rating">
			<legend>Raid star rating</legend>
			<div>
				<input
					type="radio"
					name="rating"
					value="1"
					id="rating1"
					checked={value === 1}
					onChange={(e) =>
						e.currentTarget.checked ? onChange(1) : null
					}
				/>
				<label htmlFor="rating1">
					<span>1</span>
				</label>
				<input
					type="radio"
					name="rating"
					value="2"
					id="rating2"
					checked={value === 2}
					onChange={(e) =>
						e.currentTarget.checked ? onChange(2) : null
					}
				/>
				<label htmlFor="rating2">
					<span>2</span>
				</label>
				<input
					type="radio"
					name="rating"
					value="3"
					id="rating3"
					checked={value === 3}
					onChange={(e) =>
						e.currentTarget.checked ? onChange(3) : null
					}
				/>
				<label htmlFor="rating3">
					<span>3</span>
				</label>
				<input
					type="radio"
					name="rating"
					value="4"
					id="rating4"
					checked={value === 4}
					onChange={(e) =>
						e.currentTarget.checked ? onChange(4) : null
					}
				/>
				<label htmlFor="rating4">
					<span>4</span>
				</label>
				<input
					type="radio"
					name="rating"
					value="5"
					id="rating5"
					checked={value === 5}
					onChange={(e) =>
						e.currentTarget.checked ? onChange(5) : null
					}
				/>
				<label htmlFor="rating5">
					<span>5</span>
				</label>
				<input
					type="radio"
					name="rating"
					value="6"
					id="rating6"
					checked={value === 6}
					onChange={(e) =>
						e.currentTarget.checked ? onChange(6) : null
					}
				/>
				<label htmlFor="rating6">
					<span>6</span>
				</label>
			</div>
		</fieldset>
	);
};

export default StarRatingInput;
