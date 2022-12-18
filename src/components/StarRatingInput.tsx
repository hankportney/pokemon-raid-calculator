import "./StarRatingInput.css";

const StarRatingInput = () => {
	return (
		<fieldset className="star-rating">
			<legend>Raid star rating</legend>
			<div>
				<input type="radio" name="rating" value="1" id="rating1" />
				<label htmlFor="rating1">
					<span>1</span>
				</label>
				<input type="radio" name="rating" value="2" id="rating2" />
				<label htmlFor="rating2">
					<span>2</span>
				</label>
				<input type="radio" name="rating" value="3" id="rating3" />
				<label htmlFor="rating3">
					<span>3</span>
				</label>
				<input type="radio" name="rating" value="4" id="rating4" />
				<label htmlFor="rating4">
					<span>4</span>
				</label>
				<input type="radio" name="rating" value="5" id="rating5" />
				<label htmlFor="rating5">
					<span>5</span>
				</label>
				<input type="radio" name="rating" value="6" id="rating6" />
				<label htmlFor="rating6">
					<span>6</span>
				</label>
			</div>
		</fieldset>
	);
};

export default StarRatingInput;
