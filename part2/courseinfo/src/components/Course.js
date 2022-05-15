import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = (props) => {
	return (
		<div>
			{props.courses.map((course) => {
				return (
					<>
						<Header courses={props.course} />
						<Content courses={props.course} />
						<Total courses={props.course} />
					</>
				);
			})}
		</div>
	);
};

export default Course;
