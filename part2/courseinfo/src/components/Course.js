import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = (props) => {
	return (
		<div>
			<Header courses={props.courses[0]} />
			<Content courses={props.courses[0]} />
			<Total courses={props.courses[0]} />
			<Header courses={props.courses[1]} />
			<Content courses={props.courses[1]} />
			<Total courses={props.courses[1]} />
		</div>
	);
};

export default Course;
