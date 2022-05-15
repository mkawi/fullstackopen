function PersonForm(props) {
	return (
		<form>
			<div>
				name:{" "}
				<input
					onChange={(e) => props.setNewName(e.target.value)}
					value={props.newName}
				/>
			</div>
			<div>
				number:{" "}
				<input
					onChange={(e) => props.setNewNumber(e.target.value)}
					value={props.newNumber}
				/>
			</div>
			<div>
				<button type="submit" onClick={(e) => props.submitForm(e)}>
					add
				</button>
			</div>
		</form>
	);
}

export default PersonForm;
