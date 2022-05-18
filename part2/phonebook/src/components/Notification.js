function Notification(props) {
	const style = {
		background: "lightgrey",
		fontSize: "16px",
		borderStyle: "solid",
		borderRadius: "5px",
		padding: "10px",
		marginBottom: "10px",
	};

	const errorStyle = {
		color: "red",
	};

	const successStyle = {
		color: "green",
	};

	return (
		<div
			style={
				props.status === "error"
					? { ...style, ...errorStyle }
					: { ...style, ...successStyle }
			}
		>
			{props.message}
		</div>
	);
}

export default Notification;
