import Part from "./Part";

const Content = (props) => {
	return (
		<div>
			{props.courses.parts.map((part) => {
				return (
					<Part key={part.id} name={part.name} exercises={part.exercises} />
				);
			})}
		</div>
	);
};

export default Content;
